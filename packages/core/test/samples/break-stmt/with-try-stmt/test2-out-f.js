import * as M from "@effectful/core";
// *- when it is the last statement
(function () {
  var e, ex;
  function _1() {
    e = ex;
    return M.chain(eff(3), _2);
  }
  function _2() {}
});