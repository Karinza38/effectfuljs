import * as M from '@effectful/core';

function a1() {
  var a1 = M.async();
  return a1.scopeH(a1_1, a1_2);
}

function a2() {
  var a2 = M.async();
  return a2.scopeH(a2_1, a2_3);
}

function a3() {
  var a3 = M.async();
  return a3.scopeH(a3_1, a3_3);
}

function g2() {
  var g2 = M.generator();
  return g2.scopeH(g2_1, g2_3);
}

function g3() {
  var g3 = M.generator();
  return g3.scopeH(g3_1, g3_3);
}

function a4() {
  var a4 = M.async();
  return a4.scopeH(a4_1, a4_4);
}

function a5() {
  var a5 = M.async();
  return a5.scopeH(a5_1, a5_5);
}

function ag1() {
  var ag1 = M.asyncGenerator();
  return ag1.scopeH(ag1_1, ag1_3);
}

function ag2() {
  var ag2 = M.asyncGenerator();
  return ag2.scopeH(ag2_1, ag2_8);
}

function ag3() {
  var ag3 = M.asyncGenerator();
  return ag3.scopeH(ag3_1, ag3_8);
}

function switches() {
  var switches = M.asyncGenerator();
  return switches.scopeH(switches_1, switches_45);
}

function c() {
  var c = M.asyncGenerator();
  return c.scopeH(c_1, c_11);
}

class A {
  method() {
    var ctx = M.async();
    return ctx.scopeH(method_1, method_3);
  }

  static method() {
    var ctx = M.async();
    return ctx.scopeH(_method_1, _method_3);
  }

}

var b = new class {
  method() {
    var ctx = M.async();
    return ctx.scopeH(method_11, method_31);
  }

  static m1() {
    var ctx = M.async();
    ctx._A = class A {
      m2() {
        var ctx = M.async();
        return ctx.scopeH(m2_1, m2_3);
      }

    };
    return ctx.scopeH(m1_1, m1_3);
  }

}();
var c = new class C {
  [getName()]() {
    var ctx = M.async();
    return ctx.scopeH(f_1, f_3);
  }

  static [Symbol.iterator]() {
    var ctx = M.async();
    return ctx.scopeH(_f_1, _f_3);
  }

}()(i => {
  var ctx = M.async();
  ctx._i = i;
  return ctx.scopeH(f_11, f_31);
})(10);

(function (i) {
  var ctx = M.async();
  ctx._i = i;
  return ctx.scopeH(f_12, f_32);
})(10);

(function zz(i) {
  var _zz = M.async();

  _zz._i = i;
  return _zz.scopeH(zz_1, zz_3);
})(10);

function a1_1(a1) {
  return a1.pure();
}

function a1_2(a1, e) {
  return a1.raise(e);
}

function a2_1(a2) {
  var a;
  a = delay(1);
  return a2.chainH(a, a2_2, a2_3);
}

function a2_2(a2) {
  return a2.pure();
}

function a2_3(a2, e) {
  return a2.raise(e);
}

function a3_1(a3) {
  var a;
  a = delay(1);
  return a3.chainH(a, a3_2, a3_3);
}

function a3_2(a3, r) {
  return a3.pure(r);
}

function a3_3(a3, e) {
  return a3.raise(e);
}

function g2_1(g2) {
  var a;
  a = delay(1);
  return g2.yldStarH(a, g2_2, g2_3);
}

function g2_2(g2) {
  return g2.pure();
}

function g2_3(g2, e) {
  return g2.raise(e);
}

function g3_1(g3) {
  var a;
  a = delay(1);
  return g3.yldStarH(a, g3_2, g3_3);
}

function g3_2(g3, r) {
  return g3.pure(r);
}

function g3_3(g3, e) {
  return g3.raise(e);
}

function a4_1(a4) {
  var a;
  a = delay(1);
  return a4.chainH(a, a4_2, a4_4);
}

function a4_2(a4, a) {
  return a4.chainH(a, a4_3, a4_4);
}

