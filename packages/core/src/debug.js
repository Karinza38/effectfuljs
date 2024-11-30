import * as Kit from "./kit";
import * as Trace from "./kit/trace";
import { Tag, symName, symInfo, scope } from "@effectful/transducers";
import * as D from "@effectful/transducers/dump";
import * as T from "@effectful/transducers/trace";

function isBindTok(v) {
  return isIf(v) || symInfo(v.type).kind === "ctrl";
}

function isIf(v) {
  return (
    v.pos === Tag.consequent ||
    v.pos === Tag.alternate ||
    v.type === Tag.IfStatement ||
    v.type === Tag.ArrowFunctionExpression
  );
}

function* traceHighlight(s) {
  function flag(n, opts = {}) {
    const def = opts.val == null ? true : opts.val;
    const txt = opts.txt || n;
    const collapsed = opts.collapsed || false;
    const st = opts.st;
    const ste = opts.ste || st;
    const stl = opts.stl || st;
    return i => {
      const st = i.enter ? ste : stl;
      if (i.obj[n] === def) {
        i.collapsed = collapsed;
        i.flags.push(`${st == null ? "" : "%c"}${txt}`);
        if (st != null) i.flagsStyles.push(st);
      }
    };
  }
  const flags = [
    flag("eff", {
      ste: "color:red;font-size:large",
      stl: "color:orange;font-style:italic"
    }),
    flag("shallowEff", {
      ste: "color:red",
      stl: "color:orange;font-style:italic",
      val: true,
      txt: "shallow",
      collapsed: true
    }),
    flag("eff", {
      ste: "color:green",
      stl: "color:green;font-style:italic",
      val: false,
      txt: "pure",
      collapsed: true
    }),
    flag("bracket", {
      ste: "color:blue;font-size:large",
      stl: "color:skyblue;font-style:italic"
    })
  ];
  for (const i of s) {
    flags.map(f => f(i));
    yield i;
  }
}

function pad(s) {
  if (s.length % 2) s += " ";
  const sps = Array(Math.max(20 - s.length / 2, 2)).join(" ");
  return sps + s + sps;
}

export const traceOld = Kit.curry((prefix, s) => {
  console.log(
    `%c${pad(prefix)}%c`,
    `background:#2B81AF;color:#fff;font-size:xx-large;
              text-shadow:rgba(0, 0, 0, 0.5) 2px 2px 1px`,
    ""
  );
  return Kit.pipe(
    Trace.of(
      Kit.pipe(
        Trace.highlight(v => v.type === Kit.Subst || isBindTok(v)),
        traceHighlight,
        Trace.prefix(prefix)
      )
    ),
    T.cleanComments,
    prefix[0] === "!" ? v => v : T.verify,
    Array.from
  )(s);
});

function hl(t, e, style) {
  return D.setComment(e, t, style || "large");
}

function hls(t, e, n) {
  return D.setComment(e, t, `small${n || ""}`);
}

export function* dumpDeps(s) {
  for (const i of s) {
    yield i.enter && (i.value.deps != null || i.value.fdeps != null)
      ? hls(
          "D:" +
            (i.value.deps
              ? JSON.stringify(i.value.deps.map(v => [...(v.fwd.keys() || [])]))
              : `${i.value.fdeps.x} -> ${JSON.stringify([
                  ...(i.value.fdeps.fwd.keys() || [])
                ])}`),
          i
        )
      : i;
  }
}

