import * as M from "@effectful/core";
function a() {
  return M.chain(eff1(1), _1);
  function _1() {
    a;
    return M.chain(test(1), _2);
  }
  function _2(a) {
    if (a) {
      b;
      return M.chain(eff(3), _3);
    } else {
      return M.chain(eff(5), _4);
    }
  }
  function _3() {
    c;
    return M.chain(eff(4), _4);
  }
  function _4() {
    return M.chain(eff(6), _5);
  }
  function _5() {}
}