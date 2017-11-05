function a() {
  var i;
  return M.chain(eff(2), _1, _3);

  function _1(b) {
    var loop, a;
    a = M.forInIterator(b);
    loop = a;
    return M.jump(_2, _3, loop);
  }

  function _2(loop) {
    if (!(loop = loop.step()).done) {
      i = loop.value;
      return M.repeat(eff(i), _2, _3, loop);
    } else {
      return M.pure();
    }
  }

  function _3(e) {
    return M.raise(e);
  }
}

function b() {
  var i;
  return M.chain(eff(2), _1, _3);

  function _1(b) {
    var loop, a;
    a = M.forInIterator(b);
    loop = a;
    return M.jump(_2, _3, loop);
  }

  function _2(loop) {
    if (!(loop = loop.step()).done) {
      i = loop.value;
      return M.repeat(eff(i), _2, _3, loop);
    } else {
      return M.pure();
    }
  }

  function _3(e) {
    return M.raise(e);
  }
}

function c() {
  var i;
  return M.chain(eff(2), _1, _3);

  function _1(b) {
    var loop, a;
    a = M.forInIterator(b);
    loop = a;
    return M.jump(_2, _3, loop);
  }

  function _2(loop) {
    if (!(loop = loop.step()).done) {
      i = loop.value;
      return M.repeat(eff(i), _2, _3, loop);
    } else {
      return M.pure();
    }
  }

  function _3(e) {
    return M.raise(e);
  }
}

function d() {
  var i;
  return M.chain(eff(2), _1, _2);

  function _1(a) {
    for (i in a) {
      console.log(i);
    }

    return M.pure();
  }

  function _2(e) {
    return M.raise(e);
  }
}

function e() {
  var i, loop;
  loop = M.forInIterator(obj);
  return M.jump(_1, _2, loop);

  function _1(loop) {
    if (!(loop = loop.step()).done) {
      i = loop.value;
      return M.repeat(eff(i), _1, _2, loop);
    } else {
      return M.pure();
    }
  }

  function _2(e) {
    return M.raise(e);
  }
}

function f() {
  for (var i in obj) {
    console.log(i);
  }
}

function g() {
  var i;
  return M.chain(eff('a'), _1, _8);

  function _1() {
    return M.chain(eff(2), _2, _8);
  }

  function _2(b) {
    var loop, a;
    a = M.forInIterator(b);
    loop = a;
    return M.jump(_3, _8, loop);
  }

  function _3(loop) {
    if (!(loop = loop.step()).done) {
      i = loop.value;
      return M.chain(eff(i), _4, _8, loop);
    } else {
      return M.jump(_6, _8);
    }
  }

  function _4(a, loop) {
    if (a) {
      return M.jump(_3, _8, loop);
    } else {
      return M.chain(effB(i), _5, _8, loop);
    }
  }

  function _5(a, loop) {
    if (a) {
      return M.jump(_6, _8);
    } else {
      return M.repeat(eff('c'), _3, _8, loop);
    }
  }

  function _6() {
    return M.chain(eff('z'), _7, _8);
  }

  function _7() {
    return M.pure();
  }

  function _8(e) {
    return M.raise(e);
  }
}

function h() {
  var j, i;
  return M.chain(eff('a'), _1, _14);

  function _1() {
    var loop;
    loop = M.forInIterator(obj);
    return M.jump(_2, _14, loop);
  }

  function _2(loop) {
    if (!(loop = loop.step()).done) {
      j = loop.value;
      console.log('j');
      return M.chain(effA(j), _3, _14, loop);
    } else {
      return M.jump(_12, _14);
    }
  }

  function _3(loop) {
    return M.chain(eff(j), _4, _14, loop);
  }

  function _4(b, loop) {
    var _loop, a;

    a = M.forInIterator(b);
    _loop = a;
    return M.jump(_5, _14, loop, _loop);
  }

  function _5(loop, _loop) {
    if (!(_loop = _loop.step()).done) {
      i = _loop.value;
      console.log('b');
      return M.chain(eff('b'), _6, _14, loop, _loop);
    } else {
      return M.jump(_11, _14, loop);
    }
  }

  function _6(loop, _loop) {
    return M.chain(eff(i + j), _7, _14, loop, _loop);
  }

  function _7(a, loop, _loop) {
    if (a) {
      return M.jump(_2, _14, loop);
    } else {
      return M.chain(effB(i + j), _8, _14, loop, _loop);
    }
  }

  function _8(a, loop, _loop) {
    if (a) {
      return M.jump(_12, _14);
    } else {
      return M.chain(eff(i), _9, _14, loop, _loop);
    }
  }

  function _9(a, loop, _loop) {
    if (a) {
      return M.jump(_5, _14, loop, _loop);
    } else {
      return M.chain(effB(i), _10, _14, loop, _loop);
    }
  }

  function _10(a, loop, _loop) {
    if (a) {
      return M.jump(_11, _14, loop);
    } else {
      return M.repeat(eff('c'), _5, _14, loop, _loop);
    }
  }

  function _11(loop) {
    return M.repeat(effB(j), _2, _14, loop);
  }

  function _12() {
    return M.chain(eff('z'), _13, _14);
  }

  function _13() {
    return M.pure();
  }

  function _14(e) {
    return M.raise(e);
  }
}