import * as M from "@effectful/core";
// *- when it is the last statement
(function () {
  var ctx = M.context();
  return M.scope(f_2);
});
function f_1(ctx) {
  var e;
  e = ctx._ex;
  ctx._ex = null;
  return M.chain(eff(3), f_2);
}
function f_2(ctx) {}