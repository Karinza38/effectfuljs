import * as M from "@effectful/core";
function a(p) {
  var a = M.context();
  a._p = p;
  return M.scope(a_1);
}
function a_1(a) {
  return M.chain(eff(1), a_2);
}
function a_2(a) {
  var b;
  a._a = 0;
  b = a._a;
  return M.chain(eff(2, b), a_3);
}
function a_3(a, c) {
  var b;
  b = M.iterator(c);
  a._loop = b;
  return M.jump(void 0, a_4, a_10);
}
function f_1(ctx) {
  var a, b;
  a = ctx._a._a;
  b = ctx._a._a;
  return M.chain(eff(3, a, b), f_2);
}
function b_1(_b) {
  var a, b, c, d;
  a = _b._a._a;
  b = _b._f._j;
  c = _b._k++;
  d = _b._a._p;
  return M.chain(eff(4, a, b, c, d), b_2);
}
function b_2(_b) {
  var k, a, b, c;
  k = 10;
  _b._f._j++;
  _b._a._a++;
  _b._f._i++;
  k++, _b._a._p++;
  a = _b._a._a;
  b = _b._f._i;
  c = _b._a._p;
  return M.chain(eff(5, a, b, k, c), b_3);
}
function b_3(_b) {
  var a, b, c, d;
  a = _b._a._a;
  b = _b._f._i;
  c = _b._a._p;
  d = _b._k, _b._k = null;
  return M.chain(eff(6, a, b, d, c), b_4);
}
function b_4(_b) {}
function f_2(ctx) {
  var k;
  ctx._j = ctx._i + 1;
  k = ctx._i + 1;
  ctx._i++;
  return M.chain(eff(function b(k) {
    var _b = M.context();
    _b._k = k;
    _b._a = ctx._a;
    _b._f = ctx;
    return M.scope(b_1);
  }), f_3);
}
function f_3(ctx) {
  var a, b, c;
  a = ctx._a._a;
  b = ctx._i;
  c = ctx._j;
  return M.chain(eff(7, a, b, c), f_4);
}
function f_4(ctx) {}
function a_4(a) {
  if (!(a._loop = a._loop.step()).done) {
    a._i = a._loop.value;
    return M.chain((i => {
      var ctx = M.context();
      ctx._i = i;
      ctx._a = a;
      return M.scope(f_1);
    })(a._i), a_4, a_10);
  } else {
    a._fc = a_6, a._fe = a_7, a._i = null;
    return M.jump(void 0, a_5);
  }
}
function a_5(a) {
  var b, c;
  if (a._loop.exit) {
    a._loop.exit();
  }
  b = a._fc, c = a._fe, a._loop = null, a._fc = null, a._fe = null;
  return M.jump(void 0, b, c);
}
function a_6(a) {
  var b, c;
  b = a._a;
  c = a._p;
  return M.chain(eff(8, b, c), a_8);
}
function a_7(a, e) {
  return M.raise(e);
}
function a_8(a) {}
function a_9(a) {
  return M.raise(a._err1);
}
function a_10(a, b) {
  a._fc = a_9, a._fe = a_7, a._err1 = b;
  return M.jump(void 0, a_5);
}