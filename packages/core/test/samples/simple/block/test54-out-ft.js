import * as M from "@effectful/core";
function a() {
  var a = M.context();
  return M.scope(a_1);
}
function a_1(a) {
  a._i = 0;
  return M.chain(eff(1), a_2);
}
function a_2(a) {
  a._i++;
  a._i = null;
  return M.chain(eff(2), a_3);
}
function a_3(a) {}