var $M = require("@effectful/debugger"),
  $forInIterator = $M.forInIterator,
  $yld = $M.yld,
  $x = $M.context,
  $ret = $M.ret,
  $retG = $M.retG,
  $unhandled = $M.unhandled,
  $unhandledG = $M.unhandledG,
  $raise = $M.raise,
  $brk = $M.brk,
  $force = $M.force,
  $get = $M.get,
  $lset = $M.lset,
  $mcall = $M.mcall,
  $set = $M.set,
  $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
    __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
  }, null),
  $s$1 = [{
    Z: [1, null],
    _getRequireWildcardCache: [2, null],
    _interopRequireWildcard: [3, null],
    a: [4, "3:10-3:11"]
  }, null, 0],
  $s$2 = [{
    nodeInterop: [1, null],
    cacheBabelInterop: [2, null],
    cacheNodeInterop: [3, null]
  }, $s$1, 1],
  $s$3 = [{
    nodeInterop: [1, null]
  }, $s$2, 2],
  $s$4 = [{
    obj: [1, null],
    nodeInterop: [2, null],
    cache: [3, null],
    newObj: [4, null],
    hasPropertyDescriptor: [5, null],
    key: [6, null],
    desc: [7, null]
  }, $s$1, 1],
  $s$5 = [{}, $s$4, 2],
  $s$6 = [{}, $s$1, 1],
  $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 5, "1:0-7:0", 32, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $lset($l, 2, $m$1($));
        $lset($l, 3, $m$3($));
        $lset($l, 4, $m$4($));
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        $p = ($x.moduleId = require.resolve("@effectful/generators"), $force(require("@effectful/generators")));
        $.state = 2;
      case 2:
        $.goto = 3;
        $p = ($x.call = $l[3])($p);
        $.state = 3;
      case 3:
        $lset($l, 1, $p);
        $.goto = 5;
        continue;
      case 4:
        $.goto = 5;
        return $unhandled($.error);
      case 5:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 0, [[4, "1:0-1:43", $s$1], [2, null, $s$1], [2, null, $s$1], [0, null, $s$1], [16, "7:0-7:0", $s$1], [16, "7:0-7:0", $s$1]]),
  $m$1 = $M.fun("m$1", "_getRequireWildcardCache", null, $m$0, ["nodeInterop"], 0, 4, null, 0, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        if (typeof WeakMap !== "function") {
          $.state = 1;
        } else {
          $.goto = 2;
          continue;
        }
      case 1:
        $.result = null;
        $.goto = 7;
        continue;
      case 2:
        $.goto = 3;
        $p = new ($x.call = WeakMap)();
        $.state = 3;
      case 3:
        $lset($l, 2, $p);
        $.goto = 4;
        $p = new ($x.call = WeakMap)();
        $.state = 4;
      case 4:
        $lset($l, 3, $p);
        $.goto = 5;
        $p = ($x.call = $lset($l[0], 2, $m$2($)))($l[1]);
        $.state = 5;
      case 5:
        $.result = $p;
        $.goto = 7;
        continue;
      case 6:
        $.goto = 7;
        return $unhandled($.error);
      case 7:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 1, [[0, null, $s$2], [0, null, $s$2], [2, null, $s$2], [2, null, $s$2], [2, null, $s$2], [0, null, $s$2], [16, null, $s$2], [16, null, $s$2]]),
  $m$2 = $M.fun("m$2", null, null, $m$1, ["nodeInterop"], 0, 2, null, 0, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        if ($l[1]) {
          $.state = 1;
        } else {
          $.goto = 3;
          continue;
        }
      case 1:
        $.result = $l[0][3];
        $.state = 2;
      case 2:
        $.goto = 5;
        continue;
      case 3:
        $.result = $l[0][2];
        $.goto = 2;
        continue;
      case 4:
        $.goto = 5;
        return $unhandled($.error);
      case 5:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 2, [[0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [16, null, $s$3], [16, null, $s$3]]),
  $m$3 = $M.fun("m$3", "_interopRequireWildcard", null, $m$0, ["obj", "nodeInterop"], 1, 12, null, 0, function ($, $l, $p) {
    var $1;
    for (;;) switch ($.state = $.goto) {
      case 0:
        $l[9] = !$l[2];
        if ($l[9]) {
          $.state = 1;
        } else {
          $.goto = 2;
          continue;
        }
      case 1:
        $l[9] = $l[1];
        $.state = 2;
      case 2:
        if ($l[9]) {
          $.state = 3;
        } else {
          $.goto = 5;
          continue;
        }
      case 3:
        $.goto = 4;
        $p = ($x.call = $get, $l[1].__esModule);
        $.state = 4;
      case 4:
        $l[9] = $p;
        $.state = 5;
      case 5:
        if ($l[9]) {
          $.state = 6;
        } else {
          $.goto = 7;
          continue;
        }
      case 6:
        $.result = $l[1];
        $.goto = 59;
        continue;
      case 7:
        $1 = $l[1] === null;
        if ($1) {
          $.state = 8;
        } else {
          $.goto = 55;
          continue;
        }
      case 8:
        if ($1) {
          $.state = 9;
        } else {
          $.goto = 10;
          continue;
        }
      case 9:
        $.result = {
          default: $l[1]
        };
        $.goto = 59;
        continue;
      case 10:
        $.goto = 11;
        $p = ($x.call = $l[0][2])($l[2]);
        $.state = 11;
      case 11:
        $lset($l, 3, $p);
        $l[10] = $l[3];
        if ($l[10]) {
          $.state = 12;
        } else {
          $.goto = 14;
          continue;
        }
      case 12:
        $.goto = 13;
        $p = $mcall("has", $l[3], $l[1]);
        $.state = 13;
      case 13:
        $l[10] = $p;
        $.state = 14;
      case 14:
        if ($l[10]) {
          $.state = 15;
        } else {
          $.goto = 17;
          continue;
        }
      case 15:
        $.goto = 16;
        $p = $mcall("get", $l[3], $l[1]);
        $.state = 16;
      case 16:
        $.result = $p;
        $.goto = 59;
        continue;
      case 17:
        $lset($l, 4, {});
        $.goto = 18;
        $p = ($x.call = $get, Object.defineProperty);
        $.state = 18;
      case 18:
        $l[11] = $p;
        if ($l[11]) {
          $.state = 19;
        } else {
          $.goto = 21;
          continue;
        }
      case 19:
        $.goto = 20;
        $p = ($x.call = $get, Object.getOwnPropertyDescriptor);
        $.state = 20;
      case 20:
        $l[11] = $p;
        $.state = 21;
      case 21:
        $lset($l, 5, $l[11]);
        $.state = 22;
      case 22:
        $l = $.$ = [$l, void 0, void 0, void 0, void 0];
        $.goto = 23;
        $p = $forInIterator($l[0][1]);
        $.state = 23;
      case 23:
        $l[1] = $p;
        $.state = 24;
      case 24:
        $x.call = $l[1].next;
        $.goto = 25;
        $p = $l[1].next();
        $.state = 25;
      case 25:
        if ($p.done) {
          $.state = 26;
        } else {
          $.goto = 27;
          continue;
        }
      case 26:
        $l[0][8] = 51;
        $.goto = 50;
        continue;
      case 27:
        $lset($l[0], 6, $p.value);
        $l[2] = $l[0][6] !== "default";
        if ($l[2]) {
          $.state = 28;
        } else {
          $.goto = 32;
          continue;
        }
      case 28:
        $.goto = 29;
        $p = ($x.call = $get, Object.prototype);
        $.state = 29;
      case 29:
        $.goto = 30;
        $p = ($x.call = $get, $p.hasOwnProperty);
        $.state = 30;
      case 30:
        $.goto = 31;
        $p = $mcall("call", $p, $l[0][1], $l[0][6]);
        $.state = 31;
      case 31:
        $l[2] = $p;
        $.state = 32;
      case 32:
        if ($l[2]) {
          $.state = 33;
        } else {
          $.goto = 48;
          continue;
        }
      case 33:
        if ($l[0][5]) {
          $.state = 34;
        } else {
          $.goto = 47;
          continue;
        }
      case 34:
        $.goto = 35;
        $p = $mcall("getOwnPropertyDescriptor", Object, $l[0][1], $l[0][6]);
        $.state = 35;
      case 35:
        $l[3] = $p;
        $.state = 36;
      case 36:
        $lset($l[0], 7, $l[3]);
        $l[4] = $l[0][7];
        if ($l[4]) {
          $.state = 37;
        } else {
          $.goto = 42;
          continue;
        }
      case 37:
        $.goto = 38;
        $p = ($x.call = $get, $l[0][7].get);
        $.state = 38;
      case 38:
        $l[4] = $p;
        if ($l[4]) {
          $.state = 39;
        } else {
          $.goto = 40;
          continue;
        }
      case 39:
        $.goto = 42;
        continue;
      case 40:
        $.goto = 41;
        $p = ($x.call = $get, $l[0][7].set);
        $.state = 41;
      case 41:
        $l[4] = $p;
        $.goto = 39;
        continue;
      case 42:
        if ($l[4]) {
          $.state = 43;
        } else {
          $.goto = 45;
          continue;
        }
      case 43:
        $.goto = 44;
        $mcall("defineProperty", Object, $l[0][4], $l[0][6], $l[0][7]);
        $.state = 44;
      case 44:
        $.goto = 48;
        continue;
      case 45:
        $.goto = 46;
        $p = ($x.call = $get, $l[0][1][$l[0][6]]);
        $.state = 46;
      case 46:
        $.goto = 44;
        $set($l[0][4], $l[0][6], $p);
        continue;
      case 47:
        $l[3] = null;
        $.goto = 36;
        continue;
      case 48:
        $l = $.$ = [$l[0], $l[1], void 0, void 0, void 0];
        $.goto = 24;
        continue;
      case 49:
        return $raise($.error);
      case 50:
        $l = $.$ = $l[0];
        $.goto = $l[8];
        continue;
      case 51:
        $.goto = 52;
        $set($l[4], "default", $l[1]);
        $.state = 52;
      case 52:
        if ($l[3]) {
          $.state = 53;
        } else {
          $.goto = 54;
          continue;
        }
      case 53:
        $.goto = 54;
        $mcall("set", $l[3], $l[1], $l[4]);
        $.state = 54;
      case 54:
        $.result = $l[4];
        $.goto = 59;
        continue;
      case 55:
        $1 = typeof $l[1] !== "object";
        if ($1) {
          $.state = 56;
        } else {
          $.goto = 57;
          continue;
        }
      case 56:
        $1 = typeof $l[1] !== "function";
        $.state = 57;
      case 57:
        $.goto = 8;
        continue;
      case 58:
        $.goto = 59;
        return $unhandled($.error);
      case 59:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, function ($, $l) {
    switch ($.state) {
      case 48:
      case 47:
      case 46:
      case 45:
      case 44:
      case 43:
      case 42:
      case 41:
      case 40:
      case 39:
      case 38:
      case 37:
      case 36:
      case 35:
      case 34:
      case 33:
      case 32:
      case 31:
      case 30:
      case 29:
      case 28:
      case 27:
      case 26:
      case 25:
      case 24:
        $.goto = 50;
        $l[0][8] = 49;
        break;
      default:
        $.goto = 58;
    }
  }, function ($, $l) {
    switch ($.state) {
      case 48:
      case 47:
      case 46:
      case 45:
      case 44:
      case 43:
      case 42:
      case 41:
      case 40:
      case 39:
      case 38:
      case 37:
      case 36:
      case 35:
      case 34:
      case 33:
      case 32:
      case 31:
      case 30:
      case 29:
      case 28:
      case 27:
      case 26:
      case 25:
      case 24:
        $l[0][8] = 59;
        $.goto = 50;
        break;
      default:
        $.goto = 59;
        break;
    }
  }, 1, [[0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [0, null, $s$4], [2, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [2, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [0, null, $s$4], [16, null, $s$4], [16, null, $s$4]]),
  $m$4 = $M.fun("m$4", "a", null, $m$0, [], 0, 1, "3:0-6:1", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld(1);
      case 2:
        $.goto = 3;
        $brk();
        $.state = 3;
      case 3:
        $.goto = 4;
        return $yld(2);
      case 4:
        $.goto = 6;
        $brk();
        continue;
      case 5:
        $.goto = 6;
        return $unhandledG($.error);
      case 6:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 1, [[4, "4:2-4:10", $s$6], [2, "4:2-4:9", $s$6], [4, "5:2-5:10", $s$6], [2, "5:2-5:9", $s$6], [36, "6:1-6:1", $s$6], [16, "6:1-6:1", $s$6], [16, "6:1-6:1", $s$6]]);
$M.moduleExports();