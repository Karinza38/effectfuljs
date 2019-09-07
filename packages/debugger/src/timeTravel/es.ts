import config from "../config";
import {
  TraceMeta,
  TraceData,
  defaultWrap,
  traceMetaSymbol,
  traceDataSymbol,
  Target,
  allProps,
  captureSnapshot,
  record,
  journal,
  defaultTrapsWithGetter,
  notTraceable,
  Record
} from "./core";
import { regConstructor } from "@effectful/serialization";

declare global {
  interface Map<K, V> extends Target<Map<K, V>> {}
  interface Set<T> extends Target<Set<T>> {}
  interface Promise<T> extends Target<Promise<T>> {}
  interface MessageChannel extends Target<MessageChannel> {}
}

declare module "./core" {
  interface TraceData<T> {
    lastContUpdate: Record | null;
  }
}

function prototypeFwds(resProto: any) {
  const proto = Object.getPrototypeOf(resProto);
  for (const i of allProps(proto)) {
    if (i === "constructor") continue;
    const descr = Object.getOwnPropertyDescriptor(proto, i);
    if (!descr) continue;
    const orig = descr.value;
    if (typeof orig !== "function") continue;
    if (resProto.hasOwnProperty(i)) continue;
    resProto[i] = function() {
      return orig.apply(this[traceDataSymbol].target, arguments);
    };
  }
  return resProto;
}

export const mapMeta: TraceMeta<Map<any, any>> = {
  wrap(target: Map<any, any>): Map<any, any> {
    const res = defaultWrap(this, target);
    res[traceDataSymbol].lastContUpdate = journal.now;
    return res;
  }
};

(<Target<Map<any, any>>>Map.prototype)[traceMetaSymbol] = mapMeta;

export class MapSnapshot<K, V> {
  changes: [K, V][];
  data: TraceData<Map<K, V>>;
  at: Record | null;
  constructor(data: TraceData<Map<K, V>>) {
    this.at = data.lastContUpdate;
    data.lastContUpdate = journal.now;
    this.data = data;
    this.changes = [...data.target];
  }
  call() {
    const { data, changes, at } = this;
    if (config.timeTravelForward) {
      data.lastContUpdate = null;
      mapSnapshot(data);
    }
    const { target } = data;
    target.clear();
    data.lastContUpdate = at;
    for (const [k, v] of changes) target.set(k, v);
  }
}
regConstructor(MapSnapshot);

function mapSnapshot<K, V>(data: TraceData<Map<K, V>>): Map<K, V> {
  if (!journal.now || data.lastContUpdate === journal.now) return data.target;
  record(new MapSnapshot<K, V>(data));
  return data.target;
}

const mapProto: any = (mapMeta.proto = Object.create(Map.prototype));
mapProto.set = function<K, V>(this: Map<K, V>, k: K, v: V): Map<K, V> {
  Map.prototype.set.call(mapSnapshot(this[traceDataSymbol]), k, v);
  return this;
};

const mapSizeDescriptor = Object.getOwnPropertyDescriptor(
  Map.prototype,
  "size"
);

if (mapSizeDescriptor && mapSizeDescriptor.get) {
  Object.defineProperty(mapProto, "size", {
    ...mapSizeDescriptor,
    get() {
      return (<any>mapSizeDescriptor).get.call(this[traceDataSymbol].target);
    }
  });
}

mapProto.delete = function<K, V>(this: Map<K, V>, k: K) {
  return Map.prototype.delete.call(mapSnapshot(this[traceDataSymbol]), k);
};

mapProto.clear = function<K, V>(this: Map<K, V>) {
  return Map.prototype.clear.call(mapSnapshot(this[traceDataSymbol]));
};

prototypeFwds(mapMeta.proto);

export const setMeta: TraceMeta<Set<any>> = {
  wrap(target: Set<any>): Set<any> {
    const res = defaultWrap(this, target, defaultTrapsWithGetter);
    res[traceDataSymbol].lastContUpdate = journal.now;
    return res;
  }
};

(<Target<Set<any>>>Set.prototype)[traceMetaSymbol] = setMeta;

const setProto: any = Object.create(Set.prototype);
setMeta.proto = setProto;

const setSizeDescriptor = Object.getOwnPropertyDescriptor(
  Set.prototype,
  "size"
);

if (setSizeDescriptor && setSizeDescriptor.get) {
  Object.defineProperty(setProto, "size", {
    ...setSizeDescriptor,
    get() {
      return (<any>setSizeDescriptor).get.call(this[traceDataSymbol].target);
    }
  });
}

export class SetSnapshot<T> {
  data: TraceData<Set<T>>;
  at: Record | null;
  changes: T[];
  constructor(data: TraceData<Set<T>>) {
    this.data = data;
    this.changes = [...data.target];
    this.at = data.lastContUpdate;
    data.lastContUpdate = journal.now;
  }
  call() {
    const { data, at, changes } = this;
    if (config.timeTravelForward) {
      data.lastContUpdate = null;
      setSnapshot(data);
    }
    const { target } = data;
    target.clear();
    data.lastContUpdate = at;
    changes.forEach(Set.prototype.add, target);
  }
}
regConstructor(SetSnapshot);

function setSnapshot<T>(data: TraceData<Set<T>>) {
  if (data.lastContUpdate === journal.now) return data.target;
  captureSnapshot(data);
  record(new SetSnapshot<T>(data));
  return data.target;
}

setProto.add = function<T>(this: Set<T>, v: T) {
  Set.prototype.add.call(setSnapshot(this[traceDataSymbol]), v);
  return this;
};

setProto.delete = function<T>(this: Set<T>, v: T) {
  return Set.prototype.delete.call(setSnapshot(this[traceDataSymbol]), v);
};

setProto.clear = function<T>(this: Set<T>) {
  return Set.prototype.clear.call(setSnapshot(this[traceDataSymbol]));
};

prototypeFwds(setMeta.proto);

if (config.timeTravel) {
  // Promise.prototype[traceMetaSymbol] = notTraceable;
  if (typeof MessageChannel !== "undefined") {
    MessageChannel.prototype[traceMetaSymbol] = notTraceable;
  }
}