function a4_3(a4) {
  return a4.pure();
}

function a4_4(a4, e) {
  return a4.raise(e);
}

function a5_1(a5) {
  var a;
  a = delay(1);
  return a5.chainH(a, a5_2, a5_5);
}

function a5_2(a5, a) {
  return a5.chainH(a, a5_3, a5_5);
}

function a5_3(a5, a) {
  return a5.chainH(a, a5_4, a5_5);
}

function a5_4(a5) {
  return a5.pure();
}

function a5_5(a5, e) {
  return a5.raise(e);
}

function ag1_1(ag1) {
  return ag1.yldH(1, ag1_2, ag1_3);
}

function ag1_2(ag1) {
  return ag1.pure();
}

function ag1_3(ag1, e) {
  return ag1.raise(e);
}

function ag2_1(ag2) {
  var a;
  a = delay(1);
  return ag2.chainH(a, ag2_2, ag2_8);
}

function ag2_2(ag2, a) {
  return ag2.yldH(a, ag2_3, ag2_8);
}

function ag2_3(ag2) {
  var a;
  a = delay(2);
  return ag2.chainH(a, ag2_4, ag2_8);
}

function ag2_4(ag2, a) {
  return ag2.yldH(a, ag2_5, ag2_8);
}

function ag2_5(ag2) {
  var a;
  a = delay(3);
  return ag2.chainH(a, ag2_6, ag2_8);
}

function ag2_6(ag2, a) {
  return ag2.yldH(a, ag2_7, ag2_8);
}

function ag2_7(ag2) {
  return ag2.pure();
}

function ag2_8(ag2, e) {
  return ag2.raise(e);
}

function ag3_1(ag3) {
  ag3._loop = ag3.iteratorM(f());
  return ag3.jumpH(void 0, ag3_2, ag3_10);
}

function ag3_2(ag3) {
  return ag3.chainH(ag3._loop.step(), ag3_3, ag3_10);
}

function ag3_3(ag3, c) {
  var a, b, d;
  b = ag3._loop = c;
  a = b.done;

  if (!a) {
    ag3._i = ag3._loop.value;
    d = delay(ag3._i);
    return ag3.chainH(d, ag3_4, ag3_10);
  } else {
    ag3._fc = ag3_7, ag3._fe = ag3_8;
    return ag3.jumpH(void 0, ag3_6, ag3_8);
  }
}

function ag3_4(ag3, a) {
  return ag3.yldH(a, ag3_5, ag3_10);
}

function ag3_5(ag3) {
  return ag3.yldH(ag3._i, ag3_2, ag3_10);
}

function ag3_6(ag3) {
  if (ag3._loop.exit) {
    return ag3.chainH(ag3._loop.exit(), ag3._fc, ag3._fe);
  } else {
    return ag3.jumpH(void 0, ag3._fc, ag3._fe);
  }
}

function ag3_7(ag3) {
  return ag3.pure();
}

function ag3_8(ag3, e) {
  return ag3.raise(e);
}

function ag3_9(ag3) {
  return ag3.raise(ag3._err1);
}

function ag3_10(ag3, a) {
  ag3._fc = ag3_9, ag3._fe = ag3_8, ag3._err1 = a;
  return ag3.jumpH(void 0, ag3_6, ag3_8);
}

function switches_1(switches) {
  switches._loop = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_2, switches_55);
}

function switches_2(switches) {
  return switches.chainH(switches._loop.step(), switches_3, switches_55);
}

function switches_3(switches, c) {
  var a, b;
  b = switches._loop = c;
  a = b.done;

  if (!a) {
    switches._i = switches._loop.value;

    switch (switches._i) {
      case 3:
        switches._fc = switches_5, switches._fe = switches_45;
        return switches.jumpH(void 0, switches_4, switches_45);

      default:
        return switches.jumpRH(void 0, switches_2, switches_55);
    }
  } else {
    switches._fc = switches_5, switches._fe = switches_45;
    return switches.jumpH(void 0, switches_4, switches_45);
  }
}

