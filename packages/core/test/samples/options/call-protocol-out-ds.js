var $M = require("@effectful/debugger/api");

$M.module("file.js", null, module, null, "$");
var $s$1 = [{
  a1: "$0",
  a2: "$1",
  a3: "$2",
  a4: "$3",
  a5: "$4",
  a6: "$5"
}, null, false],
    $s$2 = [{
  a: "$0",
  b: "$1"
}, $s$1, false],
    $s$3 = [{
  a: "$0",
  b: "$1"
}, $s$1, false],
    $s$4 = [{
  a: "$0",
  b: "$1"
}, $s$1, false];
$M.fun("m$0", "file", null, [], 32, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.$.$0 = $c.a1($);
        $.$.$5 = $c.a6($);
        $.$.$4 = $c.a5($);
        $.$.$3 = $c.a4($);
        $.$.$2 = $c.a3($);
        $.$.$1 = $c.a2($);
        $.goto = 1;
        $M.brk(0);
        continue;

      case 1:
        $.goto = 2;
        $M.mcall("option", M, {
          callProtocol: "apply"
        });
        continue;

      case 2:
        $.goto = 3;
        $M.brk(7);
        continue;

      case 3:
        $.goto = 4;
        $M.mcall("option", M, {
          callProtocol: "call"
        });
        continue;

      case 4:
        $.goto = 5;
        $M.brk(15);
        continue;

      case 5:
        $.goto = 6;
        $M.mcall("option", M, {
          callProtocol: false
        });
        continue;

      case 6:
        $.goto = 7;
        $M.brk(22);
        continue;

      case 7:
        $.goto = 8;
        $M.mcall("option", M, {
          newProtocol: "method"
        });
        continue;

      case 8:
        $.goto = 9;
        $M.brk(27);
        continue;

      case 9:
        $.goto = 10;
        $M.mcall("option", M, {
          newProtocol: "op"
        });
        continue;

      case 10:
        $.goto = 11;
        $M.brk(32);
        continue;

      case 11:
        $.goto = 12;
        $M.mcall("option", M, {
          newProtocol: false
        });
        continue;

      case 12:
        return $M.ret();

      case 13:
        return $M.ret($.value);

      case 14:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["1:0-1:36", "s", $s$1], ["1:0-1:35", "e", $s$1], ["12:0-12:35", "s", $s$1], ["12:0-12:34", "e", $s$1], ["24:0-24:34", "s", $s$1], ["24:0-24:33", "e", $s$1], ["35:0-35:36", "s", $s$1], ["35:0-35:35", "e", $s$1], ["44:0-44:32", "s", $s$1], ["44:0-44:31", "e", $s$1], ["53:0-53:33", "s", $s$1], ["53:0-53:32", "e", $s$1], [], [], []]);
$M.fun("m$1", "a1", "m$0", ["a", "b"], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(1);
        continue;

      case 1:
        $.goto = 2;
        $p = ($M.context.call = eff)($.$.$0);
        continue;

      case 2:
        $.goto = 3;
        $p = $M.mcall("eff", $.$.$0, $p);
        continue;

      case 3:
        $.goto = 4;
        $M.mcall("eff", $p, d);
        continue;

      case 4:
        $.goto = 5;
        $M.brk(2);
        continue;

      case 5:
        $.goto = 6;
        $M.mcall("option", M, {
          callName: "APPLY"
        });
        continue;

      case 6:
        $.goto = 7;
        $M.brk(3);
        continue;

      case 7:
        $.goto = 8;
        $M.mcall("eff", $.$.$0.b, d);
        continue;

      case 8:
        $.goto = 9;
        $M.brk(4);
        continue;

      case 9:
        $.goto = 10;
        $M.mcall("eff", [$.$.$0.b], d);
        continue;

      case 10:
        $.goto = 11;
        $M.brk(5);
        continue;

      case 11:
        $.goto = 12;
        $M.mcall("eff", {
          a: $.$.$0
        }, d);
        continue;

      case 12:
        $.goto = 13;
        $M.brk(6);
        continue;

      case 13:
        $.goto = 14;
        $p = new ($M.context.call = A)({
          a: $.$.$0
        });
        continue;

      case 14:
        $.goto = 15;
        $M.mcall("eff", $p, d);
        continue;

      case 15:
        return $M.ret();

      case 16:
        return $M.ret($.value);

      case 17:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["4:2-4:23", "s", $s$2], ["4:8-4:14", "e", $s$2], ["4:2-4:15", "e", $s$2], ["4:2-4:22", "e", $s$2], ["5:2-5:34", "s", $s$2], ["5:2-5:33", "e", $s$2], ["6:2-6:13", "s", $s$2], ["6:2-6:12", "e", $s$2], ["7:2-7:15", "s", $s$2], ["7:2-7:14", "e", $s$2], ["8:2-8:17", "s", $s$2], ["8:3-8:15", "e", $s$2], ["9:2-9:22", "s", $s$2], ["9:2-9:14", "e", $s$2], ["9:2-9:21", "e", $s$2], [], [], []]);
