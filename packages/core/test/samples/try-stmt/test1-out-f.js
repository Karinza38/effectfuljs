import * as M from "@effectful/core";
function a01() {
  var e, ex;
  console.log("in");
  return M.jump(void 0, _1, _5);
  function _1() {
    console.log("inner");
    return M.chain(eff("inner"), _3);
  }
  function _2() {
    e = ex;
    console.log("exception", e);
    return M.chain(eff("exception", e), _3);
  }
  function _3() {
    console.log("out");
    return M.chain(eff("out"), _4);
  }
  function _4() {}
  function _5(a) {
    ex = a;
    return M.jump(void 0, _2);
  }
}
function a02() {
  var e, ex;
  console.log("in");
  return M.jump(void 0, _1, _7);
  function _1() {
    return M.chain(eff("inner"), _2, _7);
  }
  function _2() {
    console.log("inner");
    return M.jump(void 0, _5);
  }
  function _3() {
    e = ex;
    return M.chain(eff("exception", e), _4);
  }
  function _4() {
    console.log("exception", e);
    return M.jump(void 0, _5);
  }
  function _5() {
    return M.chain(eff("out"), _6);
  }
  function _6() {
    console.log("out");
  }
  function _7(a) {
    ex = a;
    return M.jump(void 0, _3);
  }
}
function a03() {
  var i, j, ex, e, _ex, a;
  i = void 0;
  j = void 0;
  ex = void 0;
  console.log("in", i++, j += 2);
  a = i++;
  return M.chain(eff(a, j), _1, _7);
  function _1() {
    var a;
    a = i++;
    return M.chain(eff("inner", a, j), _2, _7);
  }
  function _2() {
    console.log("inner");
    return M.jump(void 0, _5);
  }
  function _3() {
    var a;
    e = _ex;
    ex = e;
    a = j++;
    return M.chain(eff("exception", e, a), _4);
  }
  function _4() {
    console.log("exception", e);
    return M.jump(void 0, _5);
  }
  function _5() {
    return M.chain(eff("out", ex, i), _6);
  }
  function _6() {
    console.log("out");
  }
  function _7(a) {
    _ex = a;
    return M.jump(void 0, _3);
  }
}
function a04() {
  var i, j, a, b, fc, fe, _fc, _fe, fc1, fe1, err, _err, err1, err2;
  i = 0;
  a = i++;
  b = j = 0;
  return M.chain(eff(1, a, b), _1);
  function _1() {
    var a, b;
    a = i++;
    b = j = j + 1;
    return M.chain(eff(2, a, b), _2);
  }
  function _2() {
    return M.chain(eff(3, i, j), _3, _26);
  }
  function _3() {
    return M.chain(eff(4), _4, _27);
  }
  function _4() {
    return M.chain(eff(5, i), _5, _27);
  }
  function _5() {
    if (something) {
      _fc = _15, _fe = _26;
      return M.jump(void 0, _7, _28);
    } else {
      if (something2) {
        _fc = _16, _fe = _20, fc1 = _19, fe1 = _20;
        return M.jump(void 0, _7, _28);
      } else {
        if (something3) {
          _fc = _16, _fe = _20, fc1 = _21, fe1 = _20;
          return M.jump(void 0, _7, _28);
        } else {
          if (something4) {
            return M.chain(eff(6), _6, _27);
          } else {
            return M.jump(void 0, _6, _27);
          }
        }
      }
    }
  }
  function _6() {
    _fc = _16, _fe = _20, fc1 = _21, fe1 = _20;
    return M.jump(void 0, _7, _28);
  }
  function _7() {
    return M.chain(eff(7), _8, _29);
  }
  function _8() {
    if (something5) {
      fc = _13, fe = _28;
      return M.chain(eff(8, j), _9, _30);
    } else {
      fc = _16, fe = _20, fc1 = _19, fe1 = _20;
      return M.jump(void 0, _9, _30);
    }
  }
  function _9() {
    console.log("i");
    err1 = err2;
    return M.jump(void 0, _10, _31);
  }
  function _10() {
    var a;
    a = j = j + 1;
    return M.chain(eff(9, a), _11, _31);
  }
  function _11() {
    return M.chain(eff(10), _12, _31);
  }
  function _12() {
    console.log(j);
    err = err1;
    return M.jump(void 0, fc, fe);
  }
  function _13() {
    return M.chain(eff(11), _14, _28);
  }
  function _14() {
    console.log(11);
    err = _err;
    return M.jump(void 0, _fc, _fe);
  }
  function _15() {
    fc1 = _18, fe1 = _20;
    return M.chain(eff(12), _16);
  }
  function _16() {
    var a;
    a = i = i + 1;
    return M.chain(eff(13, a), _17);
  }
  function _17() {
    return M.chain(eff(14), fc1, fe1);
  }
  function _18() {
    return M.chain(eff(15, i), _19);
  }
  function _19() {
    return M.chain(eff(16), _21);
  }
  function _20(e) {
    return M.raise(e);
  }
  function _21() {}
  function _22() {
    return M.raise(err);
  }
  function _23() {
    return M.raise(_err);
  }
  function _24() {
    return M.raise(err1);
  }
  function _25() {
    return M.raise(err2);
  }
  function _26(a) {
    fc1 = _22, fe1 = _20, err = a;
    return M.jump(void 0, _16);
  }
  function _27(a) {
    _fc = _16, _fe = _20, fc1 = _23, fe1 = _20, _err = a;
    return M.jump(void 0, _7, _28);
  }
  function _28(a) {
    fc1 = _22, fe1 = _20, err = a;
    return M.jump(void 0, _16);
  }
  function _29(a) {
    fc = _16, fe = _20, fc1 = _25, fe1 = _20, err2 = a;
    return M.jump(void 0, _9, _30);
  }
  function _30(a) {
    fc = _16, fe = _20, fc1 = _24, fe1 = _20, err1 = a;
    return M.jump(void 0, _10, _31);
  }
  function _31(a) {
    fc1 = _22, fe1 = _20, err = a;
    return M.jump(void 0, _16);
  }
}
function a05() {
  var fc, fe, err;
  return M.chain(eff(1), _1, _9);
  function _1() {
    return M.chain(eff(2), _2, _9);
  }
  function _2() {
    fc = _5, fe = _6;
    return M.chain(eff(3), _3);
  }
  function _3() {
    return M.chain(eff(4), _4);
  }
  function _4() {
    return M.chain(eff(5), fc, fe);
  }
  function _5() {
    return M.chain(eff(6), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(err);
  }
  function _9(a) {
    fc = _8, fe = _6, err = a;
    return M.jump(void 0, _3);
  }
}
function a06() {
  var fc, fe, err;
  return M.chain(eff(1), _1, _8);
  function _1() {
    return M.chain(eff(2), _2, _8);
  }
  function _2() {
    fc = _5, fe = _6;
    return M.chain(eff(3), _3);
  }
  function _3() {
    return M.chain(eff(4), _4);
  }
  function _4() {
    return M.chain(eff(5), fc, fe);
  }
  function _5() {
    console.log(6);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {
    return M.raise(err);
  }
  function _8(a) {
    fc = _7, fe = _6, err = a;
    return M.jump(void 0, _3);
  }
}
function a07() {
  var fc, fe, err;
  return M.chain(eff(1), _1, _10);
  function _1() {
    return M.chain(eff(2), _2, _10);
  }
  function _2() {
    return M.chain(eff(3), _3, _10);
  }
  function _3(a) {
    if (a) {
      fc = _7, fe = _8;
      return M.jump(void 0, _4);
    } else {
      fc = _6, fe = _8;
      return M.chain(eff(4), _4);
    }
  }
  function _4() {
    return M.chain(eff(5), _5);
  }
  function _5() {
    return M.chain(eff(6), fc, fe);
  }
  function _6() {
    return M.chain(eff(7), _7);
  }
  function _7() {
    console.log(8);
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {
    return M.raise(err);
  }
  function _10(a) {
    fc = _9, fe = _8, err = a;
    return M.jump(void 0, _4);
  }
}
function a08() {
  var fc, fe, r, err;
  return M.chain(eff(1), _1, _10);
  function _1() {
    return M.chain(eff(2), _2, _10);
  }
  function _2() {
    return M.chain(eff(3), _3, _10);
  }
  function _3(a) {
    if (a) {
      fc = _7, fe = _8;
      return M.jump(void 0, _4);
    } else {
      fc = _6, fe = _8;
      return M.chain(eff(4), _4);
    }
  }
  function _4() {
    return M.chain(eff(5), _5);
  }
  function _5() {
    return M.chain(eff(6), fc, fe);
  }
  function _6() {
    return M.chain(eff(7), _7);
  }
  function _7() {
    if (a) {
      return 10;
    } else {
      console.log(8);
      return r;
    }
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {
    return M.raise(err);
  }
  function _10(a) {
    fc = _9, fe = _8, err = a;
    return M.jump(void 0, _4);
  }
}
function a09() {
  var _a, a1, fc, fe, _fc, _fe, r, err, _err;
  return M.chain(eff(1), _1, _20);
  function _1() {
    return M.chain(eff(2), _2, _20);
  }
  function _2() {
    return M.chain(eff(3), _3, _20);
  }
  function _3(a) {
    _a = a;
    if (_a === 1) {
      _fc = _14, _fe = _16;
      return M.jump(void 0, _11);
    } else {
      if (_a === 2) {
        return M.chain(eff(4), _4, _20);
      } else {
        return M.jump(void 0, _5, _21);
      }
    }
  }
  function _4() {
    _fc = _17, _fe = _16, r = 10;
    return M.jump(void 0, _11);
  }
  function _5() {
    return M.chain(eff(5), _6, _21);
  }
  function _6() {
    return M.chain(eff(6), _7, _21);
  }
  function _7(a) {
    a1 = a;
    if (a1 === 1) {
      fc = _11, fe = _16, _fc = _14, _fe = _16;
      return M.jump(void 0, _8, _22);
    } else {
      if (a1 === 2) {
        fc = _11, fe = _16, _fc = _17, _fe = _16, r = 10;
        return M.jump(void 0, _8, _22);
      } else {
        fc = _10, fe = _20;
        return M.chain(eff(7), _8, _22);
      }
    }
  }
  function _8() {
    return M.chain(eff(8), _9, _22);
  }
  function _9() {
    err = _err;
    return M.chain(eff(9), fc, fe);
  }
  function _10() {
    _fc = _13, _fe = _16;
    return M.chain(eff(10), _11);
  }
  function _11() {
    return M.chain(eff(11), _12);
  }
  function _12() {
    return M.chain(eff(12), _fc, _fe);
  }
  function _13() {
    return M.chain(eff(13), _14);
  }
  function _14() {
    return M.chain(eff(14), _15);
  }
  function _15(a) {
    return a;
  }
  function _16(e) {
    return M.raise(e);
  }
  function _17() {
    return r;
  }
  function _18() {
    return M.raise(err);
  }
  function _19() {
    return M.raise(_err);
  }
  function _20(a) {
    _fc = _18, _fe = _16, err = a;
    return M.jump(void 0, _11);
  }
  function _21(a) {
    fc = _11, fe = _16, _fc = _19, _fe = _16, _err = a;
    return M.jump(void 0, _8, _22);
  }
  function _22(a) {
    _fc = _18, _fe = _16, err = a;
    return M.jump(void 0, _11);
  }
}
function a10() {
  var a, fc, fe, r, err, _err;
  return M.jump(void 0, _1, _15);
  function _1() {
    return M.chain(eff(2), _2, _16);
  }
  function _2() {
    return M.chain(eff(5), _3, _16);
  }
  function _3() {
    return M.chain(eff(6), _4, _16);
  }
  function _4(b) {
    a = b;
    if (a) {
      return M.chain(eff(3), _5, _16);
    } else {
      fc = _10, fe = _11;
      return M.jump(void 0, _6, _17);
    }
  }
  function _5(a) {
    fc = _12, fe = _11, r = a;
    return M.jump(void 0, _6, _17);
  }
  function _6() {
    return M.chain(eff(8), _7, _17);
  }
  function _7() {
    err = _err;
    return M.chain(eff(9), _8);
  }
  function _8() {
    return M.chain(eff(11), _9);
  }
  function _9() {
    return M.chain(eff(12), fc, fe);
  }
  function _10() {
    return M.chain(eff(13), _12);
  }
  function _11(e) {
    return M.raise(e);
  }
  function _12() {
    return r;
  }
  function _13() {
    return M.raise(err);
  }
  function _14() {
    return M.raise(_err);
  }
  function _15(a) {
    fc = _13, fe = _11, err = a;
    return M.jump(void 0, _8);
  }
  function _16(a) {
    fc = _14, fe = _11, _err = a;
    return M.jump(void 0, _6, _17);
  }
  function _17(a) {
    fc = _13, fe = _11, err = a;
    return M.jump(void 0, _8);
  }
}
function a11() {
  var fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _1, _11);
  function _1() {
    fc = _3, fe = _10;
    return M.chain(eff(1), _2, _12);
  }
  function _2() {
    err = _err;
    return M.chain(eff(2), fc, fe);
  }
  function _3() {
    _fc = _5, _fe = _6;
    return M.chain(eff("a"), _4);
  }
  function _4() {
    return M.chain(eff(3), _fc, _fe);
  }
  function _5() {
    return M.chain(eff(4), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(err);
  }
  function _9() {
    return M.raise(_err);
  }
  function _10(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
  function _11(a) {
    fc = _4, fe = _6, _fc = _9, _fe = _6, _err = a;
    return M.jump(void 0, _2, _12);
  }
  function _12(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
}
function a12() {
  var fc, fe, _fc, _fe, r, err, _err;
  return M.jump(void 0, _1, _12);
  function _1() {
    return M.chain(eff(1), _2, _12);
  }
  function _2(a) {
    if (a) {
      fc = _5, fe = _7, _fc = _8, _fe = _7, r = 10;
      return M.jump(void 0, _3, _13);
    } else {
      fc = _4, fe = _11;
      return M.jump(void 0, _3, _13);
    }
  }
  function _3() {
    err = _err;
    return M.chain(eff(2), fc, fe);
  }
  function _4() {
    _fc = _6, _fe = _7;
    return M.chain(eff("A"), _5);
  }
  function _5() {
    return M.chain(eff(3), _fc, _fe);
  }
  function _6() {
    return M.chain(eff(4), _8);
  }
  function _7(e) {
    return M.raise(e);
  }
  function _8() {
    return r;
  }
  function _9() {
    return M.raise(err);
  }
  function _10() {
    return M.raise(_err);
  }
  function _11(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
  function _12(a) {
    fc = _5, fe = _7, _fc = _10, _fe = _7, _err = a;
    return M.jump(void 0, _3, _13);
  }
  function _13(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
}
function a13() {
  var fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _1, _14);
  function _1() {
    return M.chain(eff(1), _2, _14);
  }
  function _2(a) {
    if (a) {
      fc = _6, fe = _9, _fc = _8, _fe = _9;
      return M.jump(void 0, _3, _15);
    } else {
      fc = _5, fe = _13;
      return M.jump(void 0, _3, _15);
    }
  }
  function _3() {
    return M.chain(eff(2), _4, _15);
  }
  function _4() {
    err = _err;
    return M.chain(eff("2"), fc, fe);
  }
  function _5() {
    _fc = _7, _fe = _9;
    return M.chain(eff("A"), _6);
  }
  function _6() {
    return M.chain(eff(3), _fc, _fe);
  }
  function _7() {
    return M.chain(eff(4), _10);
  }
  function _8() {}
  function _9(e) {
    return M.raise(e);
  }
  function _10() {}
  function _11() {
    return M.raise(err);
  }
  function _12() {
    return M.raise(_err);
  }
  function _13(a) {
    _fc = _11, _fe = _9, err = a;
    return M.jump(void 0, _6);
  }
  function _14(a) {
    fc = _6, fe = _9, _fc = _12, _fe = _9, _err = a;
    return M.jump(void 0, _3, _15);
  }
  function _15(a) {
    _fc = _11, _fe = _9, err = a;
    return M.jump(void 0, _6);
  }
}
function a14() {
  var a, fc, fe, _fc, _fe, r, err, _err;
  return M.jump(void 0, _2, _16);
  function _1() {
    return M.jump(void 0, _2, _16);
  }
  function _2() {
    return M.chain(eff(1), _3, _16);
  }
  function _3(b) {
    a = b;
    if (a === 1) {
      fc = _8, fe = _11, _fc = _10, _fe = _11;
      return M.jump(void 0, _5, _17);
    } else {
      if (a === 2) {
        fc = _1, fe = _15;
        return M.jump(void 0, _5, _17);
      } else {
        if (a === 3) {
          fc = _8, fe = _11, _fc = _12, _fe = _11, r = 1;
          return M.jump(void 0, _5, _17);
        } else {
          if (a === 4) {
            fc = _8, fe = _11, _fc = _12, _fe = _11;
            return M.jump(void 0, _5, _17);
          } else {
            if (a === 5) {
              return M.chain(eff("REZ"), _4, _16);
            } else {
              fc = _7, fe = _15;
              return M.chain(eff(2), _5, _17);
            }
          }
        }
      }
    }
  }
  function _4(a) {
    fc = _8, fe = _11, _fc = _12, _fe = _11, r = a;
    return M.jump(void 0, _5, _17);
  }
  function _5() {
    return M.chain(eff(3), _6, _17);
  }
  function _6() {
    err = _err;
    return M.chain(eff(4), fc, fe);
  }
  function _7() {
    return M.chain(eff(5), _2, _16);
  }
  function _8() {
    return M.chain(eff(6), _9);
  }
  function _9() {
    return M.chain(eff(7), _fc, _fe);
  }
  function _10() {
    return M.chain(eff(8), _12);
  }
  function _11(e) {
    return M.raise(e);
  }
  function _12() {
    return r;
  }
  function _13() {
    return M.raise(err);
  }
  function _14() {
    return M.raise(_err);
  }
  function _15(a) {
    _fc = _13, _fe = _11, err = a;
    return M.jump(void 0, _8);
  }
  function _16(a) {
    fc = _8, fe = _11, _fc = _14, _fe = _11, _err = a;
    return M.jump(void 0, _5, _17);
  }
  function _17(a) {
    _fc = _13, _fe = _11, err = a;
    return M.jump(void 0, _8);
  }
}
function a15() {
  var _a;
  return M.jump(void 0, _1);
  function _1() {
    console.log("a");
    return M.jump(void 0, _2);
  }
  function _2() {
    return M.chain(eff(1), _3);
  }
  function _3(a) {
    _a = a;
    if (_a === 1) {
      if (a) {
        return M.chain(eff(8), _4);
      } else {
        return M.jump(void 0, _1);
      }
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _4() {}
}
function a15a() {
  if (a === 1) {} else {
    return M.chain(eff(2), _1);
  }
  function _1() {}
}
function a16() {
  var _a;
  return M.chain(eff(0), _1);
  function _1() {
    console.log("a");
    return M.jump(void 0, _2);
  }
  function _2() {
    return M.chain(eff(1), _3);
  }
  function _3(a) {
    _a = a;
    if (_a === 1) {
      if (a) {
        return M.chain(eff(8), _4);
      } else {
        return M.jump(void 0, _1);
      }
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _4() {}
}
function a17() {
  var a;
  return M.jump(void 0, _1);
  function _1() {
    return M.chain(eff(1), _2);
  }
  function _2(c) {
    a = c;
    if (a === 1) {
      if (b) {
        return M.chain(eff(8), _3);
      } else {
        return M.jump(void 0, _1);
      }
    } else {
      return M.chain(eff(2), _1);
    }
  }
  function _3() {}
}
function a18() {
  var a, fc, fe, err;
  return M.jump(void 0, _2, _10);
  function _1() {
    return M.jump(void 0, _2, _10);
  }
  function _2() {
    return M.chain(eff(1), _3, _10);
  }
  function _3(b) {
    a = b;
    if (a === 1) {
      fc = _6, fe = _7;
      return M.jump(void 0, _4);
    } else {
      fc = _1, fe = _7;
      return M.chain(eff(2), _4);
    }
  }
  function _4() {
    return M.chain(effF(3), _5);
  }
  function _5() {
    return M.chain(effF(4), fc, fe);
  }
  function _6() {
    if (b) {
      return M.chain(eff(8), _8);
    } else {
      return M.jump(void 0, _2, _10);
    }
  }
  function _7(e) {
    return M.raise(e);
  }
  function _8() {}
  function _9() {
    return M.raise(err);
  }
  function _10(a) {
    fc = _9, fe = _7, err = a;
    return M.jump(void 0, _4);
  }
}
function a19() {
  var fc, fe, err;
  return M.jump(void 0, _2);
  function _1() {
    return M.jump(void 0, _2);
  }
  function _2() {
    return M.chain(eff(1), _3, _7);
  }
  function _3() {
    fc = _1, fe = _5;
    return M.chain(eff(2), _4);
  }
  function _4() {
    return M.chain(effF(3), fc, fe);
  }
  function _5(e) {
    return M.raise(e);
  }
  function _6() {
    return M.raise(err);
  }
  function _7(a) {
    fc = _6, fe = _5, err = a;
    return M.jump(void 0, _4);
  }
}
function a20() {
  var fc, fe, err;
  return M.jump(void 0, _2, _6);
  function _1() {
    return M.jump(void 0, _2, _6);
  }
  function _2() {
    fc = _1, fe = _4;
    return M.chain(eff(2), _3);
  }
  function _3() {
    return M.chain(effF(3), fc, fe);
  }
  function _4(e) {
    return M.raise(e);
  }
  function _5() {
    return M.raise(err);
  }
  function _6(a) {
    fc = _5, fe = _4, err = a;
    return M.jump(void 0, _3);
  }
}
function a21() {
  var fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _2, _11);
  function _1() {
    return M.jump(void 0, _2, _11);
  }
  function _2() {
    _fc = _1, _fe = _7;
    return M.chain(eff(2), _3);
  }
  function _3() {
    return M.jump(void 0, _4, _12);
  }
  function _4() {
    if (a1) {
      fc = _1, fe = _7;
      return M.jump(void 0, _5);
    } else {
      if (a2) {
        fc = _6, fe = _7;
        return M.jump(void 0, _5);
      } else {
        if (a3) {
          fc = _8, fe = _7;
          return M.jump(void 0, _5);
        } else {
          fc = _fc, fe = _fe;
          return M.chain(effF(3), _5);
        }
      }
    }
  }
  function _5() {
    return M.chain(effFF(4), fc, fe);
  }
  function _6() {}
  function _7(e) {
    return M.raise(e);
  }
  function _8() {}
  function _9() {
    return M.raise(err);
  }
  function _10() {
    return M.raise(_err);
  }
  function _11(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _3);
  }
  function _12(a) {
    fc = _10, fe = _7, _err = a;
    return M.jump(void 0, _5);
  }
}
function a22() {
  var fc, fe, err;
  return M.jump(void 0, _2, _6);
  function _1() {
    return M.jump(void 0, _2, _6);
  }
  function _2() {
    fc = _1, fe = _4;
    return M.chain(eff(2), _3);
  }
  function _3() {
    return M.chain(effFF(4), fc, fe);
  }
  function _4(e) {
    return M.raise(e);
  }
  function _5() {
    return M.raise(err);
  }
  function _6(a) {
    fc = _5, fe = _4, err = a;
    return M.jump(void 0, _3);
  }
}
function a23() {
  var fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _2, _11);
  function _1() {
    return M.jump(void 0, _2, _11);
  }
  function _2() {
    if (a1) {
      fc = _4, fe = _6, _fc = _5, _fe = _6;
      return M.jump(void 0, _3, _12);
    } else {
      fc = _1, fe = _10;
      return M.chain(eff(2), _3, _12);
    }
  }
  function _3() {
    err = _err;
    return M.chain(effFF(4), fc, fe);
  }
  function _4() {
    return M.chain(effFF(5), _fc, _fe);
  }
  function _5() {
    return M.chain(eff(6), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(err);
  }
  function _9() {
    return M.raise(_err);
  }
  function _10(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
  function _11(a) {
    fc = _4, fe = _6, _fc = _9, _fe = _6, _err = a;
    return M.jump(void 0, _3, _12);
  }
  function _12(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
}
function a24() {
  var fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _2, _11);
  function _1() {
    return M.jump(void 0, _2, _11);
  }
  function _2() {
    if (a1) {
      fc = _4, fe = _6, _fc = _5, _fe = _6;
      return M.jump(void 0, _3, _12);
    } else {
      fc = _1, fe = _10;
      return M.chain(eff(2), _3, _12);
    }
  }
  function _3() {
    err = _err;
    return M.chain(effFF(4), fc, fe);
  }
  function _4() {
    return M.jump(void 0, _fc, _fe);
  }
  function _5() {
    return M.chain(eff(6), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(err);
  }
  function _9() {
    return M.raise(_err);
  }
  function _10(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
  function _11(a) {
    fc = _4, fe = _6, _fc = _9, _fe = _6, _err = a;
    return M.jump(void 0, _3, _12);
  }
  function _12(a) {
    _fc = _8, _fe = _6, err = a;
    return M.jump(void 0, _4);
  }
}
function a25() {
  var fc, fe, err, _err;
  return M.jump(void 0, _1, _8);
  function _1() {
    if (a1) {
      return M.jump(void 0, _2);
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _2() {
    return M.jump(void 0, _3, _9);
  }
  function _3() {
    fc = _5, fe = _6;
    return M.jump(void 0, _4);
  }
  function _4() {
    return M.chain(effFF(4), fc, fe);
  }
  function _5() {}
  function _6(e) {
    return M.raise(e);
  }
  function _7() {
    return M.raise(_err);
  }
  function _8(a) {
    err = a;
    return M.jump(void 0, _2);
  }
  function _9(a) {
    fc = _7, fe = _6, _err = a;
    return M.jump(void 0, _4);
  }
}
function a26() {
  var fc, fe, err, _err;
  return M.jump(void 0, _1, _8);
  function _1() {
    if (a1) {
      return M.jump(void 0, _2);
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _2() {
    return M.jump(void 0, _3, _9);
  }
  function _3() {
    fc = _5, fe = _6;
    return M.jump(void 0, _4);
  }
  function _4() {
    return M.chain(effFF(4), fc, fe);
  }
  function _5() {}
  function _6(e) {
    return M.raise(e);
  }
  function _7() {
    return M.raise(_err);
  }
  function _8(a) {
    err = a;
    return M.jump(void 0, _2);
  }
  function _9(a) {
    fc = _7, fe = _6, _err = a;
    return M.jump(void 0, _4);
  }
}
function a27() {
  var fc, fe, err, _err;
  return M.jump(void 0, _1, _9);
  function _1() {
    if (a1) {
      return M.jump(void 0, _2);
    } else {
      return M.chain(eff(2), _2);
    }
  }
  function _2() {
    return M.jump(void 0, _3, _10);
  }
  function _3() {
    fc = _5, fe = _6;
    return M.jump(void 0, _4);
  }
  function _4() {
    return M.chain(effFF(4), fc, fe);
  }
  function _5() {
    return M.chain(eff(5), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(_err);
  }
  function _9(a) {
    err = a;
    return M.jump(void 0, _2);
  }
  function _10(a) {
    fc = _8, fe = _6, _err = a;
    return M.jump(void 0, _4);
  }
}
function a28() {
  var fc, fe, _fc, _fe, fc1, fe1, err, _err, err1;
  return M.jump(void 0, _1, _14);
  function _1() {
    if (a1) {
      _fc = _6, _fe = _8, fc1 = _7, fe1 = _8;
      return M.jump(void 0, _2, _15);
    } else {
      _fc = _5, _fe = _13;
      return M.chain(eff(2), _2, _15);
    }
  }
  function _2() {
    return M.chain(eff(3), _3, _16);
  }
  function _3() {
    if (a2) {
      fc = _5, fe = _13;
      return M.jump(void 0, _4, _17);
    } else {
      fc = _fc, fe = _fe;
      return M.chain(eff(4), _4, _17);
    }
  }
  function _4() {
    err = err1;
    return M.chain(eff(5), fc, fe);
  }
  function _5() {
    fc1 = _7, fe1 = _8;
    return M.chain(eff(6), _6);
  }
  function _6() {
    return M.chain(eff(7), fc1, fe1);
  }
  function _7() {
    return M.chain(eff(8), _9);
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {}
  function _10() {
    return M.raise(err);
  }
  function _11() {
    return M.raise(_err);
  }
  function _12() {
    return M.raise(err1);
  }
  function _13(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _14(a) {
    _fc = _6, _fe = _8, fc1 = _11, fe1 = _8, _err = a;
    return M.jump(void 0, _2, _15);
  }
  function _15(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _16(a) {
    fc = _6, fe = _8, fc1 = _12, fe1 = _8, err1 = a;
    return M.jump(void 0, _4, _17);
  }
  function _17(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
}
function a29() {
  var fc, fe, _fc, _fe, err, _err, err1;
  return M.jump(void 0, _1, _14);
  function _1() {
    _fc = _7, _fe = _8;
    return M.jump(void 0, _2, _15);
  }
  function _2() {
    return M.chain(eff(3), _3, _16);
  }
  function _3() {
    fc = _5, fe = _13;
    return M.jump(void 0, _4, _17);
  }
  function _4() {
    err = err1;
    return M.chain(eff(5), fc, fe);
  }
  function _5() {
    _fc = _7, _fe = _8;
    return M.chain(eff(6), _6);
  }
  function _6() {
    return M.chain(eff(7), _fc, _fe);
  }
  function _7() {
    return M.chain(eff(8), _9);
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {}
  function _10() {
    return M.raise(err);
  }
  function _11() {
    return M.raise(_err);
  }
  function _12() {
    return M.raise(err1);
  }
  function _13(a) {
    _fc = _10, _fe = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _14(a) {
    _fc = _11, _fe = _8, _err = a;
    return M.jump(void 0, _2, _15);
  }
  function _15(a) {
    _fc = _10, _fe = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _16(a) {
    fc = _6, fe = _8, _fc = _12, _fe = _8, err1 = a;
    return M.jump(void 0, _4, _17);
  }
  function _17(a) {
    _fc = _10, _fe = _8, err = a;
    return M.jump(void 0, _6);
  }
}
function a30(a1, a2) {
  var fc, fe, _fc, _fe, fc1, fe1, err, _err, err1;
  return M.jump(void 0, _1, _14);
  function _1() {
    if (a1) {
      _fc = _6, _fe = _8, fc1 = _7, fe1 = _8;
      return M.jump(void 0, _2, _15);
    } else {
      _fc = _5, _fe = _13;
      return M.chain(eff(2), _2, _15);
    }
  }
  function _2() {
    return M.chain(eff(3), _3, _16);
  }
  function _3() {
    if (a2) {
      fc = _5, fe = _13;
      return M.jump(void 0, _4, _17);
    } else {
      fc = _fc, fe = _fe;
      return M.chain(eff(4), _4, _17);
    }
  }
  function _4() {
    err = err1;
    return M.chain(eff(5), fc, fe);
  }
  function _5() {
    fc1 = _7, fe1 = _8;
    return M.chain(eff(6), _6);
  }
  function _6() {
    return M.chain(eff(7), fc1, fe1);
  }
  function _7() {
    return M.chain(eff(8), _9);
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {}
  function _10() {
    return M.raise(err);
  }
  function _11() {
    return M.raise(_err);
  }
  function _12() {
    return M.raise(err1);
  }
  function _13(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _14(a) {
    _fc = _6, _fe = _8, fc1 = _11, fe1 = _8, _err = a;
    return M.jump(void 0, _2, _15);
  }
  function _15(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _16(a) {
    fc = _6, fe = _8, fc1 = _12, fe1 = _8, err1 = a;
    return M.jump(void 0, _4, _17);
  }
  function _17(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
}
function a31() {
  var e, ex;
  return M.jump(void 0, _1, _6);
  function _1() {
    console.log("hi");
    return M.chain(eff(1), _2, _6);
  }
  function _2() {
    return M.chain(eff(2), _4);
  }
  function _3() {
    e = ex;
    console.log(e);
    return M.chain(eff(3), _4);
  }
  function _4() {
    return M.chain(eff(4), _5);
  }
  function _5() {}
  function _6(a) {
    ex = a;
    return M.jump(void 0, _3);
  }
}
function a32(a1, a2) {
  var e, ee, ex, _ex;
  return M.jump(void 0, _1, _7);
  function _1() {
    console.log("hi", a1);
    return M.chain(eff(1), _2, _7);
  }
  function _2() {
    return M.chain(eff(2), _5);
  }
  function _3() {
    e = ex;
    console.log(e);
    return M.chain(eff(3), _5);
  }
  function _4() {
    ee = _ex;
    return M.chain(eff(4), _5);
  }
  function _5() {
    return M.chain(eff(5), _6);
  }
  function _6() {}
  function _7(a) {
    ex = a;
    return M.jump(void 0, _3, _8);
  }
  function _8(a) {
    _ex = a;
    return M.jump(void 0, _4);
  }
}
function a33() {
  var e, ex, fc, fe, err;
  return M.jump(void 0, _1, _9);
  function _1() {
    console.log("hi");
    return M.chain(eff(1), _2, _9);
  }
  function _2() {
    fc = _5, fe = _6;
    return M.chain(eff(2), _4);
  }
  function _3() {
    e = ex;
    console.log(e);
    fc = _5, fe = _6;
    return M.chain(eff(3), _4);
  }
  function _4() {
    return M.chain(eff(4), fc, fe);
  }
  function _5() {
    return M.chain(eff(5), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8() {
    return M.raise(err);
  }
  function _9(a) {
    ex = a;
    return M.jump(void 0, _3, _10);
  }
  function _10(a) {
    fc = _8, fe = _6, err = a;
    return M.jump(void 0, _4);
  }
}
function a34() {
  var e, ex, fc, fe, _fc, _fe, err, _err;
  return M.jump(void 0, _1, _11);
  function _1() {
    console.log("hi");
    fc = _3, fe = _10;
    return M.chain(eff(1), _2, _12);
  }
  function _2() {
    ex = _err;
    return M.chain(eff(2), fc, fe);
  }
  function _3() {
    _fc = _6, _fe = _7;
    return M.chain(eff(3), _5);
  }
  function _4() {
    e = ex;
    _fc = _6, _fe = _7;
    return M.chain(eff(e), _5);
  }
  function _5() {
    return M.chain(eff(4), _fc, _fe);
  }
  function _6() {
    return M.chain(eff(5), _8);
  }
  function _7(e) {
    return M.raise(e);
  }
  function _8() {}
  function _9() {
    return M.raise(err);
  }
  function _10(a) {
    ex = a;
    return M.jump(void 0, _4, _13);
  }
  function _11(a) {
    fc = _4, fe = _13, _err = a;
    return M.jump(void 0, _2, _12);
  }
  function _12(a) {
    ex = a;
    return M.jump(void 0, _4, _13);
  }
  function _13(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
}
function a35() {
  var e, ex, fc, fe, err;
  return M.jump(void 0, _1, _9);
  function _1() {
    console.log("hi");
    fc = _3, fe = _8;
    return M.chain(eff("try>try>body"), _2, _10);
  }
  function _2() {
    ex = err;
    return M.chain(eff("try>try>finally"), fc, fe);
  }
  function _3() {
    return M.chain(eff("try>body"), _5);
  }
  function _4() {
    e = ex;
    console.log(e);
    return M.chain(eff("try>catch"), _5);
  }
  function _5() {
    return M.chain(eff("last"), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {}
  function _8(a) {
    ex = a;
    return M.jump(void 0, _4);
  }
  function _9(a) {
    fc = _4, fe = _6, err = a;
    return M.jump(void 0, _2, _10);
  }
  function _10(a) {
    ex = a;
    return M.jump(void 0, _4);
  }
}
function a36(a1) {
  var fc, fe, err;
  return M.jump(void 0, _1, _7);
  function _1() {
    if (a1) {
      fc = _5, fe = _4;
      return M.jump(void 0, _2);
    } else {
      fc = _3, fe = _4;
      return M.chain(eff("body"), _2);
    }
  }
  function _2() {
    return M.chain(eff("finally"), fc, fe);
  }
  function _3() {}
  function _4(e) {
    return M.raise(e);
  }
  function _5() {}
  function _6() {
    return M.raise(err);
  }
  function _7(a) {
    fc = _6, fe = _4, err = a;
    return M.jump(void 0, _2);
  }
}
function a37(a1, a2) {
  var fc, fe, _fc, _fe, fc1, fe1, err, _err, err1;
  return M.jump(void 0, _1, _14);
  function _1() {
    if (a1) {
      _fc = _6, _fe = _8, fc1 = _7, fe1 = _8;
      return M.jump(void 0, _2, _15);
    } else {
      _fc = _5, _fe = _13;
      return M.chain(eff("l1>try-body>l2>try-body"), _2, _15);
    }
  }
  function _2() {
    return M.chain(eff("l1>try-body>l2>try-finally"), _3, _16);
  }
  function _3() {
    if (a2) {
      fc = _5, fe = _13;
      return M.jump(void 0, _4, _17);
    } else {
      fc = _fc, fe = _fe;
      return M.chain(eff("l1>try-body>l2>try-finally>try-body"), _4, _17);
    }
  }
  function _4() {
    err = err1;
    return M.chain(eff("l1>try-body>l2>try-finally>try-finally"), fc, fe);
  }
  function _5() {
    fc1 = _7, fe1 = _8;
    return M.chain(eff("l1>try-body"), _6);
  }
  function _6() {
    return M.chain(eff("l1>try-finally"), fc1, fe1);
  }
  function _7() {
    return M.chain(eff("end"), _9);
  }
  function _8(e) {
    return M.raise(e);
  }
  function _9() {}
  function _10() {
    return M.raise(err);
  }
  function _11() {
    return M.raise(_err);
  }
  function _12() {
    return M.raise(err1);
  }
  function _13(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _14(a) {
    _fc = _6, _fe = _8, fc1 = _11, fe1 = _8, _err = a;
    return M.jump(void 0, _2, _15);
  }
  function _15(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
  function _16(a) {
    fc = _6, fe = _8, fc1 = _12, fe1 = _8, err1 = a;
    return M.jump(void 0, _4, _17);
  }
  function _17(a) {
    fc1 = _10, fe1 = _8, err = a;
    return M.jump(void 0, _6);
  }
}
function a38(a1) {
  var i, j, fc, fe, r, err;
  i = 0;
  j = 0;
  return M.chain(eff("pref", i, j), _1, _7);
  function _1() {
    i += 1, j += 2;
    if (i > 10) {
      fc = _5, fe = _4, r = 10;
      return M.jump(void 0, _2);
    } else {
      fc = _3, fe = _4;
      return M.chain(eff("body", i, j), _2);
    }
  }
  function _2() {
    return M.chain(eff("finally", i), fc, fe);
  }
  function _3() {
    return r;
  }
  function _4(e) {
    return M.raise(e);
  }
  function _5() {
    return r;
  }
  function _6() {
    return M.raise(err);
  }
  function _7(a) {
    fc = _6, fe = _4, err = a;
    return M.jump(void 0, _2);
  }
}
function a39(a1) {
  var i, j, fc, fe, r, err;
  i = 0;
  j = 0;
  return M.chain(eff("pref", i, j), _1, _7);
  function _1() {
    i += 1, j += 2;
    if (i > 10) {
      fc = _5, fe = _4, r = 10;
      return M.jump(void 0, _2);
    } else {
      fc = _3, fe = _4;
      return M.chain(eff("body", i, j), _2);
    }
  }
  function _2() {
    return M.chain(eff("finally", i), fc, fe);
  }
  function _3() {
    return M.chain(eff("exit", j), _5);
  }
  function _4(e) {
    return M.raise(e);
  }
  function _5() {
    return r;
  }
  function _6() {
    return M.raise(err);
  }
  function _7(a) {
    fc = _6, fe = _4, err = a;
    return M.jump(void 0, _2);
  }
}
function a40(a1) {
  var i, j, fc, fe, _fc, _fe, r, err, _err;
  i = 0;
  j = 0;
  return M.chain(eff("pref", i, j), _1, _11);
  function _1() {
    var a;
    a = j++;
    return M.chain(eff("l1", i, a), _2, _12);
  }
  function _2() {
    i += 1;
    if (i > 10) {
      fc = _5, fe = _7, _fc = _8, _fe = _7, r = 10;
      return M.jump(void 0, _3, _13);
    } else {
      if (j > 10) {
        fc = _5, fe = _7, _fc = _6, _fe = _7;
        return M.jump(void 0, _3, _13);
      } else {
        fc = _4, fe = _11;
        return M.chain(eff("l1 > body", i, j), _3, _13);
      }
    }
  }
  function _3() {
    err = _err;
    return M.chain(eff("l1 > finally", i), fc, fe);
  }
  function _4() {
    _fc = _6, _fe = _7;
    return M.chain(eff("l1 > exit", j), _5);
  }
  function _5() {
    return M.chain(eff("body > finally", i), _fc, _fe);
  }
  function _6() {
    return M.chain(eff("exit", j), _8);
  }
  function _7(e) {
    return M.raise(e);
  }
  function _8() {
    return r;
  }
  function _9() {
    return M.raise(err);
  }
  function _10() {
    return M.raise(_err);
  }
  function _11(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
  function _12(a) {
    fc = _5, fe = _7, _fc = _10, _fe = _7, _err = a;
    return M.jump(void 0, _3, _13);
  }
  function _13(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
}
function a41(a1) {
  var r;
  if (a1 === 1) {
    return 10;
  } else {
    if (a1 === 2) {
      return M.chain(eff(11), _1);
    } else {
      if (a1 === 3) {
        return M.chain(eff(12), _2);
      } else {
        return M.chain(eff("exit"), _2);
      }
    }
  }
  function _1(a) {
    return a;
  }
  function _2() {
    return r;
  }
}
function a42(a1) {
  var fc, fe, r, err;
  return M.jump(void 0, _1, _9);
  function _1() {
    if (a1 === 1) {
      fc = _7, fe = _6, r = 10;
      return M.jump(void 0, _4);
    } else {
      if (a1 === 2) {
        return M.chain(eff(11), _2, _9);
      } else {
        if (a1 === 3) {
          return M.chain(eff(12), _3, _9);
        } else {
          fc = _5, fe = _6;
          return M.jump(void 0, _4);
        }
      }
    }
  }
  function _2(a) {
    fc = _7, fe = _6, r = a;
    return M.jump(void 0, _4);
  }
  function _3() {
    fc = _7, fe = _6;
    return M.jump(void 0, _4);
  }
  function _4() {
    return M.chain(eff("finally"), fc, fe);
  }
  function _5() {
    return M.chain(eff("exit"), _7);
  }
  function _6(e) {
    return M.raise(e);
  }
  function _7() {
    return r;
  }
  function _8() {
    return M.raise(err);
  }
  function _9(a) {
    fc = _8, fe = _6, err = a;
    return M.jump(void 0, _4);
  }
}
function a43(a1) {
  var i, j, fc, fe, _fc, _fe, r, err, _err;
  i = 0;
  j = 0;
  return M.chain(eff("pref", i, j), _1, _11);
  function _1() {
    var a;
    a = j++;
    return M.chain(eff("l1", i, a), _2, _12);
  }
  function _2() {
    i += 1;
    if (i > 10) {
      fc = _5, fe = _7, _fc = _8, _fe = _7, r = 10;
      return M.jump(void 0, _3, _13);
    } else {
      if (j > 10) {
        fc = _5, fe = _7, _fc = _6, _fe = _7;
        return M.jump(void 0, _3, _13);
      } else {
        fc = _4, fe = _11;
        return M.chain(eff("l1 > body", i, j), _3, _13);
      }
    }
  }
  function _3() {
    err = _err;
    return M.chain(eff("l1 > finally", i), fc, fe);
  }
  function _4() {
    _fc = _6, _fe = _7;
    return M.chain(eff("l1 > exit", j), _5);
  }
  function _5() {
    return M.chain(eff("body > finally", i), _fc, _fe);
  }
  function _6() {
    return M.chain(eff("exit", j), _8);
  }
  function _7(e) {
    return M.raise(e);
  }
  function _8() {
    return r;
  }
  function _9() {
    return M.raise(err);
  }
  function _10() {
    return M.raise(_err);
  }
  function _11(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
  function _12(a) {
    fc = _5, fe = _7, _fc = _10, _fe = _7, _err = a;
    return M.jump(void 0, _3, _13);
  }
  function _13(a) {
    _fc = _9, _fe = _7, err = a;
    return M.jump(void 0, _5);
  }
}