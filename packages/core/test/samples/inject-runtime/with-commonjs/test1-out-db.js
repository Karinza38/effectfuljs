var $M = require("@effectful/debugger"),
  $yld = $M.yld,
  $x = $M.context,
  $ret = $M.ret,
  $retG = $M.retG,
  $unhandled = $M.unhandled,
  $unhandledG = $M.unhandledG,
  $force = $M.force,
  $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
    __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
  }, null),
  $s$1 = [{
    Z: [1, "1:4-1:5"],
    a: [2, "3:10-3:11"]
  }, null, 0],
  $s$2 = [{}, $s$1, 1],
  $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 3, "1:0-7:0", 160, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $l[2] = $m$1($);
        $.goto = 1;
        $p = ($x.moduleId = require.resolve("@effectful/generators"), $force(require("@effectful/generators")));
        $.state = 1;
      case 1:
        $l[1] = $p;
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
  }, null, null, 0, [[2, "1:8-1:40", $s$1], [0, "1:4-1:40", $s$1], [16, "7:0-7:0", $s$1], [16, "7:0-7:0", $s$1]]),
  $m$1 = $M.fun("m$1", "a", null, $m$0, [], 0, 1, "3:0-6:1", 130, function ($, $l, $p) {
    for (;;) switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        return $yld(1);
      case 1:
        $.goto = 3;
        return $yld(2);
      case 2:
        $.goto = 3;
        return $unhandledG($.error);
      case 3:
        return $retG($.result);
      default:
        throw new Error("Invalid state");
    }
  }, null, null, 1, [[2, "4:2-4:9", $s$2], [2, "5:2-5:9", $s$2], [16, "6:1-6:1", $s$2], [16, "6:1-6:1", $s$2]]);
$M.moduleExports();