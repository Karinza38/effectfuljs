import * as M from "@effectful/core";
function a() {
  var i,
    k,
    b = function b() {
      var j;
      j = i;
      return M.chain(eff(2, j), _1);
      function _1() {
        return M.chain(eff(3, i), _2);
      }
      function _2() {}
    };
  i = 0;
  k = 0;
  return M.chain(eff(1, i, k), _1);
  function _1() {
    k++;
    return M.chain(eff(4, i, k), _2);
  }
  function _2() {
    return M.chain(eff(5, i, k), _3);
  }
  function _3() {}
}
function zzz(zz) {
  var aaaa = (function aaaa() {
    return M.chain(eff1(), _1);
    function _1() {}
  }, function aaaa() {
    return M.chain(eff2(), _1);
    function _1() {}
  });
  return M.chain(aaaa(), _1);
  function _1() {
    aaaa = function bbbb() {
      return M.chain(eff3(), _1);
      function _1() {}
    };
    return M.chain(aaaa(), _2);
  }
  function _2() {}
}