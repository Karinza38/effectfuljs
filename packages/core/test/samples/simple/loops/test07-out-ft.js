import * as M from "@effectful/core";
function a() {
  var a = M.context();
  return M.scope(a_1);
}
function a_1(a) {
  var b;
  a._i = 0;
  a._j = 0;
  a._k = 0;
  b = a._k, a._k = null;
  return M.chain(eff(a._i, a._j, b), a_2);
}
function a_2(a) {
  var b;
  b = a._i, a._i = null;
  return M.chain(eff1(b), a_3);
}
function a_3(a) {
  a._k = 10;
  return M.chain(eff2(), a_4);
}
function a_4(a) {
  return M.chain(eff4(a._k, a._j), a_4);
}