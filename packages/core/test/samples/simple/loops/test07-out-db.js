var $M = require("@effectful/debugger/api");

$M.module("file.js", null, module, null, "$");
var $s$1 = [{
  a: "$0"
}, null, false],
    $s$2 = [{
  i: "$0",
  j: "$1",
  k: "$2"
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
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.$.$0 = 0;
        $.$.$1 = 0;
        $.$.$2 = 0;
        $.goto = 1;
        ($M.context.call = eff)($.$.$0, $.$.$1, $.$.$2);
        continue;

      case 1:
        $.goto = 2;
        ($M.context.call = eff1)($.$.$0);
        continue;

      case 2:
        $.$.$2 = 10;
        $.goto = 3;
        ($M.context.call = eff2)();
        continue;

      case 3:
        $.goto = 3;
        ($M.context.call = eff4)($.$.$2, $.$.$1);
        continue;

      case 4:
        return $M.ret($.value);

      case 5:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["5:2-5:14", "e", $s$2], ["7:4-7:11", "e", $s$2], ["10:6-10:12", "e", $s$2], ["12:8-12:18", "e", $s$2], [], []]);
module.exports = $M.exports();