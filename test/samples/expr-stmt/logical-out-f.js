function a1() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? M.pure(a) : eff(2);
  }
}

function a2() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? eff(2) : M.pure(a);
  }
}

function a3() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? _2(a) : M.jM(eff(2), _2);
  }

  function _2(a) {
    return a ? M.pure(a) : eff(3);
  }
}

function a4() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? M.jM(eff(2), _2) : _2(a);
  }

  function _2(a) {
    return a ? eff(3) : M.pure(a);
  }
}

function a5() {
  return 1 ? M.pure(a) : eff(2);
}

function a6() {
  return M.jMB(eff(2), _1);

  function _1(a) {
    a ? a : 1;
    return M.pure();
  }
}

function a7() {
  return 1 + 1 ? M.pure(c) : eff(2);
}

function a8() {
  return M.jMB(eff(2), _1);

  function _1(a) {
    a ? a : 1 + 1;
    return M.pure();
  }
}

function a9() {
  return 1 ? eff(2) : M.pure(d);
}

function a10() {
  return M.jMB(eff(2), _1);

  function _1(a) {
    a ? 1 : a;
    return M.pure();
  }
}

function a11() {
  return 1 + 1 ? eff(2) : M.pure(e);
}

function a12() {
  return M.jMB(eff(2), _1);

  function _1(a) {
    a ? 1 + 1 : a;
    return M.pure();
  }
}

function a13() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? eff(2) : eff(3);
  }
}

function a14() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? M.pure(2) : eff(3);
  }
}

function a15() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? eff(2) : M.pure(3);
  }
}

function a16() {
  return 1 ? eff(2) : eff(3);
}

function a17() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    console.log(a ? 2 : 3);
    return M.pure();
  }
}

function a18() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return M.jMB1(eff(2), _2, a);
  }

  function _2(b, a) {
    a + b ? 2 : 3;
    return M.pure();
  }
}

function a19() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? _3(a) : M.jM(eff(2), _2);
  }

  function _2() {
    return M.jM(eff(3), _3);
  }

  function _3(a) {
    return eff(a);
  }
}

function b() {
  return M.jMB(eff(1), _1);

  function _1(a) {
    return a ? _2(a) : M.jM(eff(2), _2);
  }

  function _2() {
    return M.jMB(eff(1), _3);
  }

  function _3(a) {
    return a ? M.jM(eff(2), _4) : _4(a);
  }

  function _4() {
    return 1 ? _5(f) : M.jM(eff(2), _5);
  }

  function _5() {
    return M.jMB(eff(2), _6);
  }

  function _6(a) {
    a ? a : 1;
    return 1 + 1 ? _7(g) : M.jM(eff(2), _7);
  }

  function _7() {
    return M.jMB(eff(2), _8);
  }

  function _8(a) {
    a ? a : 1 + 1;
    return 1 ? M.jM(eff(2), _9) : _9(h);
  }

  function _9() {
    return M.jMB(eff(2), _10);
  }

  function _10(a) {
    a ? 1 : a;
    return 1 + 1 ? M.jM(eff(2), _11) : _11(k);
  }

  function _11() {
    return M.jMB(eff(2), _12);
  }

  function _12(a) {
    a ? 1 + 1 : a;
    return M.jMB(eff(1), _13);
  }

  function _13(a) {
    return a ? M.jM(eff(2), _14) : M.jM(eff(3), _14);
  }

  function _14() {
    return M.jMB(eff(1), _15);
  }

  function _15(a) {
    return a ? _16(2) : M.jM(eff(3), _16);
  }

  function _16() {
    return M.jMB(eff(1), _17);
  }

  function _17(a) {
    return a ? M.jM(eff(2), _18) : _18(3);
  }

  function _18() {
    return 1 ? M.jM(eff(2), _19) : M.jM(eff(3), _19);
  }

  function _19() {
    return M.jMB(eff(1), _20);
  }

  function _20(a) {
    a ? 2 : 3;
    return M.pure();
  }
}