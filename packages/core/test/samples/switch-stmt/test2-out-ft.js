import * as M from "@effectful/core";
function a() {
  var a = M.context();
  return M.scope(a_1);
}
function a_1(a) {
  return M.chain(eff(1), a_2);
}
function a_2(a, b) {
  a._pat = b;
  return M.chain(check(1), a_3);
}
function a_3(a, b) {
  if (a._pat === b) {
    a._pat = null;
    return M.chain(effB(1), a_5);
  } else {
    return M.chain(check(2), a_4);
  }
}
function a_4(a, b) {
  if (a._pat === b) {
    a._pat = null;
    return M.chain(effB(2), a_5);
  } else {
    a._pat = null;
    return M.chain(effB(3), a_5);
  }
}
function a_5(a) {}