export const dumbBindStmt = Kit.pipe(
  function* debDumbBindStmt(s) {
    for (const i of s) {
      switch (symName(i.type)) {
        case "letStmt":
          const hasBind = i.value.sym != null;
          if (i.enter) {
            if (hasBind) {
              yield D.copyComment(
                i,
                D.setComment(
                  Kit.enter(i.pos, Tag.VariableDeclaration, {
                    node: {
                      kind: "var"
                      // kind:"const"
                    },
                    eff: i.value.eff
                  }),
                  "S",
                  "font-size:xx-large;color:orange"
                )
              );
              yield Kit.enter(Tag.declarations, Tag.Array);
              yield Kit.enter(Tag.push, Tag.VariableDeclarator);
              yield Kit.tok(Tag.id, Tag.Identifier, { sym: i.value.sym });
              yield Kit.enter(Tag.init, Kit.Subst);
            } else {
              yield D.copyComment(
                i,
                D.setComment(
                  Kit.enter(i.pos, Tag.ExpressionStatement, {
                    node: {},
                    eff: i.value.eff
                  }),
                  "S",
                  "font-size:xx-large;color:orange"
                )
              );
              yield Kit.enter(Tag.expression, Kit.Subst);
            }
          }
          if (i.leave) yield* Kit.repeat(hasBind ? 4 : 2, Kit.leave());
          break;
        case "bindPat":
          if (i.enter)
            yield Kit.tok(i.pos, Tag.Identifier, {
              sym: i.value.sym,
              node: i.value.node
            });
          break;
        default:
          yield i;
      }
    }
  },
  Kit.complete,
  Kit.completeSubst
);

export function* addLabels(s) {
  const sl = Kit.auto(s);
  const labs = {};
  function* walk(rename) {
    for (const i of sl.sub()) {
      if (i.value.ctrl) {
        if (i.enter) {
          const lab = sl.label();
          let pos = i.pos;
          const j = i.value.ctrl;
          if (j !== "#" && j !== "#ret") {
            let nm = j;
            nm = nm.replace("#", "_");
            const lx = labs[j] || 0;
            if (lx !== 0) nm += lx;
            labs[nm] = lx + 1;
            rename[j] = nm;
            yield sl.enter(pos, Tag.LabeledStatement, {
              node: { label: { type: "Identifier", name: nm } }
            });
            pos = Tag.body;
          }
          yield sl.peel(Kit.setPos(i, pos));
          yield* walk(Object.create(rename));
          yield* lab();
          continue;
        }
      }
      if (i.value.node != null && i.value.node.label != null) {
        const name = rename[i.value.node.label.name];
        if (name != null) i.value.node.label = { type: "Identifier", name };
      }
      yield i;
    }
  }
  yield* walk({});
}

export const dumpEffBlock = Kit.pipe(
  function* dumpEffBlock(s) {
    const b = Kit.auto(s);
    function* walk() {
      for (const i of b.sub()) {
        switch (symName(i.type)) {
          case "jump":
            if (i.enter) {
              yield D.copyComment(i, b.enter(i.pos, Tag.CallExpression));
              yield Kit.tok(Tag.callee, Tag.Identifier, {
                node: { name: "jump" }
              });
              yield b.enter(Tag.arguments, Tag.Array);
              const d = i.value.node.dst;
              if (d != null)
                yield Kit.tok(Tag.push, Tag.StringLiteral, {
                  node: { value: i.value.node.dst.name }
                });
              yield* walk();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "scope":
            if (i.enter) {
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.BlockStatement),
                  `$${i.value.node.name}`,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.body, Tag.Array);
              yield b.enter(Tag.push, Kit.Subst);
              yield* walk();
              yield* b.leave();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "writeState":
            if (i.enter) {
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.CallExpression, {
                    node: { callee: { type: "Identifier", name: "write" } }
                  }),
                  `write`,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.arguments, Tag.Array);
              yield b.enter(Tag.push, Kit.Subst);
              yield* walk();
              yield* b.leave();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "forPar":
            if (i.enter) {
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.ArrowFunctionExpression, {
                    node: { params: [] }
                  }),
                  `PAR`,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.body, Tag.ForStatement);
              yield* walk();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "effExpr":
            if (i.enter) {
              yield b.enter(i.pos, Kit.Subst);
              yield* walk();
              yield* b.leave();
            }
            break;
          case "chain":
            if (i.enter) {
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.BlockStatement),
                  `..`,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.body, Tag.Array);
              yield* walk();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "pure":
            if (i.enter) {
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.CallExpression, {
                    node: { callee: { type: "Identifier", name: "pure" } }
                  }),
                  `..`,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.arguments, Tag.Array);
              yield b.enter(Tag.push, Kit.Subst);
              yield* walk();
              yield* b.leave();
              yield* b.leave();
              yield* b.leave();
            }
            break;
          case "frame":
            if (i.enter) {
              const lab = b.label();
              let txt = `#${(i.value.patSym && i.value.patSym.id) || ""}`;
              if (i.value.bindsResult) txt += "_";
              if (i.value.hasStmts) txt += "=";
              yield D.copyComment(
                i,
                D.setComment(
                  b.enter(i.pos, Tag.BlockStatement),
                  txt,
                  "color:blue;font-size:large"
                )
              );
              yield b.enter(Tag.body, Tag.Array);
              yield b.enter(Tag.push, Kit.Subst);
              yield* walk();
              yield* lab();
            }
            break;
          default:
            if (i.type.ctrl) {
              if (i.type.arg === "b") {
                if (i.enter) {
                  yield D.copyComment(
                    i,
                    D.setComment(
                      b.enter(i.pos, Tag.BlockStatement),
                      symName(i.type),
                      "color:blue;font-size:large"
                    )
                  );
                  yield b.enter(Tag.body, Tag.Array);
                  yield b.enter(Tag.push, Kit.Subst);
                  yield* walk();
                  yield* b.leave();
                  yield* b.leave();
                  yield* b.leave();
                }
                break;
              }
            }
            yield i;
        }
      }
    }
    yield* walk();
  },
  Kit.completeSubst
);

