var $M = require("@effectful/debugger/api");

$M.module("file.js", null, module, null, "$");
var $s$1 = [{
  a: "$0"
}, null, false],
    $s$2 = [{
  i: "$0"
}, $s$1, false];
$M.fun("m$0", "file", null, [], 32, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.$.$0 = $c.a($);
        return $M.ret();

      case 1:
        return $M.ret($.value);

      case 2:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [[], [], []]);
$M.fun("m$1", "a", "m$0", [], 0, function () {
  var $0;

  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(0);
        continue;

      case 1:
        $.goto = 2;
        $M.brk(1);
        continue;

      case 2:
        $0 = $.$.$0;
        $M.lset($.$, "i", $0 + 1);
        $.goto = 3;
        ($M.context.call = eff1)($0);
        continue;

      case 3:
        $.goto = 4;
        $M.brk(2);
        continue;

      case 4:
        $0 = $.$.$0;
        $M.lset($.$, "i", $0 + 1);
        $.goto = 5;
        ($M.context.call = eff2)($0);
        continue;

      case 5:
        return $M.ret();

      case 6:
        return $M.ret($.value);

      case 7:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["2:2-2:8", "s", $s$2], ["3:2-3:12", "s", $s$2], ["3:2-3:11", "e", $s$2], ["4:2-4:12", "s", $s$2], ["4:2-4:11", "e", $s$2], [], [], []]);
module.exports = $M.exports();