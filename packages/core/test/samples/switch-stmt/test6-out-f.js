import * as M from "@effectful/core";
// *- without default branch
function a() {
  return M.chain(eff(1), _1);
  function _1(a) {
    switch (a) {
      case 1:
        return M.chain(effB(1), _2);
      case 2:
        return M.chain(effB(2), _2);
      default:
    }
  }
  function _2() {}
}