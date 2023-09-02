"use strict";

import * as M from "@effectful/core";
M = require("@effectfuljs/core");
Q = require("Q");
QM = require("@effectfuljs/promise")(Q);
describe("yop", function () {
  var ctx = M.context();
  return M.scope(f_112);
});
function addLater_1(addLater) {
  return M.chain(Q.defer(), addLater_2);
}
function f_11(ctx) {
  var a;
  a = ctx._addLater._deferred;
  return M.chain(a.resolve(ctx._addLater._a + ctx._addLater._b), f_21);
}
function f_21(ctx) {}
function addLater_2(addLater, a) {
  addLater._deferred = a;
  process.nextTick(function () {
    var ctx = M.context();
    ctx._addLater = addLater;
    return M.scope(f_11);
  });
  return addLater._deferred.promise;
}
function f_12(_ctx) {
  var a;
  if (_ctx._done.async) {
    a = _ctx._done;
    return M.chain(a.async(), f_22);
  } else {
    return M.jump(void 0, f_31);
  }
}
function f_22(_ctx, a) {
  _ctx._done = a;
  return M.jump(void 0, f_31);
}
function _f_1(ctx) {
  var a;
  a = ctx._f._addLater;
  return M.chain(a(1, 2), _f_2);
}
function f_1(_ctx) {
  _ctx._f1._result = _ctx._$dm$b;
  _ctx._$dm$b = null;
  return M.jump(void 0, f_2, f_7);
}
function f_2(_ctx) {
  var a;
  a = _ctx._f1._result;
  return M.chain(expect(a), f_3, f_7);
}
function f_3(_ctx, b) {
  var a;
  a = b.to;
  return M.chain(a.equal(3), f_4, f_7);
}
function f_4(_ctx) {
  var a;
  a = _ctx._f._done;
  return M.chain(a(), f_6);
}
function f_5(_ctx) {
  var err, a;
  err = _ctx._ex;
  a = _ctx._f._done;
  _ctx._ex = null;
  return M.chain(a(err), f_6);
}
function f_6(_ctx) {}
function f_7(_ctx, a) {
  _ctx._ex = a;
  return M.jump(void 0, f_5);
}
function _f_2(ctx, a) {
  return M.chain(a.mapply(function ($dm$b) {
    var _ctx = M.context();
    _ctx._$dm$b = $dm$b;
    _ctx._f = ctx._f;
    _ctx._f1 = ctx;
    return M.scope(f_1);
  }), _f_3);
}
function _f_3(ctx, a) {
  return a;
}
function f_31(_ctx) {
  return M.chain(M.run(QM, function () {
    var ctx = M.context();
    ctx._f = _ctx;
    return M.scope(_f_1);
  }), _f_4);
}
function _f_4(_ctx) {}
function f_112(ctx) {
  return M.chain(it("should yield fiber until promise is resolved", function (done) {
    var _ctx = M.context();
    _ctx._done = done;
    _ctx._addLater = function _addLater(a, b) {
      var addLater = M.context();
      addLater._a = a;
      addLater._b = b;
      return M.scope(addLater_1);
    };
    return M.scope(f_12);
  }), f_212);
}
function throwErrorLater_1(throwErrorLater) {
  return M.chain(Q.defer(), throwErrorLater_2);
}
function f_17(ctx) {
  var a;
  a = ctx._throwErrorLater._deferred;
  return M.chain(a.reject(new Error("promise rejected")), f_27);
}
function f_27(ctx) {}
function throwErrorLater_2(throwErrorLater, a) {
  throwErrorLater._deferred = a;
  process.nextTick(function () {
    var ctx = M.context();
    ctx._throwErrorLater = throwErrorLater;
    return M.scope(f_17);
  });
  return throwErrorLater._deferred.promise;
}
function f_18(ctx) {
  var a;
  if (ctx._done.async) {
    a = ctx._done;
    return M.chain(a.async(), f_28);
  } else {
    return M.jump(void 0, f_34);
  }
}
function f_28(ctx, a) {
  ctx._done = a;
  return M.jump(void 0, f_34);
}
function f_15(ctx) {
  var a;
  a = ctx._f._throwErrorLater;
  return M.chain(a(), f_25);
}
function f_13(_ctx) {
  var a;
  a = _ctx._err.message;
  _ctx._err = null;
  return M.chain(expect(a), f_23, _f_7);
}
function f_23(_ctx, b) {
  var a;
  a = b.to;
  return M.chain(a.equal("promise rejected"), f_32, _f_7);
}
function f_32(_ctx) {
  var a;
  a = _ctx._f._done;
  return M.chain(a(), _f_5);
}
function f_41(_ctx) {
  var expectErr, a;
  expectErr = _ctx._ex;
  a = _ctx._f._done;
  _ctx._ex = null;
  return M.chain(a(expectErr), _f_5);
}
function _f_5(_ctx) {
  var a;
  a = _ctx._f1._$dm$root;
  return M.chain(a.brk(), _f_6);
}
function _f_6(_ctx, a) {
  return a;
}
function _f_7(_ctx, a) {
  _ctx._ex = a;
  return M.jump(void 0, f_41);
}
function f_25(ctx, a) {
  return M.chain(a.mhandle(function (err) {
    var _ctx = M.context();
    _ctx._err = err;
    _ctx._f = ctx._f;
    _ctx._f1 = ctx;
    return M.scope(f_13, _f_7);
  }), f_33);
}
function f_14(_ctx) {
  var a;
  a = _ctx._f._done;
  return M.chain(a(new Error("yop should have thrown reason from rejected promise")), f_24);
}
function f_24(_ctx) {}
function f_33(ctx, a) {
  return M.chain(a.mapply(function () {
    var _ctx = M.context();
    _ctx._f = ctx._f;
    return M.scope(f_14);
  }), f_42);
}
function f_42(ctx, a) {
  return a;
}
function f_16(_ctx) {
  return M.chain(M.scope(function ($dm$root) {
    var ctx = M.context();
    ctx._$dm$root = $dm$root;
    ctx._f = _ctx._f;
    return M.scope(f_15);
  }), f_26);
}
function f_26(_ctx, a) {
  return a;
}
function f_34(ctx) {
  return M.chain(M.run(QM, function () {
    var _ctx = M.context();
    _ctx._f = ctx;
    return M.scope(f_16);
  }), f_43);
}
function f_43(ctx) {}
function f_212(ctx) {
  return M.chain(it("should throw reasons from rejected promises into fiber", function (done) {
    var ctx = M.context();
    ctx._done = done;
    ctx._throwErrorLater = function _throwErrorLater() {
      var throwErrorLater = M.context();
      return M.scope(throwErrorLater_1);
    };
    return M.scope(f_18);
  }), f_38);
}
function f_111(_ctx) {
  var a;
  if (_ctx._done.async) {
    a = _ctx._done;
    return M.chain(a.async(), f_211);
  } else {
    return M.jump(void 0, f_37);
  }
}
function f_211(_ctx, a) {
  _ctx._done = a;
  return M.jump(void 0, f_37);
}
function f_110(ctx) {
  return M.chain(1 + 2, f_210);
}
function f_19(_ctx) {
  _ctx._f1._result = _ctx._$dm$b;
  _ctx._$dm$b = null;
  return M.jump(void 0, f_29, f_71);
}
function f_29(_ctx) {
  var a;
  a = _ctx._f1._result;
  return M.chain(expect(a), f_35, f_71);
}
function f_35(_ctx, b) {
  var a;
  a = b.to;
  return M.chain(a.equal(3), f_44, f_71);
}
function f_44(_ctx) {
  var a;
  a = _ctx._f._done;
  return M.chain(a(), f_61);
}
function f_51(_ctx) {
  var err, a;
  err = _ctx._ex;
  a = _ctx._f._done;
  _ctx._ex = null;
  return M.chain(a(err), f_61);
}
function f_61(_ctx) {}
function f_71(_ctx, a) {
  _ctx._ex = a;
  return M.jump(void 0, f_51);
}
function f_210(ctx, a) {
  return M.chain(a.mapply(function ($dm$b) {
    var _ctx = M.context();
    _ctx._$dm$b = $dm$b;
    _ctx._f = ctx._f;
    _ctx._f1 = ctx;
    return M.scope(f_19);
  }), f_36);
}
function f_36(ctx, a) {
  return a;
}
function f_37(_ctx) {
  return M.chain(M.run(QM, function () {
    var ctx = M.context();
    ctx._f = _ctx;
    return M.scope(f_110);
  }), f_45);
}
function f_45(_ctx) {}
function f_38(ctx) {
  return M.chain(it("should work just fine with passed a value instead of a promise", function (done) {
    var _ctx = M.context();
    _ctx._done = done;
    return M.scope(f_111);
  }), f_46);
}
function f_46(ctx) {}