import * as M from "@effectful/core";
function a1() {
  var a1 = M.context();
  return M.scope(a1_1);
}
function a2() {
  var a2 = M.context();
  a2.$handle = a2_8;
  a2.$step = a2_1;
  return a2.unwrap;
}
function a3() {
  var a3 = M.context();
  a3.$run = a3_1;
  a3.$handle = 1;
  a3.$step = 5;
  return 5(a3);
}
function a4() {
  var a4 = M.context();
  a4.$run = a4_1;
  a4.$handle = 1;
  a4.$step = 5;
  return a4;
}
function a5() {
  var a5 = M.context();
  a5.$run = a5_1;
  a5.$handle = 1;
  a5.$step = 4;
  return a5;
}
function a6() {
  var a6 = M.context();
  a6.$run = a6_1;
  a6.$handle = 1;
  a6.$step = 5;
  return a6;
}
function a7() {
  var a7 = M.context();
  a7.$run = a7_1;
  a7.$handle = 1;
  a7.$step = 4;
  return a7;
}
function a8() {
  var a8 = M.context();
  a8.$run = a8_1;
  a8.$handle = 1;
  a8.$step = 5;
  return a8;
}
function a9() {
  var a9 = M.context();
  a9.$run = a9_1;
  a9.$handle = 1;
  a9.$step = 5;
  return a9;
}
function rt_seq_nc() {
  var e,
    rt_seq_nc = M.context(),
    ex,
    r;
  rt_seq_nc.$run = _1;
  rt_seq_nc.$err = _err;
  rt_seq_nc.$step = 5;
  return rt_seq_nc.scope();
  function _1(rt_seq_nc, p) {
    switch (rt_seq_nc.$cur = rt_seq_nc.$step) {
      case 5:
        rt_seq_nc.$step = 6;
        return Promise.resolve(a_1).then(rt_seq_nc.$resolve, rt_seq_nc.$reject);
      case 6:
        rt_seq_nc.$step = 8;
        return Promise.resolve(a_2).then(rt_seq_nc.$resolve, rt_seq_nc.$reject);
      case 7:
        e = ex;
        rt_seq_nc.$step = 8;
        e = null, ex = null;
        return Promise.resolve(e_1).then(rt_seq_nc.$resolve, rt_seq_nc.$reject);
      case 8:
        return Promise.resolve();
      case 0:
        return Promise.resolve(p);
      case 9:
        rt_seq_nc.$step = 7;
        ex = p;
        return 7(rt_seq_nc);
      default:
        throw new Error("invalid state");
    }
  }
}
function rs_seq_nc() {
  var i,
    j,
    e,
    rs_seq_nc = M.context(),
    loop,
    _i,
    ex,
    fc,
    _fc,
    r,
    err,
    _err;
  rs_seq_nc.$run = _1;
  rs_seq_nc.$err = __err;
  rs_seq_nc.$fin = _fin;
  rs_seq_nc.$step = 5;
  return rs_seq_nc.scope();
  function _1(rs_seq_nc, p) {
    var a;
    switch (rs_seq_nc.$cur = rs_seq_nc.$step) {
      case 5:
        i = 0;
        a = hi(i);
        rs_seq_nc.$step = 6;
        return Promise.resolve(a).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 6:
        i++;
        rs_seq_nc.$step = 7;
        return 7(rs_seq_nc);
      case 7:
        rs_seq_nc.$step = 8;
        return Promise.resolve(a_1).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 8:
        rs_seq_nc.$step = 9;
        return Promise.resolve(a_2).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 9:
        a = a_3(p);
        rs_seq_nc.$step = 10;
        return Promise.resolve(a).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 10:
        loop = M.iterator(something);
        rs_seq_nc.$step = 11;
        return 11(rs_seq_nc);
      case 11:
        if (!(_i = loop.next()).done) {
          j = _i.value;
          a = a_4(j);
          rs_seq_nc.$step = 11;
          return Promise.resolve(a).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
        } else {
          rs_seq_nc.$step = 12;
          fc = 14, _fc = 15, j = null, _i = null;
          return 12(rs_seq_nc);
        }
      case 12:
        if (loop.return) {
          loop.return();
        }
        rs_seq_nc.$step = fc;
        ex = _err, a = fc, loop = null, fc = null, _err = null;
        return a(rs_seq_nc);
      case 13:
        e = ex;
        rs_seq_nc.$step = 14;
        _fc = 15, a = e, e = null, ex = null;
        return Promise.resolve(a).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 14:
        rs_seq_nc.$step = _fc;
        a = _fc, _fc = null;
        return Promise.resolve(f_1).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 15:
        a = m_1(i);
        rs_seq_nc.$step = 16;
        i = null;
        return Promise.resolve(a).then(rs_seq_nc.$resolve, rs_seq_nc.$reject);
      case 16:
        return Promise.resolve();
      case 0:
        return Promise.resolve(p);
      case 17:
        rs_seq_nc.$step = 0;
        a = r, r = null;
        return 0(rs_seq_nc, a);
      case 18:
        return rs_seq_nc.$step = 0, Promise.reject(err);
      case 19:
        rs_seq_nc.$step = 13;
        ex = p;
        return 13(rs_seq_nc);
      case 20:
        rs_seq_nc.$step = 14;
        _fc = 17, r = p;
        return 14(rs_seq_nc);
      case 21:
        rs_seq_nc.$step = 12;
        fc = 13, _err = p;
        return 12(rs_seq_nc);
      case 22:
        rs_seq_nc.$step = 12;
        fc = 14, _fc = 17, r = p;
        return 12(rs_seq_nc);
      case 23:
        rs_seq_nc.$step = 13;
        ex = p;
        return 13(rs_seq_nc);
      case 24:
        rs_seq_nc.$step = 14;
        _fc = 18, err = p;
        return 14(rs_seq_nc);
      default:
        throw new Error("invalid state");
    }
  }
}
function rt_seq() {
  var e, ex, r, $step, $cur;
  $step = 5;
  return _1(void 0);
  function _1(p) {
    switch ($cur = $step) {
      case 5:
        $step = 6;
        return Promise.resolve(a_1).then(_1, $reject);
      case 6:
        $step = 8;
        return Promise.resolve(a_2).then(_1, $reject);
      case 7:
        e = ex;
        $step = 8;
        e = null, ex = null;
        return Promise.resolve(e_1).then(_1, $reject);
      case 8:
        return Promise.resolve();
      case 0:
        return Promise.resolve(p);
      case 9:
        $step = 7;
        ex = p;
        return 7();
      default:
        throw new Error("invalid state");
    }
  }
  function $reject(e) {
    $step = _err1($cur);
    return _1(e);
  }
}
function rs_seq() {
  var i, j, e, loop, _i, ex, fc, _fc, r, err, _err, $step, $cur;
  $step = 5;
  return _1(void 0);
  function _1(p) {
    var a;
    switch ($cur = $step) {
      case 5:
        i = 0;
        a = hi(i);
        $step = 6;
        return Promise.resolve(a).then(_1, $reject);
      case 6:
        i++;
        $step = 7;
        return 7();
      case 7:
        $step = 8;
        return Promise.resolve(a_1).then(_1, $reject);
      case 8:
        $step = 9;
        return Promise.resolve(a_2).then(_1, $reject);
      case 9:
        a = a_3(p);
        $step = 10;
        return Promise.resolve(a).then(_1, $reject);
      case 10:
        loop = M.iterator(something);
        $step = 11;
        return 11();
      case 11:
        if (!(_i = loop.next()).done) {
          j = _i.value;
          a = a_4(j);
          $step = 11;
          return Promise.resolve(a).then(_1, $reject);
        } else {
          $step = 12;
          fc = 14, _fc = 15, j = null, _i = null;
          return 12();
        }
      case 12:
        if (loop.return) {
          loop.return();
        }
        $step = fc;
        ex = _err, a = fc, loop = null, fc = null, _err = null;
        return a();
      case 13:
        e = ex;
        $step = 14;
        _fc = 15, a = e, e = null, ex = null;
        return Promise.resolve(a).then(_1, $reject);
      case 14:
        $step = _fc;
        a = _fc, _fc = null;
        return Promise.resolve(f_1).then(_1, $reject);
      case 15:
        a = m_1(i);
        $step = 16;
        i = null;
        return Promise.resolve(a).then(_1, $reject);
      case 16:
        return Promise.resolve();
      case 0:
        return Promise.resolve(p);
      case 17:
        $step = 0;
        a = r, r = null;
        return 0(a);
      case 18:
        return $step = 0, Promise.reject(err);
      case 19:
        $step = 13;
        ex = p;
        return 13();
      case 20:
        $step = 14;
        _fc = 17, r = p;
        return 14();
      case 21:
        $step = 12;
        fc = 13, _err = p;
        return 12();
      case 22:
        $step = 12;
        fc = 14, _fc = 17, r = p;
        return 12();
      case 23:
        $step = 13;
        ex = p;
        return 13();
      case 24:
        $step = 14;
        _fc = 18, err = p;
        return 14();
      default:
        throw new Error("invalid state");
    }
  }
  function $reject(e) {
    $step = _err2($cur);
    return _1(e);
  }
}
function lt_seq() {
  var e,
    ex,
    r,
    $loop = $loop$impl,
    $res,
    a,
    $rs,
    $rj,
    $step,
    $cur;
  $res = new Promise(function (rs, rj) {
    $rs = rs, $rj = rj;
  });
  $step = 5;
  a = _1(void 0);
  Promise.resolve(a).then($loop, $reject);
  return $res;
  function _1(p) {
    switch ($cur = $step) {
      case 5:
        $step = 6;
        return a_1;
      case 6:
        $step = 8;
        return a_2;
      case 7:
        e = ex;
        $step = 8;
        e = null, ex = null;
        return e_1;
      case 8:
        return $loop = void 0, $rs();
      case 0:
        return $loop = void 0, $rs(p);
      case 9:
        $step = 7;
        ex = p;
        return 7();
      default:
        throw new Error("invalid state");
    }
  }
  function $loop$impl(p) {
    Promise.resolve(_1(p)).then($loop, $reject);
  }
  function $reject(e) {
    $step = _err3($cur);
    $loop && $loop(e);
  }
}
function ls_seq() {
  var i,
    j,
    e,
    loop,
    _i,
    ex,
    fc,
    _fc,
    r,
    err,
    _err,
    $loop = $loop$impl,
    $res,
    a,
    $rs,
    $rj,
    $step,
    $cur;
  $res = new Promise(function (rs, rj) {
    $rs = rs, $rj = rj;
  });
  $step = 5;
  a = _1(void 0);
  Promise.resolve(a).then($loop, $reject);
  return $res;
  function _1(p) {
    var a;
    switch ($cur = $step) {
      case 5:
        i = 0;
        a = hi(i);
        $step = 6;
        return a;
      case 6:
        i++;
        $step = 7;
        return 7();
      case 7:
        $step = 8;
        return a_1;
      case 8:
        $step = 9;
        return a_2;
      case 9:
        a = a_3(p);
        $step = 10;
        return a;
      case 10:
        loop = M.iterator(something);
        $step = 11;
        return 11();
      case 11:
        if (!(_i = loop.next()).done) {
          j = _i.value;
          a = a_4(j);
          $step = 11;
          return a;
        } else {
          $step = 12;
          fc = 14, _fc = 15, j = null, _i = null;
          return 12();
        }
      case 12:
        if (loop.return) {
          loop.return();
        }
        $step = fc;
        ex = _err, a = fc, loop = null, fc = null, _err = null;
        return a();
      case 13:
        e = ex;
        $step = 14;
        _fc = 15, a = e, e = null, ex = null;
        return a;
      case 14:
        $step = _fc;
        a = _fc, _fc = null;
        return f_1;
      case 15:
        a = m_1(i);
        $step = 16;
        i = null;
        return a;
      case 16:
        return $loop = void 0, $rs();
      case 0:
        return $loop = void 0, $rs(p);
      case 17:
        $step = 0;
        a = r, r = null;
        return 0(a);
      case 18:
        return $loop = void 0, $rj(err);
      case 19:
        $step = 13;
        ex = p;
        return 13();
      case 20:
        $step = 14;
        _fc = 17, r = p;
        return 14();
      case 21:
        $step = 12;
        fc = 13, _err = p;
        return 12();
      case 22:
        $step = 12;
        fc = 14, _fc = 17, r = p;
        return 12();
      case 23:
        $step = 13;
        ex = p;
        return 13();
      case 24:
        $step = 14;
        _fc = 18, err = p;
        return 14();
      default:
        throw new Error("invalid state");
    }
  }
  function $loop$impl(p) {
    Promise.resolve(_1(p)).then($loop, $reject);
  }
  function $reject(e) {
    $step = _err4($cur);
    $loop && $loop(e);
  }
}
/*
M.option({
  leftChain:false,
  par:true,
  parRegion:true,
  cleanupFrameVars:false
})

async function rt_par() {
  try {
    await a_1
    await a_2
  } catch(e) {
    await e_1
  }
}

async function rs_par() {
  let i = 0
  await hi(i)
  i++
  try {
    await a_1
    await a_3(await a_2)
    for(const j of something)
      await a_4(j)
  } catch(e) {
    await e
  } finally {
    await f_1
  }
  await m_1(i)
}

M.option({leftChain:true})

async function rt_par() {
  try {
    await a_1
    await a_2
  } catch(e) {
    await e_1
  }
}

async function rs_par() {
  let i = 0
  await hi(i)
  i++
  try {
    await a_1
    await a_3(await a_2)
    for(const j of something)
      await a_4(j)
  } catch(e) {
    await e
  } finally {
    await f_1
  }
  await m_1(i)
}
*/
function a1_1(a1) {
  return M.yld(1, a1_2);
}
function a1_2(a1, a) {
  if (a) {
    return M.yld(2, a1_3);
  } else {
    return M.yldStar(b, a1_6);
  }
}
function a1_3(a1, a) {
  var k;
  k = a;
  return M.chain(k, a1_4);
}
function a1_4(a1, a) {
  return M.yld(a, a1_5);
}
function a1_5(a1, a) {
  return M.pure(a);
}
function a1_6(a1) {
  return M.pure();
}
function a1_7(a1, r) {
  return M.pure(r);
}
function a2_1(a2) {
  a2.$step = a2_2;
  a2.value = 1;
  return a2;
}
function a2_2(a2, a) {
  if (a) {
    a2.$step = a2_3;
    a2.value = 2;
    return a2;
  } else {
    a2.$step = a2_6;
    return M.$delegate(b);
  }
}
function a2_3(a2, a) {
  var k;
  k = a;
  a2.$step = a2_4;
  return Promise.resolve(k).then(M.$resolve, M.$reject);
}
function a2_4(a2, a) {
  a2.$step = a2_5;
  a2.value = a;
  return a2;
}
function a2_5(a2, a) {
  return M.pure(a);
}
function a2_6(a2) {
  return M.pure();
}
function a2_7(a2, r) {
  return M.pure(r);
}
function a2_8(a2, e) {
  a2.$handle = a2_8;
  throw e;
}
function a3_1(a3, p) {
  var k;
  switch (a3.$step) {
    case 5:
      a3.$step = 6;
      return {
        value: 1,
        done: false
      };
    case 6:
      if (p) {
        a3.$step = 7;
        return {
          value: 2,
          done: false
        };
      } else {
        a3.$step = 10;
        return M.$delegate(b);
      }
    case 7:
      k = p;
      a3.$step = 8;
      return Promise.resolve(k).then(M.$resolve, M.$reject);
    case 8:
      a3.$step = 9;
      return {
        value: p,
        done: false
      };
    case 9:
      a3.$step = 0;
      return {
        value: p,
        done: true
      };
    case 10:
      a3.$step = 0;
      return {
        value: void 0,
        done: true
      };
    case 0:
      a3.$step = 0;
      return {
        value: p,
        done: true
      };
    case 1:
      a3.$handle = 1;
      return a3.$step = 0, Promise.reject(p);
    case 2:
      return Promise.resolve(M.$redir(p)).then(a3.$resolve, a3.$reject);
    case 3:
      return M.$redirResult(p);
    default:
      throw new Error("invalid state");
  }
}
function a4_1(a4, p) {
  var k;
  switch (a4.$step) {
    case 5:
      a4.$step = 6;
      return Promise.resolve({
        value: 1,
        done: false
      });
    case 6:
      if (p) {
        a4.$step = 7;
        return Promise.resolve({
          value: 2,
          done: false
        });
      } else {
        a4.$step = 10;
        return M.$delegate(b);
      }
    case 7:
      k = p;
      a4.$step = 8;
      return Promise.resolve(k).then(M.$resolve, M.$reject);
    case 8:
      a4.$step = 9;
      return Promise.resolve({
        value: p,
        done: false
      });
    case 9:
      return Promise.resolve(p);
    case 10:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a4.$handle = 1;
      return a4.$step = 0, Promise.reject(p);
    case 2:
      return Promise.resolve(M.$redir(p)).then(a4.$resolve, a4.$reject);
    case 3:
      return M.$redirResult(p);
    default:
      throw new Error("invalid state");
  }
}
function a5_1(a5, p) {
  var a;
  switch (a5.$step) {
    case 4:
      a5._loop = M.iterator(b);
      a5.$step = 5;
      return 5(a5);
    case 5:
      a5.$handle = 10;
      if (!(a5._loop = a5._loop.step()).done) {
        a5._i = a5._loop.value;
        a5.$step = 5;
        return M.$delegate(M.yld(a5._i));
      } else {
        a5.$step = 6;
        a5._fc = 7, a5._i = null;
        return 6(a5);
      }
    case 6:
      a5.$handle = 1;
      if (a5._loop.exit) {
        a5._loop.exit();
      }
      a5.$step = a5._fc;
      a = a5._fc, a5._loop = null, a5._fc = null;
      return a(a5);
    case 7:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a5.$handle = 1;
      return a5.$step = 0, Promise.reject(p);
    case 8:
      a5.$step = 0;
      a = a5._r, a5._r = null;
      return 0(a5, a);
    case 9:
      return a5.$step = 0, Promise.reject(a5._err1);
    case 10:
      a5.$step = 6;
      a5._fc = 9, a5._err1 = p;
      return 6(a5);
    case 11:
      a5.$step = 6;
      a5._fc = 8, a5._r = p;
      return 6(a5);
    case 2:
      return M.$redir(p);
    default:
      throw new Error("invalid state");
  }
}
function a6_1(a6, p) {
  var a, c;
  switch (a6.$step) {
    case 5:
      a6._loop = M.iteratorM(b);
      a6.$step = 6;
      return 6(a6);
    case 6:
      a6.$handle = 12;
      a6.$step = 7;
      c = a6._loop, a6._loop = null;
      return Promise.resolve(c.step()).then(M.$resolve, M.$reject);
    case 7:
      c = a6._loop = p;
      a = c.done;
      if (!a) {
        a6._i = a6._loop.value;
        a6.$step = 6;
        return Promise.resolve({
          value: a6._i,
          done: false
        });
      } else {
        a6.$step = 8;
        a6._fc = 9, a6._i = null;
        return 8(a6);
      }
    case 8:
      a6.$handle = 1;
      if (a6._loop.exit) {
        a6.$step = a6._fc;
        c = a6._loop, a = a6._fc, a6._loop = null, a6._fc = null;
        return Promise.resolve(c.exit()).then(M.$resolve, M.$reject);
      } else {
        a6.$step = a6._fc;
        c = a6._fc, a6._loop = null, a6._fc = null;
        return c(a6);
      }
    case 9:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a6.$handle = 1;
      return a6.$step = 0, Promise.reject(p);
    case 10:
      a6.$step = 0;
      c = a6._r, a6._r = null;
      return 0(a6, c);
    case 11:
      return a6.$step = 0, Promise.reject(a6._err1);
    case 12:
      a6.$step = 8;
      a6._fc = 11, a6._err1 = p;
      return 8(a6);
    case 13:
      a6.$step = 8;
      a6._fc = 10, a6._r = p;
      return 8(a6);
    default:
      throw new Error("invalid state");
  }
}
function a7_1(a7, p) {
  var a;
  switch (a7.$step) {
    case 4:
      a7._loop = M.iterator(b);
      a7.$step = 5;
      return 5(a7);
    case 5:
      a7.$handle = 10;
      if (!(a7._i1 = a7._loop.next()).done) {
        a7._i = a7._i1.value;
        a7.$step = 5;
        return M.$delegate(M.yld(a7._i));
      } else {
        a7.$step = 6;
        a7._fc = 7, a7._i = null, a7._i1 = null;
        return 6(a7);
      }
    case 6:
      a7.$handle = 1;
      if (a7._loop.return) {
        a7._loop.return();
      }
      a7.$step = a7._fc;
      a = a7._fc, a7._loop = null, a7._fc = null;
      return a(a7);
    case 7:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a7.$handle = 1;
      return a7.$step = 0, Promise.reject(p);
    case 8:
      a7.$step = 0;
      a = a7._r, a7._r = null;
      return 0(a7, a);
    case 9:
      return a7.$step = 0, Promise.reject(a7._err1);
    case 10:
      a7.$step = 6;
      a7._fc = 9, a7._err1 = p;
      return 6(a7);
    case 11:
      a7.$step = 6;
      a7._fc = 8, a7._r = p;
      return 6(a7);
    case 2:
      return M.$redir(p);
    default:
      throw new Error("invalid state");
  }
}
function a8_1(a8, p) {
  var a, c;
  switch (a8.$step) {
    case 5:
      a8._loop = M.iteratorM(b);
      a8.$step = 6;
      return 6(a8);
    case 6:
      a8.$handle = 12;
      a8.$step = 7;
      c = a8._loop, a8._loop = null;
      return Promise.resolve(c.step()).then(M.$resolve, M.$reject);
    case 7:
      c = a8._loop = p;
      a = c.done;
      if (!a) {
        a8._i = a8._loop.value;
        a8.$step = 6;
        return Promise.resolve({
          value: a8._i,
          done: false
        });
      } else {
        a8.$step = 8;
        a8._fc = 9, a8._i = null;
        return 8(a8);
      }
    case 8:
      a8.$handle = 1;
      if (a8._loop.exit) {
        a8.$step = a8._fc;
        c = a8._loop, a = a8._fc, a8._loop = null, a8._fc = null;
        return Promise.resolve(c.exit()).then(M.$resolve, M.$reject);
      } else {
        a8.$step = a8._fc;
        c = a8._fc, a8._loop = null, a8._fc = null;
        return c(a8);
      }
    case 9:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a8.$handle = 1;
      return a8.$step = 0, Promise.reject(p);
    case 10:
      a8.$step = 0;
      c = a8._r, a8._r = null;
      return 0(a8, c);
    case 11:
      return a8.$step = 0, Promise.reject(a8._err1);
    case 12:
      a8.$step = 8;
      a8._fc = 11, a8._err1 = p;
      return 8(a8);
    case 13:
      a8.$step = 8;
      a8._fc = 10, a8._r = p;
      return 8(a8);
    default:
      throw new Error("invalid state");
  }
}
function a9_1(a9, p) {
  var i, a, c;
  switch (a9.$step) {
    case 5:
      a9._loop = M.iteratorM(b);
      a9.$step = 6;
      return 6(a9);
    case 6:
      a9.$handle = 12;
      a9.$step = 7;
      return Promise.resolve(a9._loop.next()).then(M.$resolve, M.$reject);
    case 7:
      c = i = p;
      a = c.done;
      if (!a) {
        a9._i = i.value;
        a9.$step = 6;
        return Promise.resolve({
          value: a9._i,
          done: false
        });
      } else {
        a9.$step = 8;
        a9._fc = 9, a9._i = null;
        return 8(a9);
      }
    case 8:
      a9.$handle = 1;
      if (a9._loop.return) {
        a9.$step = a9._fc;
        c = a9._loop, a = a9._fc, a9._loop = null, a9._fc = null;
        return Promise.resolve(c.return()).then(M.$resolve, M.$reject);
      } else {
        a9.$step = a9._fc;
        c = a9._fc, a9._loop = null, a9._fc = null;
        return c(a9);
      }
    case 9:
      return Promise.resolve();
    case 0:
      return Promise.resolve(p);
    case 1:
      a9.$handle = 1;
      return a9.$step = 0, Promise.reject(p);
    case 10:
      a9.$step = 0;
      c = a9._r, a9._r = null;
      return 0(a9, c);
    case 11:
      return a9.$step = 0, Promise.reject(a9._err1);
    case 12:
      a9.$step = 8;
      a9._fc = 11, a9._err1 = p;
      return 8(a9);
    case 13:
      a9.$step = 8;
      a9._fc = 10, a9._r = p;
      return 8(a9);
    default:
      throw new Error("invalid state");
  }
}
function _err(s) {
  switch (s) {
    case 5:
    case 6:
      return 9;
    default:
      return 1;
  }
}
function __err(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
      return 19;
    case 11:
      return 21;
    case 12:
      return 23;
    case 13:
      return 24;
    default:
      return 1;
  }
}
function _fin(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
    case 13:
      return 20;
    case 11:
      return 22;
    default:
      return 0;
  }
}
function _err1(s) {
  switch (s) {
    case 5:
    case 6:
      return 9;
    default:
      return 1;
  }
}
function _err2(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
      return 19;
    case 11:
      return 21;
    case 12:
      return 23;
    case 13:
      return 24;
    default:
      return 1;
  }
}
function __fin(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
    case 13:
      return 20;
    case 11:
      return 22;
    default:
      return 0;
  }
}
function _err3(s) {
  switch (s) {
    case 5:
    case 6:
      return 9;
    default:
      return 1;
  }
}
function _err4(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
      return 19;
    case 11:
      return 21;
    case 12:
      return 23;
    case 13:
      return 24;
    default:
      return 1;
  }
}
function _fin1(s) {
  switch (s) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
    case 13:
      return 20;
    case 11:
      return 22;
    default:
      return 0;
  }
}