function* dumpCasts(s) {
  const sl = Kit.auto(s);
  function* toExpr(pos) {
    const lab = sl.label();
    const b = sl.take();
    if (b.value.stmt) {
      yield hl(
        "expr",
        sl.enter(pos, Tag.CallExpression, { node: { arguments: [] } })
      );
      yield sl.enter(Tag.callee, Tag.FunctionExpression, {
        node: { parameters: [] }
      });
      if (b.type === Tag.BlockStatement) yield sl.peel(Kit.setPos(b, Tag.body));
      else {
        yield sl.enter(Tag.body, Tag.BlockStatement);
        yield sl.enter(Tag.body, Tag.Array);
        yield sl.peel(Kit.setPos(b, Tag.push));
      }
    } else {
      yield sl.peel(Kit.setPos(b, pos));
    }
    yield* walk();
    yield* lab();
  }
  function* toBlock(pos) {
    const lab = sl.label();
    const b = sl.take();
    if (b.value.expr) {
      yield hl("block", sl.enter(Tag.body, Tag.ExpressionStatement));
      yield sl.peel(Kit.setPos(b, Tag.expression));
    } else {
      if (
        symName(b.type) === "castToBlock" ||
        symName(b.type) === "castToBody"
      ) {
        yield* toBlock(pos);
        return;
      }
      if (b.type === Tag.BlockStatement) {
        yield sl.peel(Kit.setPos(b, pos));
      } else {
        yield sl.enter(pos, Tag.BlockStatement);
        yield sl.enter(Tag.body, Tag.Array);
        yield sl.peel(Kit.setPos(b, Tag.push));
      }
    }
    yield* walk();
    yield* lab();
  }
  function* walk() {
    for (const i of sl.sub()) {
      switch (symName(i.type)) {
        case "castToExpr":
          if (i.enter) yield* toExpr(i.pos);
          break;
        case "castToBody":
        case "castToBlock":
          if (i.enter) yield* toBlock(i.pos);
          break;
        default:
          yield i;
      }
    }
  }
  yield* walk();
}

export function* markBindEff(s) {
  for (let i of s) {
    if (i.enter) {
      if (i.value.bind) i = hls("B", i, "H");
      else if (i.value.bind === false) i = hls("P", i, "H");
      else if (i.value.eff) i = hls("E", i, "H");
      else if (i.value.shallowEff) i = hls("e", i, "H");
    }
    yield i;
  }
}

