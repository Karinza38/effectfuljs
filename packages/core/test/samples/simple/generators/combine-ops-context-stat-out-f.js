import * as M from "@effectful/core";
function a() {
  var a = M.context();
  return a.scope(_1);
  function _1(a) {
    return a.pure();
  }
  function _2(a, r) {
    return a.pure(r);
  }
}
function a1() {
  var a1 = M.context();
  return a1.scope(_1);
  function _1(a1) {
    return a1.yld(void 0, _2);
  }
  function _2(a1) {
    return a1.pure();
  }
  function _3(a1, r) {
    return a1.pure(r);
  }
}
function a3() {
  var a3 = M.context();
  return a3.scope(_1);
  function _1(a3) {
    return a3.yld(void 0, _2);
  }
  function _2(a3, a) {
    return a3.pure(a);
  }
  function _3(a3, r) {
    return a3.pure(r);
  }
}
function a2() {
  var a2 = M.context();
  return a2.scope(_1);
  function _1(a2) {
    return a2.yld(1, _2);
  }
  function _2(a2) {
    return a2.pure();
  }
  function _3(a2, r) {
    return a2.pure(r);
  }
}
function a_1() {
  var a_1 = M.context();
  return a_1.scope(_1);
  function _1(a_1) {
    return a_1.yld(1, _2, _6);
  }
  function _2(a_1) {
    return a_1.yld(2, _4);
  }
  function _3(a_1) {
    var e;
    e = a_1._ex;
    return a_1.yld(e, _4);
  }
  function _4(a_1) {
    return a_1.pure();
  }
  function _5(a_1, r) {
    return a_1.pure(r);
  }
  function _6(a_1, a) {
    a_1._ex = a;
    return a_1.jump(void 0, _3);
  }
}
function d(i) {
  var d = M.context();
  d._i = i;
  return d.scope(_1);
  function _1(d) {
    var a;
    d._j = 0;
    a = d._i++;
    return d.yld(a, _2);
  }
  function _2(d, a) {
    return d.yld(a, _3);
  }
  function _3(d, a) {
    var b;
    b = d._j++;
    return d.pure((a, b));
  }
  function _4(d, r) {
    return d.pure(r);
  }
}
function d2(i) {
  var d2 = M.context();
  d2._i = i;
  return d2.scope(_1);
  function _1(d2) {
    var a;
    d2._j = 0;
    a = d2._i++;
    return d2.yld(a, _2);
  }
  function _2(d2, a) {
    var b;
    b = d2._j++;
    return d2.yld((a, b), _3);
  }
  function _3(d2) {
    return d2.yldStar(some(d2._i += 2, d2._j) + d2._j, _4);
  }
  function _4(d2, a) {
    return d2.yld(a, _5);
  }
  function _5(d2, a) {
    var b;
    if (a) {
      b = d2._i += 3;
      return d2.yldStar(b, _6);
    } else {
      return d2.pure(d2._i);
    }
  }
  function _6(d2, a) {
    return d2.pure(a);
  }
  function _7(d2, r) {
    return d2.pure(r);
  }
}
function a4() {
  var a4 = M.context();
  return a4.scope(_1);
  function _1(a4) {
    return a4.yld(1, _2, _17);
  }
  function _2(a4) {
    return a4.yld(2, _3, _17);
  }
  function _3(a4) {
    a4._fc = _9, a4._fe = _14;
    return a4.yld(3, _7);
  }
  function _4(a4) {
    a4._e = a4._ex;
    return a4.yld("excep", _5, _18);
  }
  function _5(a4) {
    return a4.yld(a4._e, _6, _18);
  }
  function _6(a4, a) {
    if (a) {
      a4._fc = _15, a4._fe = _14, a4._r = 10;
      return a4.jump(void 0, _7);
    } else {
      a4._fc = _9, a4._fe = _14;
      return a4.jump(void 0, _7);
    }
  }
  function _7(a4) {
    return a4.yld("f", _8);
  }
  function _8(a4) {
    return a4.yld("e", a4._fc, a4._fe);
  }
  function _9(a4) {
    var a;
    a4._ = a1;
    a = a2();
    return a4.yldStar(a, _10);
  }
  function _10(a4, b) {
    var a;
    a4._1 = b;
    a = a3();
    return a4.yldStar(a, _11);
  }
  function _11(a4, b) {
    var a;
    a = (0, a4._)(a4._1, b);
    return a4.yld(a, _12);
  }
  function _12(a4) {
    return a4.pure();
  }
  function _13(a4, r) {
    return a4.pure(r);
  }
  function _14(a4, e) {
    return a4.raise(e);
  }
  function _15(a4) {
    return a4.jump(a4._r, _13);
  }
  function _16(a4) {
    return a4.raise(a4._err1);
  }
  function _17(a4, a) {
    a4._ex = a;
    return a4.jump(void 0, _4, _18);
  }
  function _18(a4, a) {
    a4._fc = _16, a4._fe = _14, a4._err1 = a;
    return a4.jump(void 0, _7);
  }
}
function a5() {
  var a5 = M.context();
  return a5.scope(_1);
  function _1(a5) {
    a5._loop = a5.iterator(a4());
    return a5.jump(void 0, _2, _8);
  }
  function _2(a5) {
    if (!(a5._loop = a5._loop.step()).done) {
      a5._i = a5._loop.value;
      return a5.yld(a5._i, _2, _8);
    } else {
      a5._fc = _4, a5._fe = _6;
      return a5.jump(void 0, _3);
    }
  }
  function _3(a5) {
    if (a5._loop.exit) {
      a5._loop.exit();
    }
    return a5.jump(void 0, a5._fc, a5._fe);
  }
  function _4(a5) {
    return a5.pure();
  }
  function _5(a5, r) {
    return a5.pure(r);
  }
  function _6(a5, e) {
    return a5.raise(e);
  }
  function _7(a5) {
    return a5.raise(a5._err1);
  }
  function _8(a5, a) {
    a5._fc = _7, a5._fe = _6, a5._err1 = a;
    return a5.jump(void 0, _3);
  }
}
function a6_1() {
  var a6_1 = M.context();
  return a6_1.scope(_1);
  function _1(a6_1) {
    return a6_1.yld(1, _2, _14);
  }
  function _2(a6_1) {
    return a6_1.yld(2, _3, _15);
  }
  function _3(a6_1) {
    return a6_1.yld(3, _4, _15);
  }
  function _4(a6_1, a) {
    if (a) {
      a6_1._fc1 = _11, a6_1._fe1 = _10, a6_1._r = 10;
      return a6_1.jump(void 0, _5, _16);
    } else {
      a6_1._fc1 = _7, a6_1._fe1 = _10;
      return a6_1.yld(4, _5, _16);
    }
  }
  function _5(a6_1) {
    a6_1._err1 = a6_1._err2;
    return a6_1.yld("f1", _6);
  }
  function _6(a6_1) {
    return a6_1.yld("f2", a6_1._fc1, a6_1._fe1);
  }
  function _7(a6_1) {
    return a6_1.yld(5, _8);
  }
  function _8(a6_1) {
    return a6_1.pure();
  }
  function _9(a6_1, r) {
    return a6_1.pure(r);
  }
  function _10(a6_1, e) {
    return a6_1.raise(e);
  }
  function _11(a6_1) {
    return a6_1.jump(a6_1._r, _9);
  }
  function _12(a6_1) {
    return a6_1.raise(a6_1._err1);
  }
  function _13(a6_1) {
    return a6_1.raise(a6_1._err2);
  }
  function _14(a6_1, a) {
    a6_1._fc1 = _12, a6_1._fe1 = _10, a6_1._err1 = a;
    return a6_1.jump(void 0, _6);
  }
  function _15(a6_1, a) {
    a6_1._fc1 = _13, a6_1._fe1 = _10, a6_1._err2 = a;
    return a6_1.jump(void 0, _5, _16);
  }
  function _16(a6_1, a) {
    a6_1._fc1 = _12, a6_1._fe1 = _10, a6_1._err1 = a;
    return a6_1.jump(void 0, _6);
  }
}
function a1_2() {
  var a1_2 = M.context();
  return a1_2.scope(_1);
  function _1(a1_2) {
    return a1_2.yld(1, _2);
  }
  function _2(a1_2) {
    return a1_2.pure(2);
  }
  function _3(a1_2, r) {
    return a1_2.pure(r);
  }
}
function a2_1() {
  var a2_1 = M.context();
  return a2_1.scope(_1);
  function _1(a2_1) {
    a2_1._loop = a2_1.iterator(a4());
    return a2_1.jump(void 0, _2, _9);
  }
  function _2(a2_1) {
    if (!(a2_1._loop = a2_1._loop.step()).done) {
      a2_1._i = a2_1._loop.value;
      return a2_1.yld(a2_1._i, _2, _9);
    } else {
      a2_1._fc = _4, a2_1._fe = _7;
      return a2_1.jump(void 0, _3);
    }
  }
  function _3(a2_1) {
    if (a2_1._loop.exit) {
      a2_1._loop.exit();
    }
    return a2_1.jump(void 0, a2_1._fc, a2_1._fe);
  }
  function _4(a2_1) {
    return a2_1.yld(10, _5);
  }
  function _5(a2_1) {
    return a2_1.pure();
  }
  function _6(a2_1, r) {
    return a2_1.pure(r);
  }
  function _7(a2_1, e) {
    return a2_1.raise(e);
  }
  function _8(a2_1) {
    return a2_1.raise(a2_1._err1);
  }
  function _9(a2_1, a) {
    a2_1._fc = _8, a2_1._fe = _7, a2_1._err1 = a;
    return a2_1.jump(void 0, _3);
  }
}
function a3_1() {
  var a3_1 = M.context();
  return a3_1.scope(_1);
  function _1(a3_1) {
    a3_1._loop = a3_1.iterator(a4());
    return a3_1.jump(void 0, _2, _8);
  }
  function _2(a3_1) {
    if (!(a3_1._loop = a3_1._loop.step()).done) {
      a3_1._i = a3_1._loop.value;
      return a3_1.yld(a3_1._i, _2, _8);
    } else {
      a3_1._fc = _4, a3_1._fe = _6;
      return a3_1.jump(void 0, _3);
    }
  }
  function _3(a3_1) {
    if (a3_1._loop.exit) {
      a3_1._loop.exit();
    }
    return a3_1.jump(void 0, a3_1._fc, a3_1._fe);
  }
  function _4(a3_1) {
    return a3_1.pure();
  }
  function _5(a3_1, r) {
    return a3_1.pure(r);
  }
  function _6(a3_1, e) {
    return a3_1.raise(e);
  }
  function _7(a3_1) {
    return a3_1.raise(a3_1._err1);
  }
  function _8(a3_1, a) {
    a3_1._fc = _7, a3_1._fe = _6, a3_1._err1 = a;
    return a3_1.jump(void 0, _3);
  }
}
function a6() {
  var a6 = M.context();
  return a6.scope(_1);
  function _1(a6) {
    a6._i = 0;
    return a6.jump(void 0, _2);
  }
  function _2(a6) {
    var a;
    a = a6._i++;
    return a6.yld(a, _3);
  }
  function _3(a6, a) {
    if (a === "exit") {
      return a6.pure(100);
    } else {
      return a6.jump(void 0, _2);
    }
  }
  function _4(a6, r) {
    return a6.pure(r);
  }
}
function a7() {
  var a7 = M.context();
  return a7.scope(_1);
  function _1(a7) {
    return a7.yld(1, _2);
  }
  function _2(a7, a) {
    if (a) {
      return a7.yld("A", _3);
    } else {
      return a7.yld("c", _6);
    }
  }
  function _3(a7, b) {
    var a;
    a = b;
    if (a) {
      return a7.yld("b", _4);
    } else {
      return a7.jump(a, _5);
    }
  }
  function _4(a7, a) {
    a7._1 = a;
    return a7.jump(void 0, _5);
  }
  function _5(a7) {
    a7._ = a7._1;
    return a7.jump(void 0, _11);
  }
  function _6(a7, b) {
    var a;
    a = b;
    if (!a) {
      return a7.yld("d", _7);
    } else {
      a7._2 = a;
      return a7.jump(void 0, _10);
    }
  }
  function _7(a7, b) {
    var a;
    a = b;
    if (a) {
      return a7.yld("e", _8);
    } else {
      return a7.jump(a, _9);
    }
  }
  function _8(a7, a) {
    a7._3 = a;
    return a7.jump(void 0, _9);
  }
  function _9(a7) {
    a7._2 = a7._3;
    return a7.jump(void 0, _10);
  }
  function _10(a7) {
    a7._ = a7._2;
    return a7.jump(void 0, _11);
  }
  function _11(a7) {
    return a7.pure(a7._);
  }
  function _12(a7, r) {
    return a7.pure(r);
  }
}
function a7_1() {
  var a7_1 = M.context();
  return a7_1.scope(_1);
  function _1(a7_1) {
    return a7_1.yld(1, _2);
  }
  function _2(a7_1, a) {
    if (a) {
      return a7_1.yld("A", _3);
    } else {
      return a7_1.yld("c", _6);
    }
  }
  function _3(a7_1, b) {
    var a;
    a = b;
    if (a) {
      return a7_1.yld("b", _4);
    } else {
      return a7_1.jump(a, _5);
    }
  }
  function _4(a7_1, a) {
    a7_1._1 = a;
    return a7_1.jump(void 0, _5);
  }
  function _5(a7_1) {
    a7_1._ = a7_1._1;
    return a7_1.jump(void 0, _11);
  }
  function _6(a7_1, b) {
    var a;
    a = b;
    if (!a) {
      return a7_1.yld("d", _7);
    } else {
      a7_1._2 = a;
      return a7_1.jump(void 0, _10);
    }
  }
  function _7(a7_1, b) {
    var a;
    a = b;
    if (a) {
      return a7_1.yld("e", _8);
    } else {
      return a7_1.jump(a, _9);
    }
  }
  function _8(a7_1, a) {
    a7_1._3 = a;
    return a7_1.jump(void 0, _9);
  }
  function _9(a7_1) {
    a7_1._2 = a7_1._3;
    return a7_1.jump(void 0, _10);
  }
  function _10(a7_1) {
    a7_1._ = a7_1._2;
    return a7_1.jump(void 0, _11);
  }
  function _11(a7_1) {
    return a7_1.yld(2, _12);
  }
  function _12(a7_1, a) {
    return a7_1.yld(a7_1._ + a, _13);
  }
  function _13(a7_1, a) {
    return a7_1.pure(a);
  }
  function _14(a7_1, r) {
    return a7_1.pure(r);
  }
}
function a7_2() {
  var a7_2 = M.context();
  return a7_2.scope(_1);
  function _1(a7_2) {
    return a7_2.yld(1, _2);
  }
  function _2(a7_2, a) {
    if (a) {
      return a7_2.yld("A", _3);
    } else {
      return a7_2.yld("c", _6);
    }
  }
  function _3(a7_2, b) {
    var a;
    a = b;
    if (a) {
      return a7_2.yld("b", _4);
    } else {
      return a7_2.jump(a, _5);
    }
  }
  function _4(a7_2, a) {
    a7_2._1 = a;
    return a7_2.jump(void 0, _5);
  }
  function _5(a7_2) {
    a7_2._ = a7_2._1;
    return a7_2.jump(void 0, _11);
  }
  function _6(a7_2, b) {
    var a;
    a = b;
    if (!a) {
      return a7_2.yld("d", _7);
    } else {
      a7_2._2 = a;
      return a7_2.jump(void 0, _10);
    }
  }
  function _7(a7_2, b) {
    var a;
    a = b;
    if (a) {
      return a7_2.yld("e", _8);
    } else {
      return a7_2.jump(a, _9);
    }
  }
  function _8(a7_2, a) {
    a7_2._3 = a;
    return a7_2.jump(void 0, _9);
  }
  function _9(a7_2) {
    a7_2._2 = a7_2._3;
    return a7_2.jump(void 0, _10);
  }
  function _10(a7_2) {
    a7_2._ = a7_2._2;
    return a7_2.jump(void 0, _11);
  }
  function _11(a7_2) {
    return a7_2.yld(2, _12);
  }
  function _12(a7_2, a) {
    return a7_2.yld(a7_2._ + a, _13);
  }
  function _13(a7_2) {
    return a7_2.yld("ex", _14);
  }
  function _14(a7_2) {
    return a7_2.pure();
  }
  function _15(a7_2, r) {
    return a7_2.pure(r);
  }
}
function a7_3() {
  var a7_3 = M.context();
  return a7_3.scope(_1);
  function _1(a7_3) {
    return a7_3.yld(1, _2);
  }
  function _2(a7_3, a) {
    if (a % 2) {
      return a7_3.yld("A", _3);
    } else {
      return a7_3.yld("c", _6);
    }
  }
  function _3(a7_3, b) {
    var a;
    a = b;
    if (a) {
      return a7_3.yld("b", _4);
    } else {
      return a7_3.jump(a, _5);
    }
  }
  function _4(a7_3, a) {
    a7_3._ = a;
    return a7_3.jump(void 0, _5);
  }
  function _5(a7_3) {
    a7_3._;
    return a7_3.jump(void 0, _7);
  }
  function _6(a7_3, a) {
    a;
    return a7_3.jump(void 0, _7);
  }
  function _7(a7_3) {
    return a7_3.yld(2, _8);
  }
  function _8(a7_3) {
    return a7_3.pure();
  }
  function _9(a7_3, r) {
    return a7_3.pure(r);
  }
}
function a7_4() {
  var a7_4 = M.context();
  return a7_4.scope(_1);
  function _1(a7_4) {
    if (1) {
      return a7_4.yld(2, _2);
    } else {
      return a7_4.yld(3, _3);
    }
  }
  function _2(a7_4, a) {
    a7_4._ = a;
    return a7_4.jump(void 0, _5);
  }
  function _3(a7_4, a) {
    a7_4._1 = a;
    return a7_4.yld(4, _4);
  }
  function _4(a7_4, a) {
    a7_4._ = (a7_4._1, a);
    return a7_4.jump(void 0, _5);
  }
  function _5(a7_4) {
    return a7_4.yld(a7_4._, _6);
  }
  function _6(a7_4, a) {
    return a7_4.yld(a, _7);
  }
  function _7(a7_4, a) {
    return a7_4.pure(a);
  }
  function _8(a7_4, r) {
    return a7_4.pure(r);
  }
}
function a7_5() {
  var a7_5 = M.context();
  return a7_5.scope(_1);
  function _1(a7_5) {
    return a7_5.yld(1, _2);
  }
  function _2(a7_5, a) {
    if (a) {
      return a7_5.yld(2, _3);
    } else {
      return a7_5.yld(3, _4);
    }
  }
  function _3(a7_5, a) {
    a7_5._ = a;
    return a7_5.jump(void 0, _5);
  }
  function _4(a7_5, a) {
    a7_5._ = a;
    return a7_5.jump(void 0, _5);
  }
  function _5(a7_5) {
    return a7_5.yld(a7_5._, _6);
  }
  function _6(a7_5, a) {
    return a7_5.pure(a);
  }
  function _7(a7_5, r) {
    return a7_5.pure(r);
  }
}
function a7_6() {
  var a7_6 = M.context();
  return a7_6.scope(_1);
  function _1(a7_6) {
    return a7_6.yld(1, _2);
  }
  function _2(a7_6, a) {
    if (a) {
      return a7_6.yld("A", _3);
    } else {
      a7_6._ = 1;
      return a7_6.jump(void 0, _6);
    }
  }
  function _3(a7_6, b) {
    var a;
    a = b;
    if (a) {
      return a7_6.yld("b", _4);
    } else {
      return a7_6.jump(a, _5);
    }
  }
  function _4(a7_6, a) {
    a7_6._1 = a;
    return a7_6.jump(void 0, _5);
  }
  function _5(a7_6) {
    a7_6._ = a7_6._1;
    return a7_6.jump(void 0, _6);
  }
  function _6(a7_6) {
    return a7_6.yld(a7_6._, _7);
  }
  function _7(a7_6, a) {
    return a7_6.pure(a);
  }
  function _8(a7_6, r) {
    return a7_6.pure(r);
  }
}
function finallyBlock1() {
  var finallyBlock1 = M.context();
  return finallyBlock1.scope(_1);
  function _1(finallyBlock1) {
    finallyBlock1._i = 0;
    return finallyBlock1.jump(void 0, _2, _10);
  }
  function _2(finallyBlock1) {
    return finallyBlock1.yld(finallyBlock1._i++ === 3, _3, _10);
  }
  function _3(finallyBlock1, a) {
    if (a) {
      finallyBlock1._fc = _8, finallyBlock1._fe = _7;
      return finallyBlock1.jump(void 0, _4);
    } else {
      return finallyBlock1.jump(void 0, _2, _10);
    }
  }
  function _4(finallyBlock1) {
    return finallyBlock1.yld("exit", _5);
  }
  function _5(finallyBlock1) {
    return finallyBlock1.yld(finallyBlock1._i, finallyBlock1._fc, finallyBlock1._fe);
  }
  function _6(finallyBlock1, r) {
    return finallyBlock1.pure(r);
  }
  function _7(finallyBlock1, e) {
    return finallyBlock1.raise(e);
  }
  function _8(finallyBlock1) {
    return finallyBlock1.jump(finallyBlock1._r, _6);
  }
  function _9(finallyBlock1) {
    return finallyBlock1.raise(finallyBlock1._err1);
  }
  function _10(finallyBlock1, a) {
    finallyBlock1._fc = _9, finallyBlock1._fe = _7, finallyBlock1._err1 = a;
    return finallyBlock1.jump(void 0, _4);
  }
}
function ae() {
  var ae = M.context();
  return ae.scope(_1);
  function _1(ae) {
    return ae.yld(1, _2);
  }
  function _2(ae) {
    return ae.yld(2, _3);
  }
  function _3(ae) {
    return ae.yld(3, _4);
  }
  function _4(ae, a) {
    if (a) {
      return ae.pure(1);
    } else {
      return ae.pure(2);
    }
  }
  function _5(ae, r) {
    return ae.pure(r);
  }
}
function cfb() {
  var cfb = M.context();
  return cfb.scope(_1);
  function _1(cfb) {
    cfb._i = 0;
    return cfb.jump(void 0, _2, _13);
  }
  function _2(cfb) {
    return cfb.yld(cfb._i++ === 3, _3, _13);
  }
  function _3(cfb, a) {
    if (a) {
      throw new Error(`AAAAAAAAA${cfb._i++}`);
    }
    cfb._fc = _8, cfb._fe = _10;
    return cfb.yld(`a${cfb._i++}`, _7);
  }
  function _4(cfb) {
    cfb._e = cfb._ex;
    return cfb.yld(`e${cfb._i++}`, _5, _14);
  }
  function _5(cfb) {
    return cfb.yld(cfb._e, _6, _14);
  }
  function _6(cfb) {
    cfb._fc = _11, cfb._fe = _10, cfb._r = cfb._i++;
    return cfb.jump(void 0, _7);
  }
  function _7(cfb) {
    return cfb.yld(`f1${cfb._i++}`, cfb._fc, cfb._fe);
  }
  function _8(cfb) {
    return cfb.pure();
  }
  function _9(cfb, r) {
    return cfb.pure(r);
  }
  function _10(cfb, e) {
    return cfb.raise(e);
  }
  function _11(cfb) {
    return cfb.jump(cfb._r, _9);
  }
  function _12(cfb) {
    return cfb.raise(cfb._err1);
  }
  function _13(cfb, a) {
    cfb._ex = a;
    return cfb.jump(void 0, _4, _14);
  }
  function _14(cfb, a) {
    cfb._fc = _12, cfb._fe = _10, cfb._err1 = a;
    return cfb.jump(void 0, _7);
  }
}
function cfb1_1() {
  var cfb1_1 = M.context();
  return cfb1_1.scope(_1);
  function _1(cfb1_1) {
    cfb1_1._i = 0;
    return cfb1_1.jump(void 0, _2, _11);
  }
  function _2(cfb1_1) {
    return cfb1_1.yld(cfb1_1._i, _3, _11);
  }
  function _3(cfb1_1) {
    throw new Error(`AAAAAAAAA${cfb1_1._i++}`);
  }
  function _4(cfb1_1) {
    var e;
    e = cfb1_1._ex;
    cfb1_1._fc = _9, cfb1_1._fe = _8, cfb1_1._r = cfb1_1._i++;
    return cfb1_1.jump(void 0, _5);
  }
  function _5(cfb1_1) {
    console.log(`f${cfb1_1._i}`);
    return cfb1_1.jump(void 0, cfb1_1._fc, cfb1_1._fe);
  }
  function _6(cfb1_1) {
    return cfb1_1.pure();
  }
  function _7(cfb1_1, r) {
    return cfb1_1.pure(r);
  }
  function _8(cfb1_1, e) {
    return cfb1_1.raise(e);
  }
  function _9(cfb1_1) {
    return cfb1_1.jump(cfb1_1._r, _7);
  }
  function _10(cfb1_1) {
    return cfb1_1.raise(cfb1_1._err1);
  }
  function _11(cfb1_1, a) {
    cfb1_1._ex = a;
    return cfb1_1.jump(void 0, _4, _12);
  }
  function _12(cfb1_1, a) {
    cfb1_1._fc = _10, cfb1_1._fe = _8, cfb1_1._err1 = a;
    return cfb1_1.jump(void 0, _5);
  }
}
function cfb1() {
  var cfb1 = M.context();
  return cfb1.scope(_1);
  function _1(cfb1) {
    cfb1._i = 0;
    return cfb1.jump(void 0, _2, _7);
  }
  function _2(cfb1) {
    return cfb1.yld(cfb1._i, _3, _7);
  }
  function _3(cfb1) {
    return cfb1.yld(5, _5);
  }
  function _4(cfb1) {
    var e;
    e = cfb1._ex;
    return cfb1.pure(cfb1._i++);
  }
  function _5(cfb1) {
    return cfb1.pure();
  }
  function _6(cfb1, r) {
    return cfb1.pure(r);
  }
  function _7(cfb1, a) {
    cfb1._ex = a;
    return cfb1.jump(void 0, _4);
  }
}
function cfb2_1() {
  var cfb2_1 = M.context();
  return cfb2_1.scope(_1);
  function _1(cfb2_1) {
    cfb2_1._i = 0;
    return cfb2_1.jump(void 0, _2, _11);
  }
  function _2(cfb2_1) {
    return cfb2_1.yld(`a:${cfb2_1._i++}`, _3, _11);
  }
  function _3(cfb2_1) {
    return cfb2_1.yld(`b:${cfb2_1._i++}`, _4, _11);
  }
  function _4(cfb2_1) {
    cfb2_1._fc = _8, cfb2_1._fe = _10;
    return cfb2_1.yld(`c:${cfb2_1._i++}`, _5, _12);
  }
  function _5(cfb2_1) {
    cfb2_1._ex = cfb2_1._err1;
    return cfb2_1.yld(`f:${cfb2_1._i++}`, cfb2_1._fc, cfb2_1._fe);
  }
  function _6(cfb2_1) {
    var e;
    e = cfb2_1._ex;
    return cfb2_1.yld(e, _7);
  }
  function _7(cfb2_1) {
    return cfb2_1.yld(`e:${cfb2_1._i++}`, _8);
  }
  function _8(cfb2_1) {
    return cfb2_1.pure();
  }
  function _9(cfb2_1, r) {
    return cfb2_1.pure(r);
  }
  function _10(cfb2_1, e) {
    return cfb2_1.raise(e);
  }
  function _11(cfb2_1, a) {
    cfb2_1._fc = _6, cfb2_1._fe = _10, cfb2_1._err1 = a;
    return cfb2_1.jump(void 0, _5, _12);
  }
  function _12(cfb2_1, a) {
    cfb2_1._ex = a;
    return cfb2_1.jump(void 0, _6);
  }
}
function cfb3() {
  var cfb3 = M.context();
  return cfb3.scope(_1);
  function _1(cfb3) {
    cfb3._i = 0;
    return cfb3.jump(void 0, _2, _13);
  }
  function _2(cfb3) {
    return cfb3.yld(cfb3._i === 3, _3, _13);
  }
  function _3(cfb3, a) {
    if (a) {
      throw new Error(`AAAAAAAAA${cfb3._i++}`);
    }
    cfb3._fc = _5, cfb3._fe = _12;
    return cfb3.yld(`a${cfb3._i}`, _4, _14);
  }
  function _4(cfb3) {
    cfb3._ex = cfb3._err1;
    return cfb3.yld(`f1${cfb3._i++}`, cfb3._fc, cfb3._fe);
  }
  function _5(cfb3) {
    return cfb3.yld(`b${cfb3._i++}`, _9);
  }
  function _6(cfb3) {
    cfb3._e = cfb3._ex;
    return cfb3.yld(`e${cfb3._i}`, _7);
  }
  function _7(cfb3) {
    return cfb3.yld(cfb3._e, _8);
  }
  function _8(cfb3) {
    return cfb3.pure(cfb3._i);
  }
  function _9(cfb3) {
    cfb3._i++;
    return cfb3.jump(void 0, _2, _13);
  }
  function _10(cfb3, r) {
    return cfb3.pure(r);
  }
  function _11(cfb3, e) {
    return cfb3.raise(e);
  }
  function _12(cfb3, a) {
    cfb3._ex = a;
    return cfb3.jump(void 0, _6);
  }
  function _13(cfb3, a) {
    cfb3._fc = _6, cfb3._fe = _11, cfb3._err1 = a;
    return cfb3.jump(void 0, _4, _14);
  }
  function _14(cfb3, a) {
    cfb3._ex = a;
    return cfb3.jump(void 0, _6);
  }
}
function cfb4() {
  var cfb4 = M.context();
  return cfb4.scope(_1, _5);
  function _1(cfb4) {
    return cfb4.yld(5, _3);
  }
  function _2(cfb4) {
    var e;
    e = cfb4._ex;
    return cfb4.pure(10);
  }
  function _3(cfb4) {
    return cfb4.pure();
  }
  function _4(cfb4, r) {
    return cfb4.pure(r);
  }
  function _5(cfb4, a) {
    cfb4._ex = a;
    return cfb4.jump(void 0, _2);
  }
}
function cfb2() {
  var cfb2 = M.context();
  return cfb2.scope(_1);
  function _1(cfb2) {
    cfb2._i = 0;
    return cfb2.jump(void 0, _2, _9);
  }
  function _2(cfb2) {
    cfb2._fc = _6, cfb2._fe = _8;
    return cfb2.yld(`c:${cfb2._i++}`, _3, _10);
  }
  function _3(cfb2) {
    cfb2._ex = cfb2._err1;
    return cfb2.yld(`f:${cfb2._i++}`, cfb2._fc, cfb2._fe);
  }
  function _4(cfb2) {
    var e;
    e = cfb2._ex;
    return cfb2.yld(e, _5);
  }
  function _5(cfb2) {
    return cfb2.yld(`e:${cfb2._i++}`, _6);
  }
  function _6(cfb2) {
    return cfb2.pure();
  }
  function _7(cfb2, r) {
    return cfb2.pure(r);
  }
  function _8(cfb2, e) {
    return cfb2.raise(e);
  }
  function _9(cfb2, a) {
    cfb2._fc = _4, cfb2._fe = _8, cfb2._err1 = a;
    return cfb2.jump(void 0, _3, _10);
  }
  function _10(cfb2, a) {
    cfb2._ex = a;
    return cfb2.jump(void 0, _4);
  }
}
function cfb6() {
  var cfb6 = M.context();
  return cfb6.scope(_1, _10);
  function _1(cfb6) {
    cfb6._fc = _5, cfb6._fe = _7;
    return cfb6.yld(1, _4);
  }
  function _2(cfb6) {
    var e;
    e = cfb6._ex;
    return cfb6.yld(2, _3, _11);
  }
  function _3(cfb6) {
    cfb6._fc = _8, cfb6._fe = _7, cfb6._r = 3;
    return cfb6.jump(void 0, _4);
  }
  function _4(cfb6) {
    return cfb6.yld(4, cfb6._fc, cfb6._fe);
  }
  function _5(cfb6) {
    return cfb6.pure();
  }
  function _6(cfb6, r) {
    return cfb6.pure(r);
  }
  function _7(cfb6, e) {
    return cfb6.raise(e);
  }
  function _8(cfb6) {
    return cfb6.jump(cfb6._r, _6);
  }
  function _9(cfb6) {
    return cfb6.raise(cfb6._err1);
  }
  function _10(cfb6, a) {
    cfb6._ex = a;
    return cfb6.jump(void 0, _2, _11);
  }
  function _11(cfb6, a) {
    cfb6._fc = _9, cfb6._fe = _7, cfb6._err1 = a;
    return cfb6.jump(void 0, _4);
  }
}
function fb4() {
  var fb4 = M.context();
  return fb4.scope(_1);
  function _1(fb4) {
    fb4._i = 0;
    return fb4.jump(void 0, _2, _10);
  }
  function _2(fb4) {
    var a;
    a = fb4._i++;
    return fb4.yld(a, _3, _10);
  }
  function _3(fb4, a) {
    if (a === 3) {
      fb4._fc = _8, fb4._fe = _7, fb4._r = fb4._i;
      return fb4.jump(void 0, _4);
    } else {
      return fb4.jump(void 0, _2, _10);
    }
  }
  function _4(fb4) {
    return fb4.yld("exit", _5);
  }
  function _5(fb4) {
    return fb4.yld(fb4._i, fb4._fc, fb4._fe);
  }
  function _6(fb4, r) {
    return fb4.pure(r);
  }
  function _7(fb4, e) {
    return fb4.raise(e);
  }
  function _8(fb4) {
    return fb4.jump(fb4._r, _6);
  }
  function _9(fb4) {
    return fb4.raise(fb4._err1);
  }
  function _10(fb4, a) {
    fb4._fc = _9, fb4._fe = _7, fb4._err1 = a;
    return fb4.jump(void 0, _4);
  }
}
function while2() {
  var while2 = M.context();
  return while2.scope(_1);
  function _1(while2) {
    while2._i = 0;
    return while2.jump(void 0, _2);
  }
  function _2(while2) {
    var a;
    a = while2._i++;
    return while2.yld(a, _3);
  }
  function _3(while2, a) {
    var b;
    if (a < 3) {
      b = while2._i++;
      return while2.yld(b, _2);
    } else {
      return while2.pure();
    }
  }
  function _4(while2, r) {
    return while2.pure(r);
  }
}
function for2() {
  var for2 = M.context();
  return for2.scope(_1);
  function _1(for2) {
    return for2.yld(void 0, _2);
  }
  function _2(for2, a) {
    for2._i = a;
    return for2.jump(void 0, _3);
  }
  function _3(for2) {
    return for2.yld(for2._i, _4);
  }
  function _4(for2, a) {
    if (a < 10) {
      return for2.yld(for2._i, _5);
    } else {
      return for2.pure();
    }
  }
  function _5(for2) {
    for2._i++;
    return for2.jump(void 0, _3);
  }
  function _6(for2, r) {
    return for2.pure(r);
  }
}
function c1_1() {
  var a = function _a() {
      var a = M.context();
      a._b = function _b() {
        var b = M.context();
        b._c1_1 = c1_1;
        return b.scope(_1);
        function _1(b) {
          return b.pure(function c() {
            var _c = M.context();
            _c._c1_1 = c1_1;
            return _c.scope(_1);
            function _1(_c) {
              _c._c1_1._i++;
              return _c.pure();
            }
            function _2(_c, r) {
              return _c.pure(r);
            }
          });
        }
        function _2(b, r) {
          return b.pure(r);
        }
      };
      return a.scope(_1);
      function _1(a) {
        return a.pure();
      }
      function _2(a, r) {
        return a.pure(r);
      }
    },
    c1_1 = {};
  c1_1._i = 0;
}
function c2_1() {
  var inner = function _inner() {
      var inner = M.context();
      inner._a = function a1() {
        var _a = M.context();
        _a._c2_1 = c2_1;
        return _a.scope(_1);
        function _1(_a) {
          _a._ = _a._c2_1._i;
          return _a.yld(`a:${_a._c2_1._i}`, _2);
        }
        function _2(_a, b) {
          var a;
          a = _a._c2_1._i = _a._ + b;
          return _a.pure(a);
        }
        function _3(_a, r) {
          return _a.pure(r);
        }
      };
      return inner.scope(_1);
      function _1(inner) {
        var b;
        b = () => {
          var j,
            ctx = {},
            _c2_1 = c2_1;
          ctx._a = function a() {
            var _c2_1 = c2_1;
            _c2_1._i += 2;
            return _c2_1._i;
          };
          ctx._b = function b() {
            var _c2_1 = c2_1;
            _c2_1._i += j;
          };
          {
            j = 10;
            _c2_1._i++;
            return function z() {
              var _z = M.context();
              _z._c = function c() {
                var _c2_1 = c2_1;
                return _c2_1._i += this.something;
              };
              return _z.scope(_1);
              function _1(_z) {
                _z._d = function z(j) {
                  var _c2_1 = c2_1;
                  return _c2_1._i += j;
                };
                return _z.yldStar((0, _z._c)(), _2);
              }
              function _2(_z, a) {
                return _z.yldStar((0, _z._d)(a), _3);
              }
              function _3(_z, a) {
                return _z.yldStar(a, _4);
              }
              function _4(_z, a) {
                return _z.yld(`b:${a}`, _5);
              }
              function _5(_z) {
                return _z.pure(function z(j) {
                  var _z = M.context();
                  _z._j = j;
                  _z._c2_1 = c2_1;
                  _z._f = ctx;
                  return _z.scope(_1);
                  function _1(_z) {
                    var a;
                    _z._ = _z._c2_1._i;
                    a = _z._f._a;
                    return _z.yldStar(a(), _2);
                  }
                  function _2(_z, b) {
                    var a;
                    _z._1 = b;
                    a = _z._f._b;
                    return _z.yldStar(a(), _3);
                  }
                  function _3(_z, b) {
                    var a;
                    a = _z._c2_1._i = _z._ + (_z._j + _z._1 + b);
                    return _z.pure(a);
                  }
                  function _4(_z, r) {
                    return _z.pure(r);
                  }
                });
              }
              function _6(_z, r) {
                return _z.pure(r);
              }
            };
          }
        };
        inner._k = 1;
        return inner.yldStar(b(), _2);
      }
      function _2(inner, a) {
        var f;
        f = [inner._a, a];
        inner._loop = inner.iterator(f);
        return inner.jump(void 0, _3, _11);
      }
      function _3(inner) {
        if (!(inner._loop = inner._loop.step()).done) {
          inner._j = inner._loop.value;
          return inner.yldStar((0, inner._j)(), _4, _11);
        } else {
          inner._fc = _7, inner._fe = _9;
          return inner.jump(void 0, _6);
        }
      }
      function _4(inner, a) {
        return inner.yldStar(a, _5, _11);
      }
      function _5(inner, a) {
        inner._k += a;
        return inner.jump(void 0, _3, _11);
      }
      function _6(inner) {
        if (inner._loop.exit) {
          inner._loop.exit();
        }
        return inner.jump(void 0, inner._fc, inner._fe);
      }
      function _7(inner) {
        return inner.pure(inner._k);
      }
      function _8(inner, r) {
        return inner.pure(r);
      }
      function _9(inner, e) {
        return inner.raise(e);
      }
      function _10(inner) {
        return inner.raise(inner._err1);
      }
      function _11(inner, a) {
        inner._fc = _10, inner._fe = _9, inner._err1 = a;
        return inner.jump(void 0, _6);
      }
    },
    c2_1 = {};
  c2_1._i = 0;
  return inner;
}
function c1() {
  var c1 = M.context();
  return c1.scope(_1);
  function _1(c1) {
    var i;
    i = 0;
    return c1.yld(`a:${i}`, _2);
  }
  function _2(c1, a) {
    return c1.pure(a);
  }
  function _3(c1, r) {
    return c1.pure(r);
  }
}
function c2_2() {
  var c2_2 = M.context();
  return c2_2.scope(_1);
  function _1(c2_2) {
    c2_2._i = 0;
    return c2_2.yld(`a:${c2_2._i}`, _2);
  }
  function _2(c2_2, b) {
    var a;
    a = c2_2._i += b;
    return c2_2.pure(a);
  }
  function _3(c2_2, r) {
    return c2_2.pure(r);
  }
}
function forOf() {
  var forOf = M.context();
  return forOf.scope(_1);
  function _1(forOf) {
    forOf._loop = forOf.iterator([1, 2, 3]);
    return forOf.jump(void 0, _2, _8);
  }
  function _2(forOf) {
    if (!(forOf._loop = forOf._loop.step()).done) {
      forOf._i = forOf._loop.value;
      return forOf.yld(forOf._i, _2, _8);
    } else {
      forOf._fc = _4, forOf._fe = _6;
      return forOf.jump(void 0, _3);
    }
  }
  function _3(forOf) {
    if (forOf._loop.exit) {
      forOf._loop.exit();
    }
    return forOf.jump(void 0, forOf._fc, forOf._fe);
  }
  function _4(forOf) {
    return forOf.pure();
  }
  function _5(forOf, r) {
    return forOf.pure(r);
  }
  function _6(forOf, e) {
    return forOf.raise(e);
  }
  function _7(forOf) {
    return forOf.raise(forOf._err1);
  }
  function _8(forOf, a) {
    forOf._fc = _7, forOf._fe = _6, forOf._err1 = a;
    return forOf.jump(void 0, _3);
  }
}
const objMethods = {
  a() {
    var ctx = M.context();
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(10, _2);
    }
    function _2(ctx) {
      return ctx.pure();
    }
    function _3(ctx, r) {
      return ctx.pure(r);
    }
  },
  b() {
    var ctx = M.context();
    ctx.__this = this;
    ctx.__args = arguments;
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(1, _2);
    }
    function _2(ctx) {
      return ctx.yld(ctx.__this, _3);
    }
    function _3(ctx) {
      return ctx.yld(ctx.__args, _4);
    }
    function _4(ctx) {
      return ctx.pure();
    }
    function _5(ctx, r) {
      return ctx.pure(r);
    }
  }
};
const objM = {
  objMethod() {
    var ctx = M.context();
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(1, _2);
    }
    function _2(ctx) {
      return ctx.pure();
    }
    function _3(ctx, r) {
      return ctx.pure(r);
    }
  }
};
function objMethodsClosure() {
  var objMethodsClosure = M.context();
  return objMethodsClosure.scope(_1);
  function _1(objMethodsClosure) {
    var k;
    objMethodsClosure._i = 0;
    k = 0;
    objMethodsClosure._m = 0;
    return objMethodsClosure.pure({
      objMethod1(k) {
        var ctx = M.context();
        ctx._k = k;
        ctx._objMethodsClosure = objMethodsClosure;
        return ctx.scope(_1);
        function _1(ctx) {
          var a;
          ctx._j = 0;
          a = ctx._objMethodsClosure._i++;
          return ctx.yld(a, _2);
        }
        function _2(ctx) {
          var a;
          a = ctx._k++;
          return ctx.yld(a, _3);
        }
        function _3(ctx) {
          var a;
          a = ctx._objMethodsClosure._m++;
          return ctx.yld(a, _4);
        }
        function _4(ctx) {
          return ctx.pure({
            objMethod2(m) {
              var _ctx = M.context();
              _ctx._m = m;
              _ctx._f = ctx;
              return _ctx.scope(_1);
              function _1(_ctx) {
                var a;
                a = _ctx._f._j++;
                return _ctx.yld(a, _2);
              }
              function _2(_ctx) {
                var a;
                a = _ctx._f._k++;
                return _ctx.yld(a, _3);
              }
              function _3(_ctx) {
                var a;
                a = _ctx._m++;
                return _ctx.yld(a, _4);
              }
              function _4(_ctx) {
                return _ctx.pure();
              }
              function _5(_ctx, r) {
                return _ctx.pure(r);
              }
            }
          });
        }
        function _5(ctx, r) {
          return ctx.pure(r);
        }
      }
    });
  }
  function _2(objMethodsClosure, r) {
    return objMethodsClosure.pure(r);
  }
}
const objMThis = {
  [objMethod(a)]() {
    var ctx = M.context();
    ctx.__this = this;
    ctx.__args = arguments;
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(ctx.__this, _2);
    }
    function _2(ctx) {
      return ctx.yld(ctx.__this, _3);
    }
    function _3(ctx) {
      var a;
      a = ctx.__args[0];
      return ctx.yld(a, _4);
    }
    function _4(ctx) {
      return ctx.pure();
    }
    function _5(ctx, r) {
      return ctx.pure(r);
    }
  }
};
class SomeClass {
  f(i) {
    var ctx = M.context();
    ctx._i = i;
    ctx.__this = this;
    ctx.__args = arguments;
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(ctx._i, _2);
    }
    function _2(ctx) {
      return ctx.yld(ctx.__args, _3);
    }
    function _3(ctx) {
      return ctx.yld(ctx.__this, _4);
    }
    function _4(ctx) {
      return ctx.pure();
    }
    function _5(ctx, r) {
      return ctx.pure(r);
    }
  }
}
class SomeChild extends SomeClass {
  f(i) {
    var ctx = M.context();
    ctx._i = i;
    ctx.__this = this;
    ctx.__args = arguments;
    return ctx.scope(_1);
    function _1(ctx) {
      return ctx.yld(ctx._i, _2);
    }
    function _2(ctx) {
      return ctx.yld(ctx.__args, _3);
    }
    function _3(ctx) {
      var a;
      a = Object.getPrototypeOf(SomeChild.prototype)[ctx._i].call(ctx.__this, ctx._i);
      return ctx.yldStar(a, _4);
    }
    function _4(ctx) {
      return ctx.pure();
    }
    function _5(ctx, r) {
      return ctx.pure(r);
    }
  }
  static f(i) {
    var ctx = M.context();
    ctx._i = i;
    ctx.__this = this;
    return ctx.scope(_1);
    function _1(ctx) {
      var a;
      a = Object.getPrototypeOf(SomeChild.prototype)[ctx._i].call(ctx.__this, ctx._i);
      return ctx.yldStar(a, _2);
    }
    function _2(ctx) {
      return ctx.pure();
    }
    function _3(ctx, r) {
      return ctx.pure(r);
    }
  }
}
function clasClosure(A) {
  var clasClosure = M.context();
  clasClosure._A = A;
  return clasClosure.scope(_1);
  function _1(clasClosure) {
    var a;
    clasClosure._cnt = 0;
    a = clasClosure._cnt++;
    return clasClosure.yld(a, _2);
  }
  function _2(clasClosure) {
    var a;
    clasClosure._B = class B extends clasClosure._A {
      constructor() {
        var _clasClosure = clasClosure;
        _clasClosure._cnt++;
      }
      static f() {
        var ctx = M.context();
        return ctx.scope(_1);
        function _1(ctx) {
          return ctx.yld(1, _2);
        }
        function _2(ctx) {
          return ctx.pure();
        }
        function _3(ctx, r) {
          return ctx.pure(r);
        }
      }
    };
    a = clasClosure._B.f();
    return clasClosure.yldStar(a, _3);
  }
  function _3(clasClosure) {
    var a;
    clasClosure._B1 = class B extends clasClosure._A {
      constructor() {
        var _clasClosure = clasClosure;
        _clasClosure._cnt += 2;
      }
      static f() {
        var ctx = M.context();
        ctx._clasClosure = clasClosure;
        return ctx.scope(_1);
        function _1(ctx) {
          var a;
          a = ctx._clasClosure._cnt += 2;
          return ctx.yld(a, _2);
        }
        function _2(ctx) {
          return ctx.pure();
        }
        function _3(ctx, r) {
          return ctx.pure(r);
        }
      }
    };
    clasClosure._C = class extends clasClosure._A {
      static f() {
        var ctx = M.context();
        ctx._clasClosure = clasClosure;
        return ctx.scope(_1);
        function _1(ctx) {
          var a;
          a = ctx._clasClosure._cnt += 3;
          return ctx.yld(a, _2);
        }
        function _2(ctx) {
          var a;
          a = ctx._clasClosure._B1.f();
          return ctx.yldStar(a, _3);
        }
        function _3(ctx) {
          return ctx.pure();
        }
        function _4(ctx, r) {
          return ctx.pure(r);
        }
      }
    };
    a = clasClosure._cnt += 3;
    return clasClosure.yld(a, _4);
  }
  function _4(clasClosure) {
    var a;
    a = clasClosure._C.f();
    return clasClosure.yldStar(a, _5);
  }
  function _5(clasClosure) {
    var a;
    a = clasClosure._B1.f();
    return clasClosure.yldStar(a, _6);
  }
  function _6(clasClosure) {
    return clasClosure.pure();
  }
  function _7(clasClosure, r) {
    return clasClosure.pure(r);
  }
}
function c2() {
  var c2 = M.context();
  c2._closure1_a = function _closure1_a() {
    var closure1_a = M.context();
    closure1_a._c2 = c2;
    return closure1_a.scope(_1);
    function _1(closure1_a) {
      closure1_a._ = closure1_a._c2._i;
      return closure1_a.yld(`a`, _2);
    }
    function _2(closure1_a, b) {
      var a;
      a = closure1_a._c2._i = closure1_a._ + b;
      return closure1_a.pure(a);
    }
    function _3(closure1_a, r) {
      return closure1_a.pure(r);
    }
  };
  c2._closure1_b = function closure1_b() {
    var closure1_c = function closure1_c() {
        var _c2 = c2;
        _c2._i += 2;
        return _c2._i;
      },
      closure1_d = function closure1_d() {
        return closure1_c();
      },
      _c2 = c2;
    _c2._i++;
    return closure1_c;
  };
  return c2.scope(_1);
  function _1(c2) {
    c2._i = 0;
    return c2.pure((0, c2._closure1_b)()());
  }
  function _2(c2, r) {
    return c2.pure(r);
  }
}
function loopCapt1() {
  var loopCapt1 = M.context();
  return loopCapt1.scope(_1);
  function _1(loopCapt1) {
    for (loopCapt1._i = 0; loopCapt1._i < 3; loopCapt1._i++) {
      (i => {
        var ctx = {};
        ctx._i = i;
        ctx._j = 0;
        funs(function iter() {
          var _iter = M.context();
          _iter._f = ctx;
          return _iter.scope(_1);
          function _1(_iter) {
            return _iter.yld(`${_iter._f._i} ${_iter._f._j++}`, _2);
          }
          function _2(_iter) {
            return _iter.pure();
          }
          function _3(_iter, r) {
            return _iter.pure(r);
          }
        });
      })(loopCapt1._i);
    }
    return loopCapt1.pure();
  }
  function _2(loopCapt1, r) {
    return loopCapt1.pure(r);
  }
}
function loopCapt2() {
  var loopCapt2 = M.context();
  return loopCapt2.scope(_1);
  function _1(loopCapt2) {
    loopCapt2._i = 0;
    return loopCapt2.jump(void 0, _2);
  }
  function _2(loopCapt2) {
    var a;
    if (loopCapt2._i < 3) {
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          return ctx.yld(ctx._i, _2);
        }
        function _2(ctx) {
          ctx._j = ctx._i + 1;
          funs(function iter() {
            var _iter = M.context();
            _iter._f = ctx;
            return _iter.scope(_1);
            function _1(_iter) {
              return _iter.yld(_iter._f._j + _iter._f._i, _2);
            }
            function _2(_iter) {
              return _iter.pure();
            }
            function _3(_iter, r) {
              return _iter.pure(r);
            }
          });
          return ctx.pure();
        }
        function _3(ctx, r) {
          return ctx.pure(r);
        }
      })(loopCapt2._i);
      return loopCapt2.yldStar(a, _3);
    } else {
      return loopCapt2.yld("f", _4);
    }
  }
  function _3(loopCapt2) {
    loopCapt2._i++;
    return loopCapt2.jump(void 0, _2);
  }
  function _4(loopCapt2) {
    return loopCapt2.pure();
  }
  function _5(loopCapt2, r) {
    return loopCapt2.pure(r);
  }
}
function loopCapt3() {
  var loopCapt3 = M.context();
  return loopCapt3.scope(_1);
  function _1(loopCapt3) {
    loopCapt3._i = 0;
    return loopCapt3.jump(void 0, _2);
  }
  function _2(loopCapt3) {
    var a;
    if (loopCapt3._i < 3) {
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          return ctx.yld(ctx._i, _2);
        }
        function _2(ctx) {
          ctx._j = 0;
          return ctx.jump(void 0, _3);
        }
        function _3(ctx) {
          var a;
          if (ctx._j < 3) {
            a = (j => {
              var _ctx = M.context();
              _ctx._j = j;
              return _ctx.scope(_1);
              function _1(_ctx) {
                var a;
                a = _ctx._j;
                return _ctx.yld(a, _2);
              }
              function _2(_ctx) {
                funs(function iter() {
                  var _iter = M.context();
                  _iter._f = ctx;
                  _iter._f1 = _ctx;
                  return _iter.scope(_1);
                  function _1(_iter) {
                    return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
                  }
                  function _2(_iter) {
                    return _iter.pure();
                  }
                  function _3(_iter, r) {
                    return _iter.pure(r);
                  }
                });
                return _ctx.pure();
              }
              function _3(_ctx, r) {
                return _ctx.pure(r);
              }
            })(ctx._j);
            return ctx.yldStar(a, _4);
          } else {
            return ctx.pure();
          }
        }
        function _4(ctx) {
          ctx._j++;
          return ctx.jump(void 0, _3);
        }
        function _5(ctx, r) {
          return ctx.pure(r);
        }
      })(loopCapt3._i);
      return loopCapt3.yldStar(a, _3);
    } else {
      return loopCapt3.pure();
    }
  }
  function _3(loopCapt3) {
    loopCapt3._i++;
    return loopCapt3.jump(void 0, _2);
  }
  function _4(loopCapt3, r) {
    return loopCapt3.pure(r);
  }
}
function loopCapt4() {
  var loopCapt4 = M.context();
  return loopCapt4.scope(_1);
  function _1(loopCapt4) {
    for (loopCapt4._i = 0; loopCapt4._i < 3; loopCapt4._i++) {
      (i => {
        var j,
          ctx = {};
        ctx._i = i;
        for (j = 0; j < 3; j++) {
          (j => {
            var _ctx = {};
            _ctx._j = j;
            funs(function iter() {
              var _iter = M.context();
              _iter._f = ctx;
              _iter._f1 = _ctx;
              return _iter.scope(_1);
              function _1(_iter) {
                return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
              }
              function _2(_iter) {
                return _iter.pure();
              }
              function _3(_iter, r) {
                return _iter.pure(r);
              }
            });
          })(j);
        }
      })(loopCapt4._i);
    }
    return loopCapt4.pure();
  }
  function _2(loopCapt4, r) {
    return loopCapt4.pure(r);
  }
}
function forOfCapt1() {
  var forOfCapt1 = M.context();
  return forOfCapt1.scope(_1);
  function _1(forOfCapt1) {
    for (forOfCapt1._i of a) {
      (i => {
        var ctx = {};
        ctx._i = i;
        ctx._j = 0;
        funs(function iter() {
          var _iter = M.context();
          _iter._f = ctx;
          return _iter.scope(_1);
          function _1(_iter) {
            return _iter.yld(`${_iter._f._i} ${_iter._f._j++}`, _2);
          }
          function _2(_iter) {
            return _iter.pure();
          }
          function _3(_iter, r) {
            return _iter.pure(r);
          }
        });
      })(forOfCapt1._i);
    }
    return forOfCapt1.pure();
  }
  function _2(forOfCapt1, r) {
    return forOfCapt1.pure(r);
  }
}
function forOfCapt2() {
  var forOfCapt2 = M.context();
  return forOfCapt2.scope(_1);
  function _1(forOfCapt2) {
    forOfCapt2._loop = forOfCapt2.iterator(a);
    return forOfCapt2.jump(void 0, _2, _8);
  }
  function _2(forOfCapt2) {
    var a;
    if (!(forOfCapt2._loop = forOfCapt2._loop.step()).done) {
      forOfCapt2._i = forOfCapt2._loop.value;
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          ctx._j = 0;
          return ctx.yld(ctx._i, _2);
        }
        function _2(ctx) {
          funs(function iter() {
            var _iter = M.context();
            _iter._f = ctx;
            return _iter.scope(_1);
            function _1(_iter) {
              return _iter.yld(`${_iter._f._i} ${_iter._f._j++}`, _2);
            }
            function _2(_iter) {
              return _iter.pure();
            }
            function _3(_iter, r) {
              return _iter.pure(r);
            }
          });
          return ctx.pure();
        }
        function _3(ctx, r) {
          return ctx.pure(r);
        }
      })(forOfCapt2._i);
      return forOfCapt2.yldStar(a, _2, _8);
    } else {
      forOfCapt2._fc = _4, forOfCapt2._fe = _6;
      return forOfCapt2.jump(void 0, _3);
    }
  }
  function _3(forOfCapt2) {
    if (forOfCapt2._loop.exit) {
      forOfCapt2._loop.exit();
    }
    return forOfCapt2.jump(void 0, forOfCapt2._fc, forOfCapt2._fe);
  }
  function _4(forOfCapt2) {
    return forOfCapt2.pure();
  }
  function _5(forOfCapt2, r) {
    return forOfCapt2.pure(r);
  }
  function _6(forOfCapt2, e) {
    return forOfCapt2.raise(e);
  }
  function _7(forOfCapt2) {
    return forOfCapt2.raise(forOfCapt2._err1);
  }
  function _8(forOfCapt2, a) {
    forOfCapt2._fc = _7, forOfCapt2._fe = _6, forOfCapt2._err1 = a;
    return forOfCapt2.jump(void 0, _3);
  }
}
function forOfCapt3() {
  var forOfCapt3 = M.context();
  return forOfCapt3.scope(_1);
  function _1(forOfCapt3) {
    for (forOfCapt3._i of a) {
      (i => {
        var j,
          ctx = {};
        ctx._i = i;
        for (j of b) {
          (j => {
            var _ctx = {};
            _ctx._j = j;
            funs(function iter() {
              var _iter = M.context();
              _iter._f = ctx;
              _iter._f1 = _ctx;
              return _iter.scope(_1);
              function _1(_iter) {
                return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
              }
              function _2(_iter) {
                return _iter.pure();
              }
              function _3(_iter, r) {
                return _iter.pure(r);
              }
            });
          })(j);
        }
      })(forOfCapt3._i);
    }
    return forOfCapt3.pure();
  }
  function _2(forOfCapt3, r) {
    return forOfCapt3.pure(r);
  }
}
function forOfCapt4() {
  var forOfCapt4 = M.context();
  return forOfCapt4.scope(_1);
  function _1(forOfCapt4) {
    forOfCapt4._loop = forOfCapt4.iterator(a);
    return forOfCapt4.jump(void 0, _2, _8);
  }
  function _2(forOfCapt4) {
    var a;
    if (!(forOfCapt4._loop = forOfCapt4._loop.step()).done) {
      forOfCapt4._i = forOfCapt4._loop.value;
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          ctx._loop = ctx.iterator(b);
          return ctx.jump(void 0, _2, _8);
        }
        function _2(ctx) {
          var a;
          if (!(ctx._loop = ctx._loop.step()).done) {
            ctx._j = ctx._loop.value;
            a = (j => {
              var _ctx = M.context();
              _ctx._j = j;
              return _ctx.scope(_1);
              function _1(_ctx) {
                var a;
                a = _ctx._j;
                return _ctx.yld(a, _2);
              }
              function _2(_ctx) {
                funs(function iter() {
                  var _iter = M.context();
                  _iter._f = ctx;
                  _iter._f1 = _ctx;
                  return _iter.scope(_1);
                  function _1(_iter) {
                    return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
                  }
                  function _2(_iter) {
                    return _iter.pure();
                  }
                  function _3(_iter, r) {
                    return _iter.pure(r);
                  }
                });
                return _ctx.pure();
              }
              function _3(_ctx, r) {
                return _ctx.pure(r);
              }
            })(ctx._j);
            return ctx.yldStar(a, _2, _8);
          } else {
            ctx._fc = _4, ctx._fe = _6;
            return ctx.jump(void 0, _3);
          }
        }
        function _3(ctx) {
          if (ctx._loop.exit) {
            ctx._loop.exit();
          }
          return ctx.jump(void 0, ctx._fc, ctx._fe);
        }
        function _4(ctx) {
          return ctx.pure();
        }
        function _5(ctx, r) {
          return ctx.pure(r);
        }
        function _6(ctx, e) {
          return ctx.raise(e);
        }
        function _7(ctx) {
          return ctx.raise(ctx._err1);
        }
        function _8(ctx, a) {
          ctx._fc = _7, ctx._fe = _6, ctx._err1 = a;
          return ctx.jump(void 0, _3);
        }
      })(forOfCapt4._i);
      return forOfCapt4.yldStar(a, _2, _8);
    } else {
      forOfCapt4._fc = _4, forOfCapt4._fe = _6;
      return forOfCapt4.jump(void 0, _3);
    }
  }
  function _3(forOfCapt4) {
    if (forOfCapt4._loop.exit) {
      forOfCapt4._loop.exit();
    }
    return forOfCapt4.jump(void 0, forOfCapt4._fc, forOfCapt4._fe);
  }
  function _4(forOfCapt4) {
    return forOfCapt4.pure();
  }
  function _5(forOfCapt4, r) {
    return forOfCapt4.pure(r);
  }
  function _6(forOfCapt4, e) {
    return forOfCapt4.raise(e);
  }
  function _7(forOfCapt4) {
    return forOfCapt4.raise(forOfCapt4._err1);
  }
  function _8(forOfCapt4, a) {
    forOfCapt4._fc = _7, forOfCapt4._fe = _6, forOfCapt4._err1 = a;
    return forOfCapt4.jump(void 0, _3);
  }
}
function forOfCapt5() {
  var forOfCapt5 = M.context();
  return forOfCapt5.scope(_1);
  function _1(forOfCapt5) {
    forOfCapt5._loop = forOfCapt5.iterator(a);
    return forOfCapt5.jump(void 0, _2, _8);
  }
  function _2(forOfCapt5) {
    var a;
    if (!(forOfCapt5._loop = forOfCapt5._loop.step()).done) {
      forOfCapt5._i = forOfCapt5._loop.value;
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          return ctx.yld(ctx._i, _2);
        }
        function _2(ctx) {
          for (ctx._j of b) {
            (j => {
              var _ctx = {};
              _ctx._j = j;
              funs(function iter() {
                var _iter = M.context();
                _iter._f = ctx;
                _iter._f1 = _ctx;
                return _iter.scope(_1);
                function _1(_iter) {
                  return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
                }
                function _2(_iter) {
                  return _iter.pure();
                }
                function _3(_iter, r) {
                  return _iter.pure(r);
                }
              });
            })(ctx._j);
          }
          return ctx.pure();
        }
        function _3(ctx, r) {
          return ctx.pure(r);
        }
      })(forOfCapt5._i);
      return forOfCapt5.yldStar(a, _2, _8);
    } else {
      forOfCapt5._fc = _4, forOfCapt5._fe = _6;
      return forOfCapt5.jump(void 0, _3);
    }
  }
  function _3(forOfCapt5) {
    if (forOfCapt5._loop.exit) {
      forOfCapt5._loop.exit();
    }
    return forOfCapt5.jump(void 0, forOfCapt5._fc, forOfCapt5._fe);
  }
  function _4(forOfCapt5) {
    return forOfCapt5.pure();
  }
  function _5(forOfCapt5, r) {
    return forOfCapt5.pure(r);
  }
  function _6(forOfCapt5, e) {
    return forOfCapt5.raise(e);
  }
  function _7(forOfCapt5) {
    return forOfCapt5.raise(forOfCapt5._err1);
  }
  function _8(forOfCapt5, a) {
    forOfCapt5._fc = _7, forOfCapt5._fe = _6, forOfCapt5._err1 = a;
    return forOfCapt5.jump(void 0, _3);
  }
}
function forOfCapt6() {
  var forOfCapt6 = M.context();
  return forOfCapt6.scope(_1);
  function _1(forOfCapt6) {
    forOfCapt6._loop = forOfCapt6.iterator(a);
    return forOfCapt6.jump(void 0, _2, _8);
  }
  function _2(forOfCapt6) {
    var a;
    if (!(forOfCapt6._loop = forOfCapt6._loop.step()).done) {
      forOfCapt6._i = forOfCapt6._loop.value;
      a = (i => {
        var ctx = M.context();
        ctx._i = i;
        return ctx.scope(_1);
        function _1(ctx) {
          return ctx.yld(ctx._i, _2);
        }
        function _2(ctx) {
          ctx._loop = ctx.iterator(b);
          return ctx.jump(void 0, _3, _9);
        }
        function _3(ctx) {
          var a;
          if (!(ctx._loop = ctx._loop.step()).done) {
            ctx._j = ctx._loop.value;
            a = (j => {
              var _ctx = M.context();
              _ctx._j = j;
              _ctx._f = ctx;
              return _ctx.scope(_1);
              function _1(_ctx) {
                return _ctx.yld(_ctx._f._i, _2);
              }
              function _2(_ctx) {
                funs(function iter() {
                  var _iter = M.context();
                  _iter._f = ctx;
                  _iter._f1 = _ctx;
                  return _iter.scope(_1);
                  function _1(_iter) {
                    return _iter.yld(`${_iter._f._i} ${_iter._f1._j++}`, _2);
                  }
                  function _2(_iter) {
                    return _iter.pure();
                  }
                  function _3(_iter, r) {
                    return _iter.pure(r);
                  }
                });
                return _ctx.pure();
              }
              function _3(_ctx, r) {
                return _ctx.pure(r);
              }
            })(ctx._j);
            return ctx.yldStar(a, _3, _9);
          } else {
            ctx._fc = _5, ctx._fe = _7;
            return ctx.jump(void 0, _4);
          }
        }
        function _4(ctx) {
          if (ctx._loop.exit) {
            ctx._loop.exit();
          }
          return ctx.jump(void 0, ctx._fc, ctx._fe);
        }
        function _5(ctx) {
          return ctx.pure();
        }
        function _6(ctx, r) {
          return ctx.pure(r);
        }
        function _7(ctx, e) {
          return ctx.raise(e);
        }
        function _8(ctx) {
          return ctx.raise(ctx._err1);
        }
        function _9(ctx, a) {
          ctx._fc = _8, ctx._fe = _7, ctx._err1 = a;
          return ctx.jump(void 0, _4);
        }
      })(forOfCapt6._i);
      return forOfCapt6.yldStar(a, _2, _8);
    } else {
      forOfCapt6._fc = _4, forOfCapt6._fe = _6;
      return forOfCapt6.jump(void 0, _3);
    }
  }
  function _3(forOfCapt6) {
    if (forOfCapt6._loop.exit) {
      forOfCapt6._loop.exit();
    }
    return forOfCapt6.jump(void 0, forOfCapt6._fc, forOfCapt6._fe);
  }
  function _4(forOfCapt6) {
    return forOfCapt6.pure();
  }
  function _5(forOfCapt6, r) {
    return forOfCapt6.pure(r);
  }
  function _6(forOfCapt6, e) {
    return forOfCapt6.raise(e);
  }
  function _7(forOfCapt6) {
    return forOfCapt6.raise(forOfCapt6._err1);
  }
  function _8(forOfCapt6, a) {
    forOfCapt6._fc = _7, forOfCapt6._fe = _6, forOfCapt6._err1 = a;
    return forOfCapt6.jump(void 0, _3);
  }
}
function forIn() {
  var forIn = M.context();
  return forIn.scope(_1);
  function _1(forIn) {
    forIn._loop = forIn.forInIterator({
      a: 1
    });
    return forIn.jump(void 0, _2);
  }
  function _2(forIn) {
    if (!(forIn._loop = forIn._loop.step()).done) {
      forIn._i = forIn._loop.value;
      return forIn.yld(forIn._i, _2);
    } else {
      return forIn.pure();
    }
  }
  function _3(forIn, r) {
    return forIn.pure(r);
  }
}
function while1() {
  var while1 = M.context();
  return while1.scope(_1);
  function _1(while1) {
    while1._i = 0;
    return while1.jump(void 0, _2);
  }
  function _2(while1) {
    var a;
    a = while1._i++;
    return while1.yld(a, _3);
  }
  function _3(while1, a) {
    var b;
    if (a < 3) {
      b = while1._i++;
      return while1.yld(b, _2);
    } else {
      while1._i = 0;
      return while1.pure();
    }
  }
  function _4(while1, r) {
    return while1.pure(r);
  }
}
function catchBlock2() {
  var catchBlock2 = M.context();
  return catchBlock2.scope(_1);
  function _1(catchBlock2) {
    catchBlock2._i = 0;
    return catchBlock2.jump(void 0, _2, _9);
  }
  function _2(catchBlock2) {
    return catchBlock2.yld(catchBlock2._i === 3, _3, _9);
  }
  function _3(catchBlock2, a) {
    if (a) {
      throw new Error(`AAAAAAAAA${catchBlock2._i++}`);
    }
    return catchBlock2.yld(`a${catchBlock2._i}`, _7);
  }
  function _4(catchBlock2) {
    catchBlock2._e = catchBlock2._ex;
    return catchBlock2.yld(`e${catchBlock2._i}`, _5);
  }
  function _5(catchBlock2) {
    return catchBlock2.yld(catchBlock2._e, _6);
  }
  function _6(catchBlock2) {
    return catchBlock2.pure(catchBlock2._i);
  }
  function _7(catchBlock2) {
    catchBlock2._i++;
    return catchBlock2.jump(void 0, _2, _9);
  }
  function _8(catchBlock2, r) {
    return catchBlock2.pure(r);
  }
  function _9(catchBlock2, a) {
    catchBlock2._ex = a;
    return catchBlock2.jump(void 0, _4);
  }
}
function closure2() {
  var closure2 = M.context();
  return closure2.scope(_1);
  function _1(closure2) {
    var k;
    k = 0;
    closure2._j = 1;
    closure2._m = 0;
    return closure2.yld(k++ + closure2._j + closure2._m++, _2);
  }
  function _2(closure2) {
    var a;
    a = closure2._m++;
    return closure2.yld(a, _3);
  }
  function _3(closure2) {
    return closure2.pure(function sub(k) {
      var _sub = M.context();
      _sub._k = k;
      _sub._closure2 = closure2;
      return _sub.scope(_1);
      function _1(_sub) {
        var a;
        a = _sub._k++;
        return _sub.yld(a, _2);
      }
      function _2(_sub, a) {
        a, _sub._closure2._j;
        return _sub.pure();
      }
      function _3(_sub, r) {
        return _sub.pure(r);
      }
    });
  }
  function _4(closure2, r) {
    return closure2.pure(r);
  }
}
function switches() {
  var switches = M.context();
  return switches.scope(_1);
  function _1(switches) {
    if (a) {
      return switches.yld(1, _2);
    } else {
      return switches.jump(void 0, _2);
    }
  }
  function _2(switches) {
    switch (a) {
      case 1:
        return switches.yld(2, _3);
      case 2:
        {
          console.log(3);
        }
      default:
        return switches.jump(void 0, _4);
    }
  }
  function _3(switches) {
    return switches.yld(3, _4);
  }
  function _4(switches) {
    console.log(4);
    f1: for (switches._i = 0;; switches._i++) {
      switch (switches._i) {
        case 3:
          {
            break f1;
          }
      }
    }
    switches._i1 = 0;
    return switches.jump(void 0, _5);
  }
  function _5(switches) {
    switch (switches._i1) {
      case 3:
        l1: for (switches._i2 of gen()) {
          switch (switches._i2) {
            case 3:
              {
                break l1;
              }
          }
        }
        switches._loop = switches.iterator(gen());
        return switches.jump(void 0, _7, _49);
      default:
        return switches.yld(`f2-${switches._i1}`, _6);
    }
  }
  function _6(switches) {
    switches._i1++;
    return switches.jump(void 0, _5);
  }
  function _7(switches) {
    if (!(switches._loop = switches._loop.step()).done) {
      switches._i3 = switches._loop.value;
      switch (switches._i3) {
        case 3:
          return switches.yld(`l2-${switches._i3}`, _8, _49);
        default:
          return switches.jump(void 0, _7, _49);
      }
    } else {
      switches._fc = _10, switches._fe = _40;
      return switches.jump(void 0, _9);
    }
  }
  function _8(switches) {
    switches._fc = _10, switches._fe = _40;
    return switches.jump(void 0, _9);
  }
  function _9(switches) {
    if (switches._loop.exit) {
      switches._loop.exit();
    }
    return switches.jump(void 0, switches._fc, switches._fe);
  }
  function _10(switches) {
    switches._loop1 = switches.iterator(gen());
    return switches.jump(void 0, _11, _50);
  }
  function _11(switches) {
    if (!(switches._loop1 = switches._loop1.step()).done) {
      switches._i4 = switches._loop1.value;
      switch (switches._i4) {
        case 3:
          switches._fc1 = _13, switches._fe1 = _40;
          return switches.jump(void 0, _12);
        default:
          return switches.yld(`l3-${switches._i4}`, _11, _50);
      }
    } else {
      switches._fc1 = _13, switches._fe1 = _40;
      return switches.jump(void 0, _12);
    }
  }
  function _12(switches) {
    if (switches._loop1.exit) {
      switches._loop1.exit();
    }
    return switches.jump(void 0, switches._fc1, switches._fe1);
  }
  function _13(switches) {
    switches._loop2 = switches.iterator(gen());
    return switches.jump(void 0, _14, _51);
  }
  function _14(switches) {
    if (!(switches._loop2 = switches._loop2.step()).done) {
      switches._i5 = switches._loop2.value;
      switch (switches._i5) {
        case 3:
          switches._fc2 = _16, switches._fe2 = _40;
          return switches.jump(void 0, _15);
        default:
          return switches.yld(`l4-${switches._i5}`, _14, _51);
      }
    } else {
      switches._fc2 = _16, switches._fe2 = _40;
      return switches.jump(void 0, _15);
    }
  }
  function _15(switches) {
    if (switches._loop2.exit) {
      switches._loop2.exit();
    }
    return switches.jump(void 0, switches._fc2, switches._fe2);
  }
  function _16(switches) {
    switches._loop3 = switches.iterator(gen());
    return switches.jump(void 0, _17, _52);
  }
  function _17(switches) {
    if (!(switches._loop3 = switches._loop3.step()).done) {
      switches._i6 = switches._loop3.value;
      return switches.yld(`l5-${switches._i6}`, _18, _52);
    } else {
      switches._fc3 = _20, switches._fe3 = _40;
      return switches.jump(void 0, _19);
    }
  }
  function _18(switches) {
    switch (switches._i6) {
      case 3:
        switches._fc3 = _20, switches._fe3 = _40;
        return switches.jump(void 0, _19);
      default:
        return switches.jump(void 0, _17, _52);
    }
  }
  function _19(switches) {
    if (switches._loop3.exit) {
      switches._loop3.exit();
    }
    return switches.jump(void 0, switches._fc3, switches._fe3);
  }
  function _20(switches) {
    switches._loop4 = switches.iterator(gen());
    return switches.jump(void 0, _21, _53);
  }
  function _21(switches) {
    if (!(switches._loop4 = switches._loop4.step()).done) {
      switches._i7 = switches._loop4.value;
      switch (switches._i7) {
        case 3:
          return switches.yld(`l6-1-${switches._i7}`, _22, _53);
        default:
          return switches.yld(`l6-2-${switches._i7}`, _21, _53);
      }
    } else {
      switches._fc4 = _24, switches._fe4 = _40;
      return switches.jump(void 0, _23);
    }
  }
  function _22(switches) {
    switches._fc4 = _24, switches._fe4 = _40;
    return switches.jump(void 0, _23);
  }
  function _23(switches) {
    if (switches._loop4.exit) {
      switches._loop4.exit();
    }
    return switches.jump(void 0, switches._fc4, switches._fe4);
  }
  function _24(switches) {
    switches._loop5 = switches.iterator(gen());
    return switches.jump(void 0, _25, _54);
  }
  function _25(switches) {
    if (!(switches._loop5 = switches._loop5.step()).done) {
      switches._i8 = switches._loop5.value;
      switch (switches._i8) {
        case 0:
          return switches.jump(void 0, _25, _54);
        case 1:
        case 2:
          return switches.yld(`l7-1-${switches._i8}`, _25, _54);
        case 3:
          return switches.jump(void 0, _25, _54);
        case 4:
          return switches.yld(`l7-2-${switches._i8}`, _25, _54);
        case 5:
          return switches.yld(`l7-3-${switches._i8}`, _27, _54);
        case 6:
          return switches.jump(void 0, _25, _54);
        case 7:
          return switches.yld(`l7-4-${switches._i8}`, _26, _54);
        default:
          return switches.yld(`l7-5-${switches._i8}`, _27, _54);
      }
    } else {
      switches._fc5 = _29, switches._fe5 = _40;
      return switches.jump(void 0, _28);
    }
  }
  function _26(switches) {
    switches._fc5 = _29, switches._fe5 = _40;
    return switches.jump(void 0, _28);
  }
  function _27(switches) {
    return switches.yld(`l7-6-${switches._i8}`, _25, _54);
  }
  function _28(switches) {
    if (switches._loop5.exit) {
      switches._loop5.exit();
    }
    return switches.jump(void 0, switches._fc5, switches._fe5);
  }
  function _29(switches) {
    switches._loop6 = switches.iterator(gen());
    return switches.jump(void 0, _30, _55);
  }
  function _30(switches) {
    if (!(switches._loop6 = switches._loop6.step()).done) {
      switches._i9 = switches._loop6.value;
      switches._loop7 = switches.iterator(gen());
      return switches.jump(void 0, _31, _56);
    } else {
      switches._fc7 = _38, switches._fe7 = _40;
      return switches.jump(void 0, _37);
    }
  }
  function _31(switches) {
    if (!(switches._loop7 = switches._loop7.step()).done) {
      switches._j = switches._loop7.value;
      switch (switches._i9) {
        case 0:
        case 1:
        case 2:
          return switches.yld(`s1:${switches._i9},${switches._j}`, _32, _56);
        case 3:
          switch (switches._j) {
            case 2:
            case 3:
              return switches.yld(`s2:${switches._i9},${switches._j}`, _31, _56);
            case 5:
              return switches.yld(`s3:${switches._i9},${switches._j}`, _31, _56);
            case 7:
              return switches.yld(`s4:${switches._i9},${switches._j}`, _31, _56);
            case 8:
              return switches.yld(`s5:${switches._i9},${switches._j}`, _31, _56);
            case 9:
              return switches.yld(`s6:${switches._i9},${switches._j}`, _33, _56);
            default:
              return switches.jump(void 0, _31, _56);
          }
        case 4:
          switch (switches._j) {
            case 2:
            case 3:
              return switches.yld(`s7:${switches._i9},${switches._j}`, _35, _56);
            case 5:
              return switches.yld(`s8:${switches._i9},${switches._j}`, _31, _56);
            case 6:
              switches._fc6 = _30, switches._fe6 = _55;
              return switches.jump(void 0, _36, _57);
            case 7:
              return switches.yld(`s9:${switches._i9},${switches._j}`, _35, _56);
            case 8:
              return switches.yld(`s10:${switches._i9},${switches._j}`, _31, _56);
            case 9:
              return switches.yld(`s11:${switches._i9},${switches._j}`, _34, _56);
            default:
              return switches.yld(`s12:${switches._i9},${switches._j}`, _35, _56);
          }
        case 5:
          switch (switches._j) {
            case 2:
            case 3:
              switches._fc6 = _37, switches._fe6 = _40, switches._fc7 = _38, switches._fe7 = _40;
              return switches.jump(void 0, _36, _57);
            default:
              return switches.jump(void 0, _31, _56);
          }
        default:
          return switches.jump(void 0, _31, _56);
      }
    } else {
      switches._fc6 = _30, switches._fe6 = _55;
      return switches.jump(void 0, _36, _57);
    }
  }
  function _32(switches) {
    if (switches._j > 3) {
      switches._fc6 = _30, switches._fe6 = _55;
      return switches.jump(void 0, _36, _57);
    } else {
      return switches.jump(void 0, _31, _56);
    }
  }
  function _33(switches) {
    switches._fc6 = _30, switches._fe6 = _55;
    return switches.jump(void 0, _36, _57);
  }
  function _34(switches) {
    switches._fc6 = _37, switches._fe6 = _40, switches._fc7 = _38, switches._fe7 = _40;
    return switches.jump(void 0, _36, _57);
  }
  function _35(switches) {
    return switches.yld(`s13:${switches._i9},${switches._j}`, _31, _56);
  }
  function _36(switches) {
    if (switches._loop7.exit) {
      switches._loop7.exit();
    }
    switches._err7 = switches._err8;
    return switches.jump(void 0, switches._fc6, switches._fe6);
  }
  function _37(switches) {
    if (switches._loop6.exit) {
      switches._loop6.exit();
    }
    return switches.jump(void 0, switches._fc7, switches._fe7);
  }
  function _38(switches) {
    return switches.pure();
  }
  function _39(switches, r) {
    return switches.pure(r);
  }
  function _40(switches, e) {
    return switches.raise(e);
  }
  function _41(switches) {
    return switches.raise(switches._err1);
  }
  function _42(switches) {
    return switches.raise(switches._err2);
  }
  function _43(switches) {
    return switches.raise(switches._err3);
  }
  function _44(switches) {
    return switches.raise(switches._err4);
  }
  function _45(switches) {
    return switches.raise(switches._err5);
  }
  function _46(switches) {
    return switches.raise(switches._err6);
  }
  function _47(switches) {
    return switches.raise(switches._err7);
  }
  function _48(switches) {
    return switches.raise(switches._err8);
  }
  function _49(switches, a) {
    switches._fc = _41, switches._fe = _40, switches._err1 = a;
    return switches.jump(void 0, _9);
  }
  function _50(switches, a) {
    switches._fc1 = _42, switches._fe1 = _40, switches._err2 = a;
    return switches.jump(void 0, _12);
  }
  function _51(switches, a) {
    switches._fc2 = _43, switches._fe2 = _40, switches._err3 = a;
    return switches.jump(void 0, _15);
  }
  function _52(switches, a) {
    switches._fc3 = _44, switches._fe3 = _40, switches._err4 = a;
    return switches.jump(void 0, _19);
  }
  function _53(switches, a) {
    switches._fc4 = _45, switches._fe4 = _40, switches._err5 = a;
    return switches.jump(void 0, _23);
  }
  function _54(switches, a) {
    switches._fc5 = _46, switches._fe5 = _40, switches._err6 = a;
    return switches.jump(void 0, _28);
  }
  function _55(switches, a) {
    switches._fc7 = _47, switches._fe7 = _40, switches._err7 = a;
    return switches.jump(void 0, _37);
  }
  function _56(switches, a) {
    switches._fc6 = _37, switches._fe6 = _40, switches._fc7 = _48, switches._fe7 = _40, switches._err8 = a;
    return switches.jump(void 0, _36, _57);
  }
  function _57(switches, a) {
    switches._fc7 = _47, switches._fe7 = _40, switches._err7 = a;
    return switches.jump(void 0, _37);
  }
}