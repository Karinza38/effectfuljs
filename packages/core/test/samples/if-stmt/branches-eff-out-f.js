import * as M from "@effectful/core";
// *- when branches has effects and it is the last statement
function a() {
  var r;
  if (true) {
    return M.chain(eff(1), _1);
  } else {
    return M.chain(eff(2), _2);
  }
  function _1(a) {
    return a;
  }
  function _2(a) {
    return a;
  }
}
function b() {
  var r;
  if (true) {
    return M.chain(eff(1), _1);
  } else {
    return M.chain(eff(2), _2);
  }
  function _1(a) {
    return a;
  }
  function _2(a) {
    return a;
  }
}
function c() {
  if (true) {
    return M.chain(eff(1), _1);
  } else {
    return M.chain(eff(2), _1);
  }
  function _1() {
    return M.chain(eff(3), _2);
  }
  function _2() {
    return M.chain(eff(4), _3);
  }
  function _3() {}
}
function d() {
  return M.chain(eff("a"), _1);
  function _1() {
    if (true) {
      return M.chain(eff(1), _2);
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _2() {
    return M.chain(eff(3), _3);
  }
  function _3() {
    return M.chain(eff(4), _4);
  }
  function _4() {}
}
function e() {
  var r;
  return M.chain(eff(1), _1);
  function _1(a) {
    if (a) {
      return 1;
    } else {
      return 2;
    }
  }
}
function f() {
  var r;
  return M.chain(eff(1), _1);
  function _1(a) {
    if (a) {
      return 1;
    } else {
      return 2;
    }
  }
}