function* removeSubScopes(s) {
  for (const i of s) {
    if (i.enter && i.pos !== Tag.top) {
      switch (i.type) {
        case Tag.FunctionDeclaration:
          if (i.leave) {
            yield Kit.enter(i.pos, Tag.ExpressionStatement);
            yield Kit.tok(Tag.expression, Tag.Identifier, {
              node: { name: "$$$" }
            });
            yield Kit.leave(i.pos, Tag.ExpressionStatement);
            continue;
          }
          break;
        case Tag.FunctionExpression:
        case Tag.ArrowFunctionExpression:
          if (i.leave) {
            yield Kit.tok(i.pos, Tag.Identifier, { node: { name: "$$$" } });
            continue;
          }
      }
    }
    yield i;
  }
}

const undefPatSym = Kit.scope.newSym("__");

export function singleFrameTxt(frame, s) {
  const sa = Kit.toArray(s);
  if (sa.length === 0) return "<EMPTY>";
  const f = Kit.toArray(singleFrameToks(frame, sa));
  return D.toStr(D.fin(f), { comments: false });
}

export function* singleFrameToks(frame, si) {
  const s = Kit.auto(si);
  yield* s.template(
    Tag.push,
    `($I) => {$_}`,
    (frame && frame.patSym) || undefPatSym
  );
  yield* _frame();
  yield* s.leave();
  function* _frame() {
    for (const i of s.sub()) {
      if (i.enter) {
        switch (symName(i.type)) {
          case "bindPat":
            yield s.tok(i.pos, Tag.Identifier, { sym: i.value.sym });
            Kit.skip(s.copy(i));
            continue;
          case "app":
            yield* s.template(Tag.push, `=$I($E)`, i.value.sym);
            if (!i.leave) yield* _frame();
            yield* s.leave();
            s.close(i);
            continue;
          case "letStmt":
            {
              const args = [];
              if (i.value.sym) args.push(i.value.sym);
              if (i.value.tmpVar) args.push(i.value.tmpVar);
              yield* s.template(
                Tag.push,
                `=${i.value.sym ? "$I =" : ""}` +
                  `${i.value.bindName || (i.value.eff ? "e" : "p")}` +
                  `(${i.value.tmpVar ? "$I=" : ""}` +
                  `$E${i.value.goto ? "," + i.value.goto.declSym.id : ""}` +
                  `${
                    i.value.indirGoto ? "," + i.value.indirGoto.declSym.id : ""
                  }` +
                  `,${i.value.id})`,
                ...args
              );
              if (!i.leave)
                yield* Kit.reposOne(
                  _frame(),
                  i.value.tmpVar ? Tag.right : Tag.push
                );
              yield* s.leave();
            }
            s.close(i);
            continue;
          case "jump":
            {
              const args = [];
              if (i.value.tmpVar) args.push(i.value.tmpVar);
              if (i.value.goto) args.push(i.value.goto.declSym);
              yield* s.template(
                Tag.push,
                `=${i.value.tmpVar ? "$I =" : ""}` +
                  `j($E${i.value.goto ? "," + i.value.goto.declSym.id : ""}` +
                  `${
                    i.value.indirGoto ? "," + i.value.indirGoto.declSym.id : ""
                  }` +
                  `,${i.value.id})`,
                ...args
              );
              if (!i.leave) yield* Kit.reposOne(_frame(), Tag.push);
              yield* s.leave();
            }
            s.close(i);
            continue;
          case "fork":
            yield* s.template(Tag.push, `=F($E)`, i.value.sym);
            yield* Kit.reposOne(_frame(), Tag.push);
            yield* s.leave();
            s.close(i);
            continue;
        }
      }
      yield i;
    }
  }
}

export const framesTxt = (opts = {}) => si => {
  const sa = Kit.toArray(si);
  const s = Kit.auto(sa);
  for (const i of s) {
    if (i.enter && symName(i.type) === "frame")
      i.value[`deb_txt_${opts.name || ""}`] = singleFrameTxt(i.value, s.sub());
  }
  return sa;
};

const dumpPrep = Kit.pipe(
  addLabels,
  dumpDeps,
  dumbBindStmt,
  markBindEff,
  dumpEffBlock,
  dumpCasts,
  scope.resolve
);