function switches_4(switches) {
  if (switches._loop.exit) {
    return switches.chainH(switches._loop.exit(), switches._fc, switches._fe);
  } else {
    return switches.jumpH(void 0, switches._fc, switches._fe);
  }
}

function switches_5(switches) {
  switches._loop1 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_6, switches_56);
}

function switches_6(switches) {
  return switches.chainH(switches._loop1.step(), switches_7, switches_56);
}

function switches_7(switches, c) {
  var a, b;
  b = switches._loop1 = c;
  a = b.done;

  if (!a) {
    switches._i1 = switches._loop1.value;

    switch (switches._i1) {
      case 3:
        return switches.yldH(`l2-${switches._i1}`, switches_8, switches_56);

      default:
        return switches.jumpRH(void 0, switches_6, switches_56);
    }
  } else {
    switches._fc1 = switches_10, switches._fe1 = switches_45;
    return switches.jumpH(void 0, switches_9, switches_45);
  }
}

function switches_8(switches) {
  switches._fc1 = switches_10, switches._fe1 = switches_45;
  return switches.jumpH(void 0, switches_9, switches_45);
}

function switches_9(switches) {
  if (switches._loop1.exit) {
    return switches.chainH(switches._loop1.exit(), switches._fc1, switches._fe1);
  } else {
    return switches.jumpH(void 0, switches._fc1, switches._fe1);
  }
}

function switches_10(switches) {
  switches._loop2 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_11, switches_57);
}

function switches_11(switches) {
  return switches.chainH(switches._loop2.step(), switches_12, switches_57);
}

function switches_12(switches, c) {
  var a, b;
  b = switches._loop2 = c;
  a = b.done;

  if (!a) {
    switches._i2 = switches._loop2.value;

    switch (switches._i2) {
      case 3:
        switches._fc2 = switches_14, switches._fe2 = switches_45;
        return switches.jumpH(void 0, switches_13, switches_45);

      default:
        return switches.yldH(`l3-${switches._i2}`, switches_11, switches_57);
    }
  } else {
    switches._fc2 = switches_14, switches._fe2 = switches_45;
    return switches.jumpH(void 0, switches_13, switches_45);
  }
}

function switches_13(switches) {
  if (switches._loop2.exit) {
    return switches.chainH(switches._loop2.exit(), switches._fc2, switches._fe2);
  } else {
    return switches.jumpH(void 0, switches._fc2, switches._fe2);
  }
}

function switches_14(switches) {
  switches._loop3 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_15, switches_58);
}

function switches_15(switches) {
  return switches.chainH(switches._loop3.step(), switches_16, switches_58);
}

function switches_16(switches, c) {
  var a, b;
  b = switches._loop3 = c;
  a = b.done;

  if (!a) {
    switches._i3 = switches._loop3.value;

    switch (switches._i3) {
      case 3:
        switches._fc3 = switches_18, switches._fe3 = switches_45;
        return switches.jumpH(void 0, switches_17, switches_45);

      default:
        return switches.yldH(`l4-${switches._i3}`, switches_15, switches_58);
    }
  } else {
    switches._fc3 = switches_18, switches._fe3 = switches_45;
    return switches.jumpH(void 0, switches_17, switches_45);
  }
}

function switches_17(switches) {
  if (switches._loop3.exit) {
    return switches.chainH(switches._loop3.exit(), switches._fc3, switches._fe3);
  } else {
    return switches.jumpH(void 0, switches._fc3, switches._fe3);
  }
}

function switches_18(switches) {
  switches._loop4 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_19, switches_59);
}

function switches_19(switches) {
  return switches.chainH(switches._loop4.step(), switches_20, switches_59);
}