$M.fun("m$2", "a2", "m$0", ["a", "b"], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(8);
        continue;

      case 1:
        $.goto = 2;
        ($M.context.call = eff)($.$.$0);
        continue;

      case 2:
        $.goto = 3;
        $M.brk(9);
        continue;

      case 3:
        $.goto = 4;
        $p = ($M.context.call = eff)($.$.$0);
        continue;

      case 4:
        $.goto = 5;
        $p = $M.mcall("eff", $.$.$0, $p);
        continue;

      case 5:
        $.goto = 6;
        $M.mcall("eff", $p, d);
        continue;

      case 6:
        $.goto = 7;
        $M.brk(10);
        continue;

      case 7:
        $.goto = 8;
        $M.mcall("option", M, {
          callName: "CALL"
        });
        continue;

      case 8:
        $.goto = 9;
        $M.brk(11);
        continue;

      case 9:
        $.goto = 10;
        $M.mcall("eff", $.$.$0.b, d);
        continue;

      case 10:
        $.goto = 11;
        $M.brk(12);
        continue;

      case 11:
        $.goto = 12;
        $M.mcall("eff", [$.$.$0.b], d);
        continue;

      case 12:
        $.goto = 13;
        $M.brk(13);
        continue;

      case 13:
        $.goto = 14;
        $M.mcall("eff", {
          a: $.$.$0
        }, d);
        continue;

      case 14:
        $.goto = 15;
        $M.brk(14);
        continue;

      case 15:
        $.goto = 16;
        $p = new ($M.context.call = A)({
          a: $.$.$0
        });
        continue;

      case 16:
        $.goto = 17;
        $M.mcall("eff", $p, d);
        continue;

      case 17:
        return $M.ret();

      case 18:
        return $M.ret($.value);

      case 19:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["15:2-15:9", "s", $s$3], ["15:2-15:8", "e", $s$3], ["16:2-16:23", "s", $s$3], ["16:8-16:14", "e", $s$3], ["16:2-16:15", "e", $s$3], ["16:2-16:22", "e", $s$3], ["17:2-17:33", "s", $s$3], ["17:2-17:32", "e", $s$3], ["18:2-18:13", "s", $s$3], ["18:2-18:12", "e", $s$3], ["19:2-19:15", "s", $s$3], ["19:2-19:14", "e", $s$3], ["20:2-20:17", "s", $s$3], ["20:3-20:15", "e", $s$3], ["21:2-21:22", "s", $s$3], ["21:2-21:14", "e", $s$3], ["21:2-21:21", "e", $s$3], [], [], []]);
$M.fun("m$3", "a3", "m$0", ["a", "b"], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(16);
        continue;

      case 1:
        $.goto = 2;
        ($M.context.call = eff)($.$.$0);
        continue;

      case 2:
        $.goto = 3;
        $M.brk(17);
        continue;

      case 3:
        $.goto = 4;
        $p = ($M.context.call = eff)($.$.$0);
        continue;

      case 4:
        $.goto = 5;
        $p = $M.mcall("eff", $.$.$0, $p);
        continue;

      case 5:
        $.goto = 6;
        $M.mcall("eff", $p, d);
        continue;

      case 6:
        $.goto = 7;
        $M.brk(18);
        continue;

      case 7:
        $.goto = 8;
        $M.mcall("eff", $.$.$0.b, d);
        continue;

      case 8:
        $.goto = 9;
        $M.brk(19);
        continue;

      case 9:
        $.goto = 10;
        $M.mcall("eff", [$.$.$0.b], d);
        continue;

      case 10:
        $.goto = 11;
        $M.brk(20);
        continue;

      case 11:
        $.goto = 12;
        $M.mcall("eff", {
          a: $.$.$0
        }, d);
        continue;

      case 12:
        $.goto = 13;
        $M.brk(21);
        continue;

      case 13:
        $.goto = 14;
        $p = new ($M.context.call = A)({
          a: $.$.$0
        });
        continue;

      case 14:
        $.goto = 15;
        $M.mcall("eff", $p, d);
        continue;

      case 15:
        return $M.ret();

      case 16:
        return $M.ret($.value);

      case 17:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["27:2-27:9", "s", $s$4], ["27:2-27:8", "e", $s$4], ["28:2-28:23", "s", $s$4], ["28:8-28:14", "e", $s$4], ["28:2-28:15", "e", $s$4], ["28:2-28:22", "e", $s$4], ["29:2-29:13", "s", $s$4], ["29:2-29:12", "e", $s$4], ["30:2-30:15", "s", $s$4], ["30:2-30:14", "e", $s$4], ["31:2-31:17", "s", $s$4], ["31:3-31:15", "e", $s$4], ["32:2-32:22", "s", $s$4], ["32:2-32:14", "e", $s$4], ["32:2-32:21", "e", $s$4], [], [], []]);
