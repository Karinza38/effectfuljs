import * as M from "@effectful/core";
// *- should inject forPar
function a() {
  var a = M.context();
  return M.scope(a_1);
}
function a_1(a) {
  return M.chain(eff1(), a_2);
}
function a_2(a) {
  return M.chain(eff2(), a_3);
}
function a_3(a, b) {
  a._i = b;
  return M.jump(void 0, a_4);
}
function a_4(a) {
  var b;
  if (a._i < 10) {
    return M.chain(eff3(a._i), a_5);
  } else {
    b = a._i, a._i = null;
    return M.chain(eff7(b), a_7);
  }
}
function a_5(a, b) {
  var j, c;
  j = b;
  c = j++;
  return M.chain(eff4(c), a_6);
}
function a_6(a) {
  a._i++;
  return M.jump(void 0, a_4);
}
function a_7(a, b) {
  console.log(b);
}