function switches_20(switches, c) {
  var a, b;
  b = switches._loop4 = c;
  a = b.done;

  if (!a) {
    switches._i4 = switches._loop4.value;
    return switches.yldH(`l5-${switches._i4}`, switches_21, switches_59);
  } else {
    switches._fc4 = switches_23, switches._fe4 = switches_45;
    return switches.jumpH(void 0, switches_22, switches_45);
  }
}

function switches_21(switches) {
  switch (switches._i4) {
    case 3:
      switches._fc4 = switches_23, switches._fe4 = switches_45;
      return switches.jumpH(void 0, switches_22, switches_45);

    default:
      return switches.jumpRH(void 0, switches_19, switches_59);
  }
}

function switches_22(switches) {
  if (switches._loop4.exit) {
    return switches.chainH(switches._loop4.exit(), switches._fc4, switches._fe4);
  } else {
    return switches.jumpH(void 0, switches._fc4, switches._fe4);
  }
}

function switches_23(switches) {
  switches._loop5 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_24, switches_60);
}

function switches_24(switches) {
  return switches.chainH(switches._loop5.step(), switches_25, switches_60);
}

function switches_25(switches, c) {
  var a, b;
  b = switches._loop5 = c;
  a = b.done;

  if (!a) {
    switches._i5 = switches._loop5.value;

    switch (switches._i5) {
      case 3:
        return switches.yldH(`l6-1-${switches._i5}`, switches_26, switches_60);

      default:
        return switches.yldH(`l6-2-${switches._i5}`, switches_24, switches_60);
    }
  } else {
    switches._fc5 = switches_28, switches._fe5 = switches_45;
    return switches.jumpH(void 0, switches_27, switches_45);
  }
}

function switches_26(switches) {
  switches._fc5 = switches_28, switches._fe5 = switches_45;
  return switches.jumpH(void 0, switches_27, switches_45);
}

function switches_27(switches) {
  if (switches._loop5.exit) {
    return switches.chainH(switches._loop5.exit(), switches._fc5, switches._fe5);
  } else {
    return switches.jumpH(void 0, switches._fc5, switches._fe5);
  }
}

function switches_28(switches) {
  switches._loop6 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_29, switches_61);
}

function switches_29(switches) {
  return switches.chainH(switches._loop6.step(), switches_30, switches_61);
}

function switches_30(switches, c) {
  var a, b;
  b = switches._loop6 = c;
  a = b.done;

  if (!a) {
    switches._i6 = switches._loop6.value;

    switch (switches._i6) {
      case 0:
        return switches.jumpRH(void 0, switches_29, switches_61);

      case 1:
      case 2:
        return switches.yldH(`l7-1-${switches._i6}`, switches_29, switches_61);

      case 3:
        return switches.jumpRH(void 0, switches_29, switches_61);

      case 4:
        return switches.yldH(`l7-2-${switches._i6}`, switches_29, switches_61);

      case 5:
        return switches.yldH(`l7-3-${switches._i6}`, switches_32, switches_61);

      case 6:
        return switches.jumpRH(void 0, switches_29, switches_61);

      case 7:
        return switches.yldH(`l7-4-${switches._i6}`, switches_31, switches_61);

      default:
        return switches.yldH(`l7-5-${switches._i6}`, switches_32, switches_61);
    }
  } else {
    switches._fc6 = switches_34, switches._fe6 = switches_45;
    return switches.jumpH(void 0, switches_33, switches_45);
  }
}

function switches_31(switches) {
  switches._fc6 = switches_34, switches._fe6 = switches_45;
  return switches.jumpH(void 0, switches_33, switches_45);
}

function switches_32(switches) {
  return switches.yldH(`l7-6-${switches._i6}`, switches_29, switches_61);
}

function switches_33(switches) {
  if (switches._loop6.exit) {
    return switches.chainH(switches._loop6.exit(), switches._fc6, switches._fe6);
  } else {
    return switches.jumpH(void 0, switches._fc6, switches._fe6);
  }
}

function switches_34(switches) {
  switches._loop7 = switches.iteratorM(gen());
  return switches.jumpH(void 0, switches_35, switches_62);
}

