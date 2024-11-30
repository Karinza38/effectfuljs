import { FunctionDescr, GeneratorFrame } from "./state";
import * as State from "./state";
import {
  pushFrame,
  popFrame,
  makeFrame,
  clos,
  checkExitBrk,
  unhandled,
  handle,
  FunctionConstr
} from "./engine";
import { regConstructor, regOpaqueObject } from "@effectful/serialization";
const { context, native, CLOSURE_FUNC } = State;

const { defineProperty, setPrototypeOf } = native.Object;

class IterableThis {
  [Symbol.iterator]() {
    return this;
  }
}

regConstructor(IterableThis);

class Generator extends IterableThis {
  _frame: GeneratorFrame;
  constructor(frame: GeneratorFrame) {
    super();
    this._frame = frame;
  }
}

regConstructor(Generator);

const Gp = <any>Generator.prototype;

defineProperty(Gp, "throw", {
  value: function raise(e: any) {
    context.call = context.call === raise ? next : null;
    const frame = this._frame;
    frame.error = e;
    frame.meta.errHandler(frame, frame.$);
    return this.next(e);
  },
  configurable: true,
  writable: true
});

function next(this: any, value: any) {
  const frame = this._frame;
  if ((frame.flags & State.FrameFlags.Running) !== 0) throw new Error("Generator is already running");
  frame.sent = value;
  frame.flags |= State.FrameFlags.Running;
  pushFrame(frame, next);
  context.call = null;
  try {
    return frame.meta.handler(frame, frame.$, value);
  } catch (e) {
    return handle(frame, e);
  }
}

defineProperty(Gp, "return", {
  value: function ret(this: any, r: any) {
    context.call = context.call === ret ? next : null;
    const frame = this._frame;
    frame.meta.finHandler(frame, frame.$);
    frame.result = r;
    return this.next(r);
  },
  configurable: true,
  writable: true
});

defineProperty(Gp, "next", {
  value: next,
  configurable: true,
  writable: true
});

function GeneratorFunction() {}

regOpaqueObject(GeneratorFunction);

function GeneratorFunctionPrototype() {}

setPrototypeOf(GeneratorFunctionPrototype, FunctionConstr.prototype);

regOpaqueObject(GeneratorFunctionPrototype);

GeneratorFunctionPrototype.prototype = Gp;
GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
GeneratorFunctionPrototype.constructor = GeneratorFunction;
(<any>GeneratorFunctionPrototype)[
  Symbol.toStringTag
] = GeneratorFunction.displayName = "GeneratorFunction";

export function closG($$: any, meta: FunctionDescr, closure: any) {
  const res = clos($$, meta, closure);
  Object.setPrototypeOf(res, GeneratorFunctionPrototype);
  /*
  const proto = (res.prototype = Object.create(Gp));
  defineProperty(proto, "next", {
    value: meta.handler,
    configurable: true
  });*/
  res.prototype = Object.create(Gp);
  return res;
}

export function frameG(closure: State.Closure, newTarget: any) {
  const frame = <GeneratorFrame>makeFrame(closure, newTarget);
  const iter = Object.create(closure[CLOSURE_FUNC].prototype);
  frame.iter = iter;
  iter._frame = frame;
  return frame;
}

export function yld(value: any): any {
  const frame = <GeneratorFrame>context.top;
  const res = (context.value = { value, done: false });
  if (!context.enabled && frame.restoreEnabled !== State.undef)
    context.enabled = true;
  popFrame(frame);
  frame.flags &= ~State.FrameFlags.Running;
  return res;
}

export function retG(value: any): any {
  const frame = <GeneratorFrame>context.top;
  const res = (context.value = { value, done: true });
  frame.result = void 0;
  frame.flags = frame.flags & ~State.FrameFlags.Running | State.FrameFlags.Done;
  if (context.enabled) checkExitBrk(frame, res);
  else if (frame.restoreEnabled !== State.undef) context.enabled = true;
  popFrame(frame);
  return res;
}

export function unhandledG(e: any) {
  const frame = <GeneratorFrame>context.top;
  frame.flags = frame.flags & ~State.FrameFlags.Running | State.FrameFlags.Done;
  return unhandled(e);
}
