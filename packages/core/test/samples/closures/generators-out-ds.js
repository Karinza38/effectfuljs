var $M = require("@effectful/debugger"),
  $yld = $M.yld,
  $x = $M.context,
  $ret = $M.ret,
  $retG = $M.retG,
  $unhandled = $M.unhandled,
  $unhandledG = $M.unhandledG,
  $brk = $M.brk,
  $lset = $M.lset,
  $mcall = $M.mcall,
  $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
    __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
  }, null),
  $s$1 = [{
    a: [1, "3:6-3:7"],
    e1: [2, "17:10-17:12"],
    e2: [3, "26:10-26:12"]
  }, null, 0],
  $s$2 = [{
    w: [1, "3:10-3:11"]
  }, $s$1, 1],
  $s$3 = [{
    s: [1, "4:16-4:17"],
    v: [2, "5:8-5:9"],
    k: [3, "5:11-5:12"]
  }, $s$2, 2],
  $s$4 = [{
    k: [1, "6:23-6:24"]
  }, $s$3, 3],
  $s$5 = [{
    ww: [1, "7:26-7:28"],
    id: [2, "8:12-8:14"]
  }, $s$4, 4],
  $s$6 = [{
    mm: [1, "9:27-9:29"]
  }, $s$5, 5],
  $s$7 = [{
    m: [1, "10:16-10:17"]
  }, $s$6, 6],
  $s$8 = [{
    k: [1, "17:13-17:14"]
  }, $s$1, 1],
  $s$9 = [{
    m: [1, "19:20-19:21"]
  }, $s$8, 2],
  $s$10 = [{
    l: [1, "20:24-20:25"]
  }, $s$9, 3],
  $s$11 = [{
    k: [1, "26:13-26:14"]
  }, $s$1, 1],
  $s$12 = [{
    m: [1, "28:21-28:22"]
  }, $s$11, 2],
  $s$13 = [{
    l: [1, "29:23-29:24"]
  }, $s$12, 3],
  $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 4, "1:0-34:0", 32, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $lset($l, 2, $m$7($));
        $lset($l, 3, $m$10($));
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        $mcall("profile", M, "es");
        $.state = 2;
      case 2:
        $.goto = 3;
        $brk();
        $.state = 3;
      case 3:
        $lset($l, 1, $m$1($));
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
  }, null, null, 0, [[4, "1:0-1:16", $s$1], [2, "1:0-1:15", $s$1], [4, "3:0-15:4", $s$1], [0, "3:6-15:3", $s$1], [16, "34:0-34:0", $s$1], [16, "34:0-34:0", $s$1]]),
  $m$1 = $M.fun("m$1", null, null, $m$0, ["w"], 0, 2, "3:10-15:3", 4, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.result = $m$2($);
        $.goto = 3;
        continue;
      case 2:
        $.goto = 3;
        return $unhandled($.error);
      case 3:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 1, [[4, "4:2-15:3", $s$2], [0, null, $s$2], [16, "15:3-15:3", $s$2], [16, "15:3-15:3", $s$2]]),
  $m$2 = $M.fun("m$2", "mfs", null, $m$1, ["s"], 0, 4, "4:2-15:3", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        $brk();
        $.state = 2;
      case 2:
        $.result = $m$3($);
        $.goto = 4;
        continue;
      case 3:
        $.goto = 4;
        return $unhandledG($.error);
      case 4:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 2, [[4, "5:4-5:13", $s$3], [4, "6:4-14:6", $s$3], [0, null, $s$3], [16, "15:3-15:3", $s$3], [16, "15:3-15:3", $s$3]]),
  $m$3 = $M.fun("m$3", "kk", null, $m$2, ["k"], 0, 2, "6:11-14:5", 0, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.result = $m$4($);
        $.goto = 3;
        continue;
      case 2:
        $.goto = 3;
        return $unhandled($.error);
      case 3:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 3, [[4, "7:6-13:8", $s$4], [0, null, $s$4], [16, "14:5-14:5", $s$4], [16, "14:5-14:5", $s$4]]),
  $m$4 = $M.fun("m$4", "vv", null, $m$3, ["ww"], 0, 3, "7:13-13:7", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        $brk();
        $.state = 2;
      case 2:
        $.goto = 3;
        return $yld($m$5($));
      case 3:
        $.goto = 5;
        $brk();
        continue;
      case 4:
        $.goto = 5;
        return $unhandledG($.error);
      case 5:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 4, [[4, "8:8-8:15", $s$5], [4, "9:8-12:10", $s$5], [2, "9:8-12:9", $s$5], [36, "13:7-13:7", $s$5], [16, "13:7-13:7", $s$5], [16, "13:7-13:7", $s$5]]),
  $m$5 = $M.fun("m$5", "nn", null, $m$4, ["mm"], 1, 2, "9:14-12:9", 2, function ($, $l, $p) {
    var $1;
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($m$6($));
      case 2:
        $.goto = 3;
        $brk();
        $.state = 3;
      case 3:
        $1 = $l[0][0][1];
        $lset($l[0][0], 1, $1 + 1);
        $.goto = 4;
        return $yld($1);
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
  }, null, null, 5, [[4, "10:10-10:44", $s$6], [2, "10:10-10:43", $s$6], [4, "11:10-11:20", $s$6], [2, "11:10-11:19", $s$6], [36, "12:9-12:9", $s$6], [16, "12:9-12:9", $s$6], [16, "12:9-12:9", $s$6]]),
  $m$6 = $M.fun("m$6", null, null, $m$5, ["m"], 0, 2, "10:16-10:43", 4, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        $p = ($x.call = $l[0][0][2])($l[0][0][0][1], $l[0][0][0][0][2], $l[0][0][0][0][0][1], $l[1], $l[0][0][1], $l[0][1]);
        $.state = 2;
      case 2:
        $.result = $p;
        $.goto = 4;
        continue;
      case 3:
        $.goto = 4;
        return $unhandled($.error);
      case 4:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 6, [[4, "10:21-10:43", $s$7], [2, "10:21-10:43", $s$7], [0, null, $s$7], [16, "10:43-10:43", $s$7], [16, "10:43-10:43", $s$7]]),
  $m$7 = $M.fun("m$7", "e1", null, $m$0, ["k"], 0, 2, "17:0-24:1", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($l[1]);
      case 2:
        $.goto = 3;
        $brk();
        $.state = 3;
      case 3:
        $.goto = 4;
        return $yld($m$8($));
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
  }, null, null, 1, [[4, "18:2-18:10", $s$8], [2, "18:2-18:9", $s$8], [4, "19:2-23:4", $s$8], [2, "19:2-23:3", $s$8], [36, "24:1-24:1", $s$8], [16, "24:1-24:1", $s$8], [16, "24:1-24:1", $s$8]]),
  $m$8 = $M.fun("m$8", "p1", null, $m$7, ["m"], 0, 2, "19:8-23:3", 0, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.result = $m$9($);
        $.goto = 3;
        continue;
      case 2:
        $.goto = 3;
        return $unhandled($.error);
      case 3:
        return $ret($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 2, [[4, "20:4-22:6", $s$9], [0, null, $s$9], [16, "23:3-23:3", $s$9], [16, "23:3-23:3", $s$9]]),
  $m$9 = $M.fun("m$9", "e2", null, $m$8, ["l"], 0, 2, "20:11-22:5", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($lset($l[0][0], 1, $l[0][0][1] + $l[1]));
      case 2:
        $.goto = 4;
        $brk();
        continue;
      case 3:
        $.goto = 4;
        return $unhandledG($.error);
      case 4:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 3, [[4, "21:6-21:21", $s$10], [2, "21:6-21:20", $s$10], [36, "22:5-22:5", $s$10], [16, "22:5-22:5", $s$10], [16, "22:5-22:5", $s$10]]),
  $m$10 = $M.fun("m$10", "e2", null, $m$0, ["k"], 0, 2, "26:0-33:1", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($l[1]);
      case 2:
        $.goto = 3;
        $brk();
        $.state = 3;
      case 3:
        $.goto = 4;
        return $yld($m$11($));
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
  }, null, null, 1, [[4, "27:2-27:10", $s$11], [2, "27:2-27:9", $s$11], [4, "28:2-32:4", $s$11], [2, "28:2-32:3", $s$11], [36, "33:1-33:1", $s$11], [16, "33:1-33:1", $s$11], [16, "33:1-33:1", $s$11]]),
  $m$11 = $M.fun("m$11", "e3", null, $m$10, ["m"], 0, 2, "28:8-32:3", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($m$12($));
      case 2:
        $.goto = 4;
        $brk();
        continue;
      case 3:
        $.goto = 4;
        return $unhandledG($.error);
      case 4:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 2, [[4, "29:4-31:6", $s$12], [2, "29:4-31:5", $s$12], [36, "32:3-32:3", $s$12], [16, "32:3-32:3", $s$12], [16, "32:3-32:3", $s$12]]),
  $m$12 = $M.fun("m$12", "e4", null, $m$11, ["l"], 0, 2, "29:10-31:5", 2, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $brk();
        $.state = 1;
      case 1:
        $.goto = 2;
        return $yld($lset($l[0][0], 1, $l[0][0][1] + $l[1]));
      case 2:
        $.goto = 4;
        $brk();
        continue;
      case 3:
        $.goto = 4;
        return $unhandledG($.error);
      case 4:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 3, [[4, "30:6-30:21", $s$13], [2, "30:6-30:20", $s$13], [36, "31:5-31:5", $s$13], [16, "31:5-31:5", $s$13], [16, "31:5-31:5", $s$13]]);
$M.moduleExports();