function switches_35(switches) {
  return switches.chainH(switches._loop7.step(), switches_36, switches_62);
}

function switches_36(switches, c) {
  var a, b;
  b = switches._loop7 = c;
  a = b.done;

  if (!a) {
    switches._i7 = switches._loop7.value;
    switches._loop8 = switches.iterator(gen());
    return switches.jumpRH(void 0, switches_37, switches_63);
  } else {
    switches._fc8 = switches_44, switches._fe8 = switches_45;
    return switches.jumpH(void 0, switches_43, switches_45);
  }
}

function switches_37(switches) {
  if (!(switches._loop8 = switches._loop8.step()).done) {
    switches._j = switches._loop8.value;

    switch (switches._i7) {
      case 0:
      case 1:
      case 2:
        return switches.yldH(`s1:${switches._i7},${switches._j}`, switches_38, switches_63);

      case 3:
        switch (switches._j) {
          case 2:
          case 3:
            return switches.yldH(`s2:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 5:
            return switches.yldH(`s3:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 7:
            return switches.yldH(`s4:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 8:
            return switches.yldH(`s5:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 9:
            return switches.yldH(`s6:${switches._i7},${switches._j}`, switches_39, switches_63);

          default:
            return switches.jumpRH(void 0, switches_37, switches_63);
        }

      case 4:
        switch (switches._j) {
          case 2:
          case 3:
            return switches.yldH(`s7:${switches._i7},${switches._j}`, switches_41, switches_63);

          case 5:
            return switches.yldH(`s8:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 6:
            switches._fc7 = switches_35, switches._fe7 = switches_62;
            return switches.jumpH(void 0, switches_42, switches_62);

          case 7:
            return switches.yldH(`s9:${switches._i7},${switches._j}`, switches_41, switches_63);

          case 8:
            return switches.yldH(`s10:${switches._i7},${switches._j}`, switches_37, switches_63);

          case 9:
            return switches.yldH(`s11:${switches._i7},${switches._j}`, switches_40, switches_63);

          default:
            return switches.yldH(`s12:${switches._i7},${switches._j}`, switches_41, switches_63);
        }

      case 5:
        switch (switches._j) {
          case 2:
          case 3:
            switches._fc7 = switches_43, switches._fe7 = switches_45, switches._fc8 = switches_44, switches._fe8 = switches_45;
            return switches.jumpH(void 0, switches_42, switches_62);

          default:
            return switches.jumpRH(void 0, switches_37, switches_63);
        }

      default:
        return switches.jumpRH(void 0, switches_37, switches_63);
    }
  } else {
    switches._fc7 = switches_35, switches._fe7 = switches_62;
    return switches.jumpH(void 0, switches_42, switches_62);
  }
}

function switches_38(switches) {
  if (switches._j > 3) {
    switches._fc7 = switches_35, switches._fe7 = switches_62;
    return switches.jumpH(void 0, switches_42, switches_62);
  } else {
    return switches.jumpRH(void 0, switches_37, switches_63);
  }
}

function switches_39(switches) {
  switches._fc7 = switches_35, switches._fe7 = switches_62;
  return switches.jumpH(void 0, switches_42, switches_62);
}

function switches_40(switches) {
  switches._fc7 = switches_43, switches._fe7 = switches_45, switches._fc8 = switches_44, switches._fe8 = switches_45;
  return switches.jumpH(void 0, switches_42, switches_62);
}

function switches_41(switches) {
  return switches.yldH(`s13:${switches._i7},${switches._j}`, switches_37, switches_63);
}

function switches_42(switches) {
  if (switches._loop8.exit) {
    switches._loop8.exit();
  }

  switches._err8 = switches._err9;
  return switches.jumpH(void 0, switches._fc7, switches._fe7);
}

function switches_43(switches) {
  if (switches._loop7.exit) {
    return switches.chainH(switches._loop7.exit(), switches._fc8, switches._fe8);
  } else {
    return switches.jumpH(void 0, switches._fc8, switches._fe8);
  }
}

function switches_44(switches) {
  return switches.pure();
}

function switches_45(switches, e) {
  return switches.raise(e);
}

function switches_46(switches) {
  return switches.raise(switches._err1);
}

function switches_47(switches) {
  return switches.raise(switches._err2);
}

function switches_48(switches) {
  return switches.raise(switches._err3);
}

function switches_49(switches) {
  return switches.raise(switches._err4);
}

function switches_50(switches) {
  return switches.raise(switches._err5);
}

function switches_51(switches) {
  return switches.raise(switches._err6);
}

function switches_52(switches) {
  return switches.raise(switches._err7);
}

function switches_53(switches) {
  return switches.raise(switches._err8);
}

function switches_54(switches) {
  return switches.raise(switches._err9);
}

function switches_55(switches, a) {
  switches._fc = switches_46, switches._fe = switches_45, switches._err1 = a;
  return switches.jumpH(void 0, switches_4, switches_45);
}

function switches_56(switches, a) {
  switches._fc1 = switches_47, switches._fe1 = switches_45, switches._err2 = a;
  return switches.jumpH(void 0, switches_9, switches_45);
}

function switches_57(switches, a) {
  switches._fc2 = switches_48, switches._fe2 = switches_45, switches._err3 = a;
  return switches.jumpH(void 0, switches_13, switches_45);
}

function switches_58(switches, a) {
  switches._fc3 = switches_49, switches._fe3 = switches_45, switches._err4 = a;
  return switches.jumpH(void 0, switches_17, switches_45);
}

function switches_59(switches, a) {
  switches._fc4 = switches_50, switches._fe4 = switches_45, switches._err5 = a;
  return switches.jumpH(void 0, switches_22, switches_45);
}

function switches_60(switches, a) {
  switches._fc5 = switches_51, switches._fe5 = switches_45, switches._err6 = a;
  return switches.jumpH(void 0, switches_27, switches_45);
}

function switches_61(switches, a) {
  switches._fc6 = switches_52, switches._fe6 = switches_45, switches._err7 = a;
  return switches.jumpH(void 0, switches_33, switches_45);
}

function switches_62(switches, a) {
  switches._fc8 = switches_53, switches._fe8 = switches_45, switches._err8 = a;
  return switches.jumpH(void 0, switches_43, switches_45);
}

function switches_63(switches, a) {
  switches._fc7 = switches_43, switches._fe7 = switches_45, switches._fc8 = switches_54, switches._fe8 = switches_45, switches._err9 = a;
  return switches.jumpH(void 0, switches_42, switches_62);
}

function c_1(c) {
  return c.yldH(1, c_2, c_11);
}

function c_2(c) {
  c._loop = c.iterator(somethng);
  return c.jumpH(void 0, c_3, c_14);
}

function c_3(c) {
  if (!(c._loop = c._loop.step()).done) {
    c._i = c._loop.value;
    c._loop1 = c.iteratorM(somethingElse);
    return c.jumpRH(void 0, c_4, c_15);
  } else {
    c._fc1 = c_10, c._fe1 = c_11;
    return c.jumpH(void 0, c_9, c_11);
  }
}

function c_4(c) {
  return c.chainH(c._loop1.step(), c_5, c_15);
}

function c_5(c, d) {
  var a, b;
  b = c._loop1 = d;
  a = b.done;

  if (!a) {
    c._j = c._loop1.value;
    return c.yldH(c._i, c_6, c_15);
  } else {
    c._fc = c_3, c._fe = c_14;
    return c.jumpH(void 0, c_8, c_14);
  }
}

function c_6(c, a) {
  switch (a) {
    case 1:
      c._fc = c_9, c._fe = c_11, c._fc1 = c_10, c._fe1 = c_11, c._r = 10;
      return c.jumpH(void 0, c_8, c_14);

    case 2:
      return c.jumpRH(void 0, c_7, c_15);

    case 3:
      return c.jumpRH(void 0, c_4, c_15);

    case 5:
      c._fc = c_3, c._fe = c_14;
      return c.jumpH(void 0, c_8, c_14);

    case 6:
      c._fc = c_9, c._fe = c_11, c._fc1 = c_10, c._fe1 = c_11;
      return c.jumpH(void 0, c_8, c_14);

    default:
      return c.jumpRH(void 0, c_7, c_15);
  }
}

function c_7(c) {
  c._fc = c_3, c._fe = c_14;
  return c.jumpH(void 0, c_8, c_14);
}

function c_8(c) {
  if (c._loop1.exit) {
    c._err1 = c._err2;
    return c.chainH(c._loop1.exit(), c._fc, c._fe);
  } else {
    c._err1 = c._err2;
    return c.jumpH(void 0, c._fc, c._fe);
  }
}

function c_9(c) {
  if (c._loop.exit) {
    c._loop.exit();
  }

  return c.jumpH(void 0, c._fc1, c._fe1);
}

function c_10(c) {
  return c.pure(c._r);
}

function c_11(c, e) {
  return c.raise(e);
}

function c_12(c) {
  return c.raise(c._err1);
}

function c_13(c) {
  return c.raise(c._err2);
}

function c_14(c, a) {
  c._fc1 = c_12, c._fe1 = c_11, c._err1 = a;
  return c.jumpH(void 0, c_9, c_11);
}

function c_15(c, a) {
  c._fc = c_9, c._fe = c_11, c._fc1 = c_13, c._fe1 = c_11, c._err2 = a;
  return c.jumpH(void 0, c_8, c_14);
}

function method_1(ctx) {
  return ctx.chainH(something, method_2, method_3);
}

function method_2(ctx) {
  return ctx.pure();
}

function method_3(ctx, e) {
  return ctx.raise(e);
}

function _method_1(ctx) {
  return ctx.chainH(somethingElse, _method_2, _method_3);
}

function _method_2(ctx) {
  return ctx.pure();
}

function _method_3(ctx, e) {
  return ctx.raise(e);
}

function method_11(ctx) {
  return ctx.chainH(something, method_21, method_31);
}

function method_21(ctx) {
  return ctx.pure();
}

function method_31(ctx, e) {
  return ctx.raise(e);
}

function m2_1(ctx) {
  return ctx.chainH(something, m2_2, m2_3);
}

function m2_2(ctx) {
  return ctx.pure();
}

function m2_3(ctx, e) {
  return ctx.raise(e);
}

function m1_1(ctx) {
  return ctx.chainH(somethingElse, m1_2, m1_3);
}

function m1_2(ctx) {
  return ctx.pure();
}

function m1_3(ctx, e) {
  return ctx.raise(e);
}

function f_1(ctx) {
  return ctx.chainH(something, f_2, f_3);
}

function f_2(ctx) {
  return ctx.pure();
}

function f_3(ctx, e) {
  return ctx.raise(e);
}

function _f_1(ctx) {
  return ctx.chainH(somethingElse, _f_2, _f_3);
}

function _f_2(ctx) {
  return ctx.pure();
}

function _f_3(ctx, e) {
  return ctx.raise(e);
}

function f_11(ctx) {
  return ctx.chainH(ctx._i, f_21, f_31);
}

function f_21(ctx, r) {
  return ctx.pure(r);
}

function f_31(ctx, e) {
  return ctx.raise(e);
}

function f_12(ctx) {
  return ctx.chainH(ctx._i, f_22, f_32);
}

function f_22(ctx, a) {
  ctx._f = a;
  return ctx.pure();
}

function f_32(ctx, e) {
  return ctx.raise(e);
}

function zz_1(_zz) {
  return _zz.chainH(_zz._i, zz_2, zz_3);
}

function zz_2(_zz) {
  return _zz.pure();
}

function zz_3(_zz, e) {
  return _zz.raise(e);
}