const markOld = Kit.pipe(
  dumpPrep,
  D.fin
);
// TODO: remove from tests
export { markOld as mark };

export const dumpOld = Kit.curry(function dumpConsole(tag, s) {
  s = Kit.toArray(s);
  D.toConsole(tag, dumpPrep(removeSubScopes(Kit.clone(s))));
  return s;
});

const emptySet = new Set();

const mark = Kit.pipe(
  T.cleanComments,
  //  addLabels,
  markBindEff,
  markFrameSyms
);

/** adds flatten related comments */
function* markFrameSyms(s) {
  function id(i) {
    if (!i) return "-";
    let res = i.id;
    if (i.interpr) res += `#${i.interpr.$}`;
    if (i.numConst) res += `$${i.numConst}`;
    if (i.dummy) res += ".dummy";
    if (i.bound != null) {
      res += i.bound ? "+" : "-";
    }
    return res;
  }
  for (let i of s) {
    if (i.enter) {
      if (i.pos === Tag.top) {
        let txt = "";
        if (i.value.savedDecls)
          txt += `|decls:[${[...i.value.savedDecls.keys()].map(id).join(",")}]`;
        if (i.value.errSym) txt += `|errSym:[${id(i.value.errSym)}]`;
        if (i.value.resSym) txt += `|resSym:[${id(i.value.resSym)}]`;
        i = D.setComment(i, txt, "hl");
      }
      const v = i.value;
      if (v.funcId) i = D.setComment(i, `${v.funcId.id}`, "hl");
      if (v.sym) {
        i = D.setComment(i, `[${id(v.sym)}]`, "hl");
      }
      if (v.declSym != null) {
        let hndl = "";
        if (v.repeatStart) hndl += "|Repeat";
        if (v.catchCont) {
          if (v.catchCont.goto)
            hndl += `|Err{${
              v.catchCont.errSym ? id(v.catchCont.errSym) : "?"
            }<-${id(v.catchCont.goto.declSym)}}`;
          hndl += v.catchCont.frameArgs
            ? `|ErrArgs{${[...v.catchCont.frameArgs]
                .map(([k, v]) => `${id(k)}=${id(v)}`)
                .join()}}`
            : "";
          if (v.catchCont.preCompose)
            hndl += `|ErrPre{${v.catchCont.preCompose
              .map(
                i =>
                  id(i.declSym) +
                  "->" +
                  (i.contArg ? id(i.contArg.declSym) : "")
              )
              .join()}}`;
          if (v.catchCont.indirJumps && v.catchCont.indirJumps.size)
            hndl += `|ErrIndir{${[...v.catchCont.indirJumps]
              .map(([f, a]) => `${id(a.declSym)}->${id(f.declSym)}`)
              .join()}}`;
        }
        if (v.resultCont) {
          if (v.resultCont.goto)
            hndl += `|Res{${id(v.resultCont.goto.declSym)}}`;
          if (v.resultCont.preCompose)
            hndl += `|ResPre{${v.resultCont.preCompose
              .map(
                i =>
                  id(i.declSym) +
                  "->" +
                  (i.contArg ? id(i.contArg.declSym) : "")
              )
              .join()}}`;
          if (v.resultCont.indirJumps && v.resultCont.indirJumps.size)
            hndl += `|ResIndir{${[...v.resultCont.indirJumps]
              .map(([f, a]) => `${id(a.declSym)}->${id(f.declSym)}`)
              .join()}}`;
        }
        if (v.catchContRedir)
          hndl += `|ErrRedir{${id(v.catchContRedir.declSym)}}`;
        if (v.resultContRedir)
          hndl += `|ResRedir{${id(v.resultContRedir.declSym)}}`;
        let fin =
          v.finallyCont && v.finallyCont.length
            ? `|Finally{${v.finallyCont.map(i => id(i.declSym)).join()}}`
            : "";
        const avail = v.frameAvail || emptySet;
        const locals = v.frameLocals || emptySet;
        const params = v.frameParams || emptySet;
        const clos = v.frameParamsClos || emptySet;
        const dst = v.dstClassParams || emptySet;
        const w = v.stateVars ? v.stateVars.w : emptySet;
        const r = v.stateVars ? v.stateVars.r : emptySet;
        const d = (v.stateVars && v.stateVars.d) || emptySet;
        const s = (v.stateVars && v.stateVars.s) || emptySet;
        const saved = v.savedDecls ? new Set(v.savedDecls.keys()) : emptySet;
        const all = new Set([
          ...avail,
          ...locals,
          ...clos,
          ...saved,
          ...dst,
          ...params,
          ...w,
          ...r,
          ...d,
          ...s
        ]);
        if (v.patSym) all.add(v.patSym);
        if (v.errSym) all.add(v.errSym);
        if (v.sym) all.add(v.sym);
        const paramStr = all.size
          ? `|Params{${[...all]
              .map(
                i =>
                  id(i) +
                  ":" +
                  (avail.has(i) ? "A" : "") +
                  (locals.has(i) ? "L" : "") +
                  (params.has(i) ? "P" : clos.has(i) ? "p" : "") +
                  (r.has(i) ? "R" : "") +
                  (w.has(i) ? "W" : "") +
                  (s.has(i) ? "!" : "") +
                  (d.has(i) ? "d" : "") +
                  (saved.has(i) ? "D" : "") +
                  (i === v.sym ? "S" : "") +
                  (!clos.has(i) && dst.has(i) ? "C" : "") +
                  (i === v.errSym ? "E" : "") +
                  (i === v.patSym ? "B" : ":")
              )
              .join()}}`
          : "";
        i = D.setComment(
          i,
          `label{${id(v.declSym)}}${paramStr}${hndl}${fin}`,
          "hl"
        );
        if (i.dstClass) i = D.setComment(i, `class{${id(i.dstClass.declSym)}}`);
      }
      if (symName(i.type) === "letStmt" || symName(i.type) === "jump") {
        let fin =
          v.preCompose && v.preCompose.length
            ? `|Pre{${v.preCompose
                .map(
                  i =>
                    id(i.declSym) +
                    "->" +
                    (i.contArg ? id(i.contArg.declSym) : "")
                )
                .join()}}`
            : "";
        let args = v.frameArgs
          ? `|Args{${[...v.frameArgs]
              .map(([k, v]) => `${id(k)}=${id(v)}`)
              .join()}}`
          : "";
        if (v.indirJumps && v.indirJumps.size)
          args += `|Indir{${[...v.indirJumps]
            .map(([f, a]) => `${id(a.declSym)}->${id(f.declSym)}`)
            .join()}}`;
        const thread =
          v.threadArgs && v.threadArgs.length
            ? `|Thread{${v.threadArgs
                .map(i => id(i[0]) + "<-" + id(i[1]))
                .join()}}`
            : "";

        let dst = v.goto ? v.goto.declSym.id : "EXIT";
        if (v.goto && v.goto.instances) {
          const inst = [...v.goto.instances].map(i => id(i.declSym)).join();
          dst = `|${dst}<${inst}>`;
        }
        if (v.indirGoto) dst = `${dst}~>${v.indirGoto.declSym.id}`;
        let name = v.result ? "ret" : "goto";
        if (v.ext) name += `.X-${v.ext.funcId.id}`;
        if (v.tmpVar) name += `.T-${v.tmpVar.id}`;
        if (v.contextSym) name += `.S-${v.contextSym.id}`;
        i = D.setComment(
          i,
          `${name}[${dst}${args}${thread}${fin}]#${i.value.id || "u"}`,
          "hl"
        );
      }
    }
    yield i;
  }
}

export const traceAll = Kit.curry((name, s) => T.all(name, mark(s)));
export const trace = Kit.curry((name, s) => T.lazy(name, mark(s)));
export const dump = Kit.curry((name, s) =>
  D.output(name, name[0] === "-" ? T.cleanComments(s) : mark(s))
);