$M.fun("m$4", "a4", "m$0", [], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(23);
        continue;

      case 1:
        $.$.$0 = B.B;
        $.goto = 2;
        $p = new ($M.context.call = A)(a);
        continue;

      case 2:
        $.goto = 3;
        new ($M.context.call = $.$.$0)($p);
        continue;

      case 3:
        $.goto = 4;
        $M.brk(24);
        continue;

      case 4:
        $.goto = 5;
        $M.mcall("option", M, {
          newName: "NEW"
        });
        continue;

      case 5:
        $.goto = 6;
        $M.brk(25);
        continue;

      case 6:
        $.goto = 7;
        $p = ($M.context.call = eff)();
        continue;

      case 7:
        $.goto = 8;
        new ($M.context.call = $p.Z)(b);
        continue;

      case 8:
        $.goto = 9;
        $M.brk(26);
        continue;

      case 9:
        $.goto = 10;
        new ($M.context.call = {
          a: a
        }.a)();
        continue;

      case 10:
        return $M.ret();

      case 11:
        return $M.ret($.value);

      case 12:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["38:2-38:20", "s", $s$1], ["38:10-38:18", "e", $s$1], ["38:2-38:19", "e", $s$1], ["39:2-39:31", "s", $s$1], ["39:2-39:30", "e", $s$1], ["40:2-40:19", "s", $s$1], ["40:7-40:12", "e", $s$1], ["40:2-40:18", "e", $s$1], ["41:2-41:16", "s", $s$1], ["41:2-41:15", "e", $s$1], [], [], []]);
$M.fun("m$5", "a5", "m$0", [], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(28);
        continue;

      case 1:
        $.$.$0 = B.B;
        $.goto = 2;
        $p = new ($M.context.call = A)(a);
        continue;

      case 2:
        $.goto = 3;
        new ($M.context.call = $.$.$0)($p);
        continue;

      case 3:
        $.goto = 4;
        $M.brk(29);
        continue;

      case 4:
        $.goto = 5;
        $M.mcall("option", M, {
          newName: "NEW"
        });
        continue;

      case 5:
        $.goto = 6;
        $M.brk(30);
        continue;

      case 6:
        $.goto = 7;
        $p = ($M.context.call = eff)();
        continue;

      case 7:
        $.goto = 8;
        new ($M.context.call = $p.Z)(b);
        continue;

      case 8:
        $.goto = 9;
        $M.brk(31);
        continue;

      case 9:
        $.goto = 10;
        new ($M.context.call = {
          a: a
        }.a)();
        continue;

      case 10:
        return $M.ret();

      case 11:
        return $M.ret($.value);

      case 12:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["47:2-47:20", "s", $s$1], ["47:10-47:18", "e", $s$1], ["47:2-47:19", "e", $s$1], ["48:2-48:31", "s", $s$1], ["48:2-48:30", "e", $s$1], ["49:2-49:19", "s", $s$1], ["49:7-49:12", "e", $s$1], ["49:2-49:18", "e", $s$1], ["50:2-50:16", "s", $s$1], ["50:2-50:15", "e", $s$1], [], [], []]);
$M.fun("m$6", "a6", "m$0", [], 0, function () {
  for (;;) {
    switch ($.state = $.goto) {
      case 0:
        $.goto = 1;
        $M.brk(33);
        continue;

      case 1:
        $.$.$0 = B.B;
        $.goto = 2;
        $p = new ($M.context.call = A)(a);
        continue;

      case 2:
        $.goto = 3;
        new ($M.context.call = $.$.$0)($p);
        continue;

      case 3:
        $.goto = 4;
        $M.brk(34);
        continue;

      case 4:
        $.goto = 5;
        $M.mcall("option", M, {
          newName: "NEW"
        });
        continue;

      case 5:
        $.goto = 6;
        $M.brk(35);
        continue;

      case 6:
        $.goto = 7;
        $p = ($M.context.call = eff)();
        continue;

      case 7:
        $.goto = 8;
        new ($M.context.call = $p.Z)(b);
        continue;

      case 8:
        $.goto = 9;
        $M.brk(36);
        continue;

      case 9:
        $.goto = 10;
        new ($M.context.call = {
          a: a
        }.a)();
        continue;

      case 10:
        return $M.ret();

      case 11:
        return $M.ret($.value);

      case 12:
        throw $.value;

      default:
        throw new Error("Invalid state");
    }
  }
}, null, null, [["56:2-56:20", "s", $s$1], ["56:10-56:18", "e", $s$1], ["56:2-56:19", "e", $s$1], ["57:2-57:31", "s", $s$1], ["57:2-57:30", "e", $s$1], ["58:2-58:19", "s", $s$1], ["58:7-58:12", "e", $s$1], ["58:2-58:18", "e", $s$1], ["59:2-59:16", "s", $s$1], ["59:2-59:15", "e", $s$1], [], [], []]);
module.exports = $M.exports();