import * as M from "@effectful/core";
(function () {
  var ctx = M.context();
  return M.scope(f_1);
});
function f_1(ctx) {
  ctx._ref = [1, 2, 3];
  ctx._j = 0, ctx._len = ctx._ref.length;
  return M.jump(void 0, f_2);
}
function f_2(ctx) {
  if (ctx._j < ctx._len) {
    ctx._i = ctx._ref[ctx._j];
    return M.chain(eff(ctx._i), f_3);
  } else {
    ctx._i = null, ctx._j = null, ctx._len = null, ctx._ref = null;
    return M.jump(void 0, f_4);
  }
}
function f_3(ctx, a) {
  if (a) {
    ctx._j = null;
    return M.jump(void 0, f_4);
  } else {
    ctx._j++;
    return M.jump(void 0, f_2);
  }
}
function f_4(ctx) {
  return M.chain(eff(2), f_5);
}
function f_5(ctx) {
  return M.chain(eff(3), f_6);
}
function f_6(ctx) {}