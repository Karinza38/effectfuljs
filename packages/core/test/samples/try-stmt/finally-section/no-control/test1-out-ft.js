import * as M from "@effectful/core";
function a() {
  var a = M.context();
  return M.scope(a_1, a_7);
}
function b() {
  var b = M.context();
  return M.scope(b_1, b_8);
}
function c() {
  var c = M.context();
  return M.scope(c_1, c_7);
}
function d() {
  var d = M.context();
  return M.scope(d_1, d_7);
}
function e() {
  var e = M.context();
  return M.scope(e_1);
}
function f() {
  var f = M.context();
  return M.scope(f_1, f_8);
}
function g() {
  var g = M.context();
  return M.scope(g_1, g_8);
}
function a_1(a) {
  a._fc = a_3, a._fe = a_4;
  return M.chain(eff("in body"), a_2);
}
function a_2(a) {
  var b, c;
  b = a._fc, c = a._fe, a._fc = null, a._fe = null;
  return M.chain(eff("in `finally`"), b, c);
}
function a_3(a) {
  return M.chain(eff("after `finally`"), a_5);
}
function a_4(a, e) {
  return M.raise(e);
}
function a_5(a) {}
function a_6(a) {
  return M.raise(a._err1);
}
function a_7(a, b) {
  a._fc = a_6, a._fe = a_4, a._err1 = b;
  return M.jump(void 0, a_2);
}
function b_1(b) {
  b._fc = b_4, b._fe = b_5;
  return M.chain(eff("in body"), b_3);
}
function b_2(b) {
  var e;
  e = b._ex;
  b._fc = b_4, b._fe = b_5, b._ex = null;
  return M.chain(eff("in `catch`", e), b_3);
}
function b_3(b) {
  var a, c;
  a = b._fc, c = b._fe, b._fc = null, b._fe = null;
  return M.chain(eff("in `finally`"), a, c);
}
function b_4(b) {
  return M.chain(eff("after `finally`"), b_6);
}
function b_5(b, e) {
  return M.raise(e);
}
function b_6(b) {}
function b_7(b) {
  return M.raise(b._err1);
}
function b_8(b, a) {
  b._ex = a;
  return M.jump(void 0, b_2, b_9);
}
function b_9(b, a) {
  b._fc = b_7, b._fe = b_5, b._err1 = a;
  return M.jump(void 0, b_3);
}
function c_1(c) {
  c._fc = c_3, c._fe = c_4;
  return M.chain(eff("in body"), c_2);
}
function c_2(c) {
  var a, b;
  console.log("in `finally`");
  a = c._fc, b = c._fe, c._fc = null, c._fe = null;
  return M.jump(void 0, a, b);
}
function c_3(c) {
  return M.chain(eff("after `finally`"), c_5);
}
function c_4(c, e) {
  return M.raise(e);
}
function c_5(c) {}
function c_6(c) {
  return M.raise(c._err1);
}
function c_7(c, a) {
  c._fc = c_6, c._fe = c_4, c._err1 = a;
  return M.jump(void 0, c_2);
}
function d_1(d) {
  console.log("in body");
  d._fc = d_3, d._fe = d_4;
  return M.jump(void 0, d_2);
}
function d_2(d) {
  var a, b;
  a = d._fc, b = d._fe, d._fc = null, d._fe = null;
  return M.chain(eff("in `finally`"), a, b);
}
function d_3(d) {
  return M.chain(eff("after `finally`"), d_5);
}
function d_4(d, e) {
  return M.raise(e);
}
function d_5(d) {}
function d_6(d) {
  return M.raise(d._err1);
}
function d_7(d, a) {
  d._fc = d_6, d._fe = d_4, d._err1 = a;
  return M.jump(void 0, d_2);
}
function e_1(e) {
  console.log("before");
  return M.chain(eff("before"), e_2, e_11);
}
function e_2(e) {
  console.log("in body");
  e._fc = e_7, e._fe = e_8;
  return M.chain(eff("in body"), e_5);
}
function e_3(e) {
  e._e = e._ex;
  console.log("catch", e._e);
  e._ex = null;
  return M.chain(eff("catch", e._e), e_4, e_12);
}
function e_4(e) {
  console.log("catch", e._e);
  e._fc = e_7, e._fe = e_8, e._e = null;
  return M.jump(void 0, e_5);
}
function e_5(e) {
  console.log("in finally");
  return M.chain(eff("in `finally`"), e_6);
}
function e_6(e) {
  var a, b;
  console.log("in finally 2");
  a = e._fc, b = e._fe, e._fc = null, e._fe = null;
  return M.jump(void 0, a, b);
}
function e_7(e) {
  console.log("after `finally`");
  return M.chain(eff("after `finally`"), e_9);
}
function e_8(e, _e) {
  return M.raise(_e);
}
function e_9(e) {}
function e_10(e) {
  return M.raise(e._err1);
}
function e_11(e, a) {
  e._ex = a;
  return M.jump(void 0, e_3, e_12);
}
function e_12(e, a) {
  e._fc = e_10, e._fe = e_8, e._err1 = a;
  return M.jump(void 0, e_5);
}
function f_1(f) {
  f._fc = f_4, f._fe = f_5;
  return M.chain(eff("in body"), f_3);
}
function f_2(f) {
  var e;
  e = f._ex;
  f._fc = f_4, f._fe = f_5, f._ex = null;
  return M.chain(eff("in `catch`"), f_3);
}
function f_3(f) {
  var a, b;
  console.log("in `finally`");
  a = f._fc, b = f._fe, f._fc = null, f._fe = null;
  return M.jump(void 0, a, b);
}
function f_4(f) {
  return M.chain(eff("after `finally`"), f_6);
}
function f_5(f, e) {
  return M.raise(e);
}
function f_6(f) {}
function f_7(f) {
  return M.raise(f._err1);
}
function f_8(f, a) {
  f._ex = a;
  return M.jump(void 0, f_2, f_9);
}
function f_9(f, a) {
  f._fc = f_7, f._fe = f_5, f._err1 = a;
  return M.jump(void 0, f_3);
}
function g_1(g) {
  g._fc = g_4, g._fe = g_5;
  return M.chain(eff("in body"), g_3);
}
function g_2(g) {
  var e;
  e = g._ex;
  console.log("in `catch`");
  g._fc = g_4, g._fe = g_5, g._ex = null;
  return M.jump(void 0, g_3);
}
function g_3(g) {
  var a, b;
  console.log("in `finally`");
  a = g._fc, b = g._fe, g._fc = null, g._fe = null;
  return M.jump(void 0, a, b);
}
function g_4(g) {
  return M.chain(eff("after `finally`"), g_6);
}
function g_5(g, e) {
  return M.raise(e);
}
function g_6(g) {}
function g_7(g) {
  return M.raise(g._err1);
}
function g_8(g, a) {
  g._ex = a;
  return M.jump(void 0, g_2, g_9);
}
function g_9(g, a) {
  g._fc = g_7, g._fe = g_5, g._err1 = a;
  return M.jump(void 0, g_3);
}