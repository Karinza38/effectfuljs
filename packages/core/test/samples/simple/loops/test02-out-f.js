import * as M from "@effectful/core";
// *- should inject forPar
function a() {
  var k, i, j;
  return M.chain(eff1(), _1);
  function _1() {
    return M.chain(eff2(), _2);
  }
  function _2(a) {
    i = a;
    return M.chain(eff3(), _3);
  }
  function _3(a) {
    j = a;
    return M.jump(void 0, _4);
  }
  function _4() {
    if (i < 10 && j > -10) {
      return M.chain(eff3(i), _5);
    } else {
      return M.chain(eff5(i, j), _7);
    }
  }
  function _5(a) {
    var b;
    k = a;
    b = k++;
    return M.chain(eff4(b), _6);
  }
  function _6() {
    i++, j--;
    return M.jump(void 0, _4);
  }
  function _7() {}
}