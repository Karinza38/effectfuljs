var $M = require("@effectful/debugger/api"),
    $context = $M.context,
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $raise = $M.raise,
    $brk = $M.brk,
    $mcall = $M.mcall,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  _slicedToArray: [1, null],
  _iterableToArrayLimit: [2, null],
  _objectWithoutProperties: [3, null],
  _objectWithoutPropertiesLoose: [4, null],
  _toArray: [5, null],
  _nonIterableRest: [6, null],
  _unsupportedIterableToArray: [7, null],
  _arrayLikeToArray: [8, null],
  _iterableToArray: [9, null],
  _arrayWithHoles: [10, null],
  aS: [11, "1:9-1:11"],
  a: [12, "9:9-9:10"],
  a1: [13, "16:9-16:11"],
  bS: [14, "23:9-23:11"],
  b: [15, "30:9-30:10"],
  b1: [16, "38:9-38:11"],
  c: [17, "45:9-45:10"],
  d: [18, "64:9-64:10"],
  e1: [19, "70:9-70:11"],
  e2: [20, "75:9-75:11"],
  es6: [21, "87:9-87:12"]
}, null, 0],
    $s$2 = [{
  arr: [1, null],
  i: [2, null]
}, $s$1, 1],
    $s$3 = [{
  arr: [1, null],
  i: [2, null],
  _arr: [3, null],
  _n: [4, null],
  _d: [5, null],
  _e: [6, null],
  _i: [7, null],
  _s: [8, null]
}, $s$1, 1],
    $s$4 = [{
  err: [9, null]
}, $s$3, 1],
    $s$5 = [{
  source: [1, null],
  excluded: [2, null],
  target: [3, null],
  key: [4, null],
  i: [5, null],
  sourceSymbolKeys: [6, null]
}, $s$1, 1],
    $s$6 = [{
  source: [1, null],
  excluded: [2, null],
  target: [3, null],
  sourceKeys: [4, null],
  key: [5, null],
  i: [6, null]
}, $s$1, 1],
    $s$7 = [{
  arr: [1, null]
}, $s$1, 1],
    $s$8 = [{}, $s$1, 1],
    $s$9 = [{
  o: [1, null],
  minLen: [2, null],
  n: [3, null]
}, $s$1, 1],
    $s$10 = [{
  arr: [1, null],
  len: [2, null],
  i: [3, null],
  arr2: [4, null]
}, $s$1, 1],
    $s$11 = [{
  iter: [1, null]
}, $s$1, 1],
    $s$12 = [{
  arr: [1, null]
}, $s$1, 1],
    $s$13 = [{
  b1: [1, "2:6-2:8"]
}, $s$1, 1],
    $s$14 = [{
  b1: [1, "10:6-10:8"]
}, $s$1, 1],
    $s$15 = [{
  a: [1, "17:6-17:7"]
}, $s$1, 1],
    $s$16 = [{
  b1: [1, "24:6-24:8"],
  b2: [2, "25:4-25:6"]
}, $s$1, 1],
    $s$17 = [{
  b1: [1, "31:6-31:8"],
  b2: [2, "32:4-32:6"]
}, $s$1, 1],
    $s$18 = [{
  a: [1, "39:6-39:7"],
  c: [2, "39:9-39:10"]
}, $s$1, 1],
    $s$19 = [{
  a: [1, "46:6-46:7"],
  b: [2, "47:4-47:5"],
  c: [3, "48:4-48:5"],
  d: [4, "51:6-51:7"],
  e: [5, "52:4-52:5"],
  f: [6, "53:4-53:5"],
  g: [7, "54:4-54:5"],
  j: [8, "55:4-55:5"],
  x: [9, "56:6-56:7"],
  y: [10, "57:4-57:5"],
  z: [11, "58:4-58:5"]
}, $s$1, 1],
    $s$20 = [{}, $s$1, 1],
    $s$21 = [{
  cc: [1, "71:6-71:8"]
}, $s$1, 1],
    $s$22 = [{
  cc: [1, "76:6-76:8"]
}, $s$1, 1],
    $s$23 = [{
  cc: [2, "80:10-80:12"]
}, $s$22, 1],
    $s$24 = [{
  _eff2: [1, null],
  _eff2$m: [2, null],
  _eff2$m$: [3, null],
  _eff_: [4, null],
  _eff_2: [5, null],
  a: [6, "88:9-88:10"],
  b: [7, "88:12-88:13"],
  arr1: [8, "88:18-88:22"],
  _eff: [9, null],
  _eff$m: [10, null],
  e: [11, "90:8-90:9"],
  _eff$m$: [12, null],
  f: [13, "90:16-90:17"],
  m: [14, "90:19-90:20"],
  obj: [15, "90:25-90:28"],
  arr2: [16, "90:35-90:39"],
  _eff_3: [17, null],
  _eff_4: [18, null],
  _eff_5: [19, null],
  _eff_6: [20, null]
}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 22, "1:0-99:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
      $l[2] = $m$2($);
      $l[3] = $m$3($);
      $l[4] = $m$4($);
      $l[5] = $m$5($);
      $l[6] = $m$6($);
      $l[7] = $m$7($);
      $l[8] = $m$8($);
      $l[9] = $m$9($);
      $l[10] = $m$10($);
      $l[11] = $m$11($);
      $l[12] = $m$12($);
      $l[13] = $m$13($);
      $l[14] = $m$14($);
      $l[15] = $m$15($);
      $l[16] = $m$16($);
      $l[17] = $m$17($);
      $l[18] = $m$18($);
      $l[19] = $m$19($);
      $l[20] = $m$20($);
      $l[21] = $m$21($);
      $.goto = 1;
      $brk("7:0-7:14");
      $.state = 1;

    case 1:
      module.exports.a = $l[12];
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
}, null, null, 0, [[4, "7:0-7:14", $s$1], [0, "7:0-7:13", $s$1], [16, "99:0-99:0", $s$1], [16, "99:0-99:0", $s$1]]),
    $m$1 = $M.fun("m$1", "_slicedToArray", null, $m$0, ["arr", "i"], 0, 3, null, 0, function _slicedToArray($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = ($context.call = $l[0][10])($l[1]);
      $.state = 1;

    case 1:
      $.result = $p;

      if ($.result) {
        $.state = 2;
      } else {
        $.goto = 7;
        $p = ($context.call = $l[0][2])($l[1], $l[2]);
        continue;
      }

    case 2:
      if ($.result) {
        $.state = 3;
      } else {
        $.goto = 6;
        $p = ($context.call = $l[0][7])($l[1], $l[2]);
        continue;
      }

    case 3:
      if ($.result) {
        $.state = 4;
      } else {
        $.goto = 5;
        $p = ($context.call = $l[0][6])();
        continue;
      }

    case 4:
      $.goto = 9;
      continue;

    case 5:
      $.result = $p;
      $.goto = 4;
      continue;

    case 6:
      $.result = $p;
      $.goto = 3;
      continue;

    case 7:
      $.result = $p;
      $.goto = 2;
      continue;

    case 8:
      $.goto = 9;
      return $unhandled($.error);

    case 9:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$2], [2, null, $s$2], [2, null, $s$2], [2, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [16, null, $s$2], [16, null, $s$2]]),
    $m$2 = $M.fun("m$2", "_iterableToArrayLimit", null, $m$0, ["arr", "i"], 1, 16, null, 0, function _iterableToArrayLimit($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[14] = typeof Symbol === "undefined";

      if ($l[14]) {
        $.state = 1;
      } else {
        $l[15] = Symbol.iterator;
        $.goto = 20;
        $p = ($context.call = Object)($l[1]);
        continue;
      }

    case 1:
      if ($l[14]) {
        $.goto = 22;
        continue;
      } else {
        $.state = 2;
      }

    case 2:
      $l[3] = [];
      $l[4] = true;
      $l[5] = false;
      $l[6] = undefined;
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = $mcall(Symbol.iterator, $l[1]);
      $.state = 4;

    case 4:
      $l[7] = $p;
      $.state = 5;

    case 5:
      $.goto = 6;
      $p = $mcall("next", $l[7]);
      $.state = 6;

    case 6:
      if (!($l[4] = ($l[8] = $p).done)) {
        $.goto = 8;
        $mcall("push", $l[3], $l[8].value);
        continue;
      } else {
        $.state = 7;
      }

    case 7:
      $l[10] = 19;
      $.goto = 12;
      continue;

    case 8:
      $1 = $l[2];

      if ($1) {
        $1 = $l[3].length === $l[2];
        $.state = 9;
      } else {
        $.state = 9;
      }

    case 9:
      if ($1) {
        $.goto = 7;
        continue;
      } else {
        $.state = 10;
      }

    case 10:
      $l[4] = true;
      $.goto = 5;
      continue;

    case 11:
      $l[9] = $.error;
      $.error = void 0;
      $l[5] = true;
      $l[6] = $l[9];
      $l[10] = 19;
      $.state = 12;

    case 12:
      $.state = 13;

    case 13:
      $1 = !$l[4];

      if ($1) {
        $1 = $l[7]["return"] != null;
        $.state = 14;
      } else {
        $.state = 14;
      }

    case 14:
      if ($1) {
        $.goto = 15;
        $mcall("return", $l[7]);
        $.state = 15;
      } else {
        $.state = 15;
      }

    case 15:
      $l[12] = 18;
      $.state = 16;

    case 16:
      if ($l[5]) {
        $.goto = 17;
        return $raise($l[6]);
      } else {
        $.state = 17;
      }

    case 17:
      $.error = $l[13];
      $.goto = $l[12];
      continue;

    case 18:
      $.error = $l[11];
      $.goto = $l[10];
      continue;

    case 19:
      $.result = $l[3];
      $.goto = 22;
      continue;

    case 20:
      $l[14] = !($l[15] in $p);
      $.goto = 1;
      continue;

    case 21:
      $.goto = 22;
      return $unhandled($.error);

    case 22:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
      $.goto = 11;
      break;

    case 15:
    case 14:
    case 13:
      $l[13] = $.error;
      $l[12] = 21;
      $.goto = 16;
      break;

    case 11:
      $l[11] = $.error;
      $l[10] = 21;
      $.goto = 12;
      break;

    default:
      $.goto = 21;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
      $l[10] = 22;
      $.goto = 12;
      break;

    case 15:
    case 14:
    case 13:
      $l[12] = 22;
      $.goto = 16;
      break;

    default:
      $.goto = 22;
      break;
  }
}, 1, [[2, null, $s$3], [0, null, $s$3], [0, null, $s$3], [3, null, $s$3], [1, null, $s$3], [3, null, $s$3], [3, null, $s$3], [1, null, $s$3], [1, null, $s$3], [1, null, $s$3], [1, null, $s$3], [1, null, $s$4], [0, null, $s$3], [1, null, $s$3], [3, null, $s$3], [1, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [16, null, $s$3], [16, null, $s$3]]),
    $m$3 = $M.fun("m$3", "_objectWithoutProperties", null, $m$0, ["source", "excluded"], 0, 7, null, 0, function _objectWithoutProperties($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      if ($l[1] == null) {
        $.result = {};
        $.goto = 12;
        continue;
      } else {
        $.state = 1;
      }

    case 1:
      $.goto = 2;
      $p = ($context.call = $l[0][4])($l[1], $l[2]);
      $.state = 2;

    case 2:
      $l[3] = $p;

      if (Object.getOwnPropertySymbols) {
        $.goto = 4;
        $p = $mcall("getOwnPropertySymbols", Object, $l[1]);
        continue;
      } else {
        $.state = 3;
      }

    case 3:
      $.result = $l[3];
      $.goto = 12;
      continue;

    case 4:
      $l[6] = $p;
      $l[5] = 0;
      $.state = 5;

    case 5:
      if ($l[5] < $l[6].length) {
        $l[4] = $l[6][$l[5]];
        $.goto = 6;
        $p = $mcall("indexOf", $l[2], $l[4]);
        $.state = 6;
      } else {
        $.goto = 3;
        continue;
      }

    case 6:
      if ($p >= 0) {
        $.goto = 10;
        continue;
      } else {
        $.state = 7;
      }

    case 7:
      $.goto = 8;
      $p = $mcall("call", Object.prototype.propertyIsEnumerable, $l[1], $l[4]);
      $.state = 8;

    case 8:
      if (!$p) {
        $.goto = 10;
        continue;
      } else {
        $.state = 9;
      }

    case 9:
      $l[3][$l[4]] = $l[1][$l[4]];
      $.state = 10;

    case 10:
      $l[5] = $l[5] + 1;
      $.goto = 5;
      continue;

    case 11:
      $.goto = 12;
      return $unhandled($.error);

    case 12:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$5], [2, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [2, null, $s$5], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [16, null, $s$5], [16, null, $s$5]]),
    $m$4 = $M.fun("m$4", "_objectWithoutPropertiesLoose", null, $m$0, ["source", "excluded"], 0, 7, null, 0, function _objectWithoutPropertiesLoose($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      if ($l[1] == null) {
        $.result = {};
        $.goto = 8;
        continue;
      } else {
        $.state = 1;
      }

    case 1:
      $l[3] = {};
      $.goto = 2;
      $p = $mcall("keys", Object, $l[1]);
      $.state = 2;

    case 2:
      $l[4] = $p;
      $l[6] = 0;
      $.state = 3;

    case 3:
      if ($l[6] < $l[4].length) {
        $l[5] = $l[4][$l[6]];
        $.goto = 4;
        $p = $mcall("indexOf", $l[2], $l[5]);
        $.state = 4;
      } else {
        $.result = $l[3];
        $.goto = 8;
        continue;
      }

    case 4:
      if ($p >= 0) {
        $.goto = 6;
        continue;
      } else {
        $.state = 5;
      }

    case 5:
      $l[3][$l[5]] = $l[1][$l[5]];
      $.state = 6;

    case 6:
      $l[6] = $l[6] + 1;
      $.goto = 3;
      continue;

    case 7:
      $.goto = 8;
      return $unhandled($.error);

    case 8:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$6], [2, null, $s$6], [0, null, $s$6], [2, null, $s$6], [0, null, $s$6], [0, null, $s$6], [0, null, $s$6], [16, null, $s$6], [16, null, $s$6]]),
    $m$5 = $M.fun("m$5", "_toArray", null, $m$0, ["arr"], 0, 2, null, 0, function _toArray($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = ($context.call = $l[0][10])($l[1]);
      $.state = 1;

    case 1:
      $.result = $p;

      if ($.result) {
        $.state = 2;
      } else {
        $.goto = 7;
        $p = ($context.call = $l[0][9])($l[1]);
        continue;
      }

    case 2:
      if ($.result) {
        $.state = 3;
      } else {
        $.goto = 6;
        $p = ($context.call = $l[0][7])($l[1]);
        continue;
      }

    case 3:
      if ($.result) {
        $.state = 4;
      } else {
        $.goto = 5;
        $p = ($context.call = $l[0][6])();
        continue;
      }

    case 4:
      $.goto = 9;
      continue;

    case 5:
      $.result = $p;
      $.goto = 4;
      continue;

    case 6:
      $.result = $p;
      $.goto = 3;
      continue;

    case 7:
      $.result = $p;
      $.goto = 2;
      continue;

    case 8:
      $.goto = 9;
      return $unhandled($.error);

    case 9:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$7], [2, null, $s$7], [2, null, $s$7], [2, null, $s$7], [0, null, $s$7], [0, null, $s$7], [0, null, $s$7], [0, null, $s$7], [16, null, $s$7], [16, null, $s$7]]),
    $m$6 = $M.fun("m$6", "_nonIterableRest", null, $m$0, [], 0, 1, null, 0, function _nonIterableRest($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = new ($context.call = TypeError)("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      $.state = 1;

    case 1:
      $.goto = 3;
      return $raise($p);

    case 2:
      $.goto = 3;
      return $unhandled($.error);

    case 3:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$8], [0, null, $s$8], [16, null, $s$8], [16, null, $s$8]]),
    $m$7 = $M.fun("m$7", "_unsupportedIterableToArray", null, $m$0, ["o", "minLen"], 1, 5, null, 0, function _unsupportedIterableToArray($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      if (!$l[1]) {
        $.goto = 16;
        continue;
      } else {
        $.state = 1;
      }

    case 1:
      if (typeof $l[1] === "string") {
        $.goto = 14;
        $p = ($context.call = $l[0][8])($l[1], $l[2]);
        continue;
      } else {
        $.state = 2;
      }

    case 2:
      $.goto = 3;
      $p = $mcall("call", Object.prototype.toString, $l[1]);
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = $mcall("slice", $p, 8, -1);
      $.state = 4;

    case 4:
      $l[3] = $p;
      $1 = $l[3] === "Object";

      if ($1) {
        $1 = $l[1].constructor;
        $.state = 5;
      } else {
        $.state = 5;
      }

    case 5:
      if ($1) {
        $l[3] = $l[1].constructor.name;
        $.state = 6;
      } else {
        $.state = 6;
      }

    case 6:
      $1 = $l[3] === "Map";

      if ($1) {
        $.state = 7;
      } else {
        $1 = $l[3] === "Set";
        $.state = 7;
      }

    case 7:
      if ($1) {
        $.goto = 13;
        $p = $mcall("from", Array, $l[3]);
        continue;
      } else {
        $.state = 8;
      }

    case 8:
      $l[4] = $l[3] === "Arguments";

      if ($l[4]) {
        $.state = 9;
      } else {
        $.goto = 12;
        $p = $mcall("test", /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/, $l[3]);
        continue;
      }

    case 9:
      if ($l[4]) {
        $.goto = 11;
        $p = ($context.call = $l[0][8])($l[1], $l[2]);
        continue;
      } else {
        $.state = 10;
      }

    case 10:
      $.goto = 16;
      continue;

    case 11:
      $.result = $p;
      $.goto = 16;
      continue;

    case 12:
      $l[4] = $p;
      $.goto = 9;
      continue;

    case 13:
      $.result = $p;
      $.goto = 16;
      continue;

    case 14:
      $.result = $p;
      $.goto = 16;
      continue;

    case 15:
      $.goto = 16;
      return $unhandled($.error);

    case 16:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$9], [2, null, $s$9], [2, null, $s$9], [2, null, $s$9], [0, null, $s$9], [0, null, $s$9], [0, null, $s$9], [2, null, $s$9], [2, null, $s$9], [2, null, $s$9], [0, null, $s$9], [0, null, $s$9], [0, null, $s$9], [0, null, $s$9], [0, null, $s$9], [16, null, $s$9], [16, null, $s$9]]),
    $m$8 = $M.fun("m$8", "_arrayLikeToArray", null, $m$0, ["arr", "len"], 1, 5, null, 0, function _arrayLikeToArray($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $1 = $l[2] == null;

      if ($1) {
        $.state = 1;
      } else {
        $1 = $l[2] > $l[1].length;
        $.state = 1;
      }

    case 1:
      if ($1) {
        $l[2] = $l[1].length;
        $.state = 2;
      } else {
        $.state = 2;
      }

    case 2:
      $l[3] = 0;
      $.goto = 3;
      $p = new ($context.call = Array)($l[2]);
      $.state = 3;

    case 3:
      $l[4] = $p;
      $.state = 4;

    case 4:
      if ($l[3] < $l[2]) {
        $l[4][$l[3]] = $l[1][$l[3]];
        $l[3] = $l[3] + 1;
        $.goto = 4;
        continue;
      } else {
        $.result = $l[4];
        $.goto = 6;
        continue;
      }

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[0, null, $s$10], [0, null, $s$10], [2, null, $s$10], [0, null, $s$10], [0, null, $s$10], [16, null, $s$10], [16, null, $s$10]]),
    $m$9 = $M.fun("m$9", "_iterableToArray", null, $m$0, ["iter"], 0, 4, null, 0, function _iterableToArray($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[2] = typeof Symbol !== "undefined";

      if ($l[2]) {
        $l[3] = Symbol.iterator;
        $.goto = 4;
        $p = ($context.call = Object)($l[1]);
        continue;
      } else {
        $.state = 1;
      }

    case 1:
      if ($l[2]) {
        $.goto = 3;
        $p = $mcall("from", Array, $l[1]);
        continue;
      } else {
        $.state = 2;
      }

    case 2:
      $.goto = 6;
      continue;

    case 3:
      $.result = $p;
      $.goto = 6;
      continue;

    case 4:
      $l[2] = $l[3] in $p;
      $.goto = 1;
      continue;

    case 5:
      $.goto = 6;
      return $unhandled($.error);

    case 6:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[2, null, $s$11], [2, null, $s$11], [0, null, $s$11], [0, null, $s$11], [0, null, $s$11], [16, null, $s$11], [16, null, $s$11]]),
    $m$10 = $M.fun("m$10", "_arrayWithHoles", null, $m$0, ["arr"], 0, 2, null, 0, function _arrayWithHoles($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $p = $mcall("isArray", Array, $l[1]);
      $.state = 1;

    case 1:
      if ($p) {
        $.result = $l[1];
        $.goto = 4;
        continue;
      } else {
        $.state = 2;
      }

    case 2:
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
}, null, null, 1, [[2, null, $s$12], [0, null, $s$12], [0, null, $s$12], [16, null, $s$12], [16, null, $s$12]]),
    $m$11 = $M.fun("m$11", "aS", null, $m$0, [], 0, 2, "1:0-5:1", 0, function aS($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("2:2-2:18");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $brk("3:2-3:11");
      $.state = 3;

    case 3:
      $.goto = 4;
      ($context.call = eff)("a");
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk("4:2-4:11");
      $.state = 5;

    case 5:
      $.goto = 7;
      ($context.call = eff)("b");
      continue;

    case 6:
      $.goto = 7;
      return $unhandled($.error);

    case 7:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "2:2-2:18", $s$13], [2, "2:11-2:17", $s$13], [4, "3:2-3:11", $s$13], [2, "3:2-3:10", $s$13], [4, "4:2-4:11", $s$13], [2, "4:2-4:10", $s$13], [16, "5:1-5:1", $s$13], [16, "5:1-5:1", $s$13]]),
    $m$12 = $M.fun("m$12", "a", null, $m$0, [], 0, 2, "9:0-14:1", 0, function a($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("10:2-10:13");
      $.state = 1;

    case 1:
      $l[1] = 0;
      $.goto = 2;
      $brk("11:2-11:14");
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = ($context.call = eff)(1);
      $.state = 3;

    case 3:
      $l[1] = $p;
      $.goto = 4;
      $brk("12:2-12:11");
      $.state = 4;

    case 4:
      $.goto = 5;
      ($context.call = eff)("a");
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk("13:2-13:11");
      $.state = 6;

    case 6:
      $.goto = 8;
      ($context.call = eff)("b");
      continue;

    case 7:
      $.goto = 8;
      return $unhandled($.error);

    case 8:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "10:2-10:13", $s$14], [4, "11:2-11:14", $s$14], [2, "11:7-11:13", $s$14], [4, "12:2-12:11", $s$14], [2, "12:2-12:10", $s$14], [4, "13:2-13:11", $s$14], [2, "13:2-13:10", $s$14], [16, "14:1-14:1", $s$14], [16, "14:1-14:1", $s$14]]),
    $m$13 = $M.fun("m$13", "a1", null, $m$0, [], 0, 2, "16:0-21:1", 0, function a1($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("17:2-17:8");
      $.state = 1;

    case 1:
      $.goto = 2;
      $brk("18:2-18:13");
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = ($context.call = eff)(1);
      $.state = 3;

    case 3:
      $l[1] = $p;
      $.goto = 4;
      $brk("19:2-19:11");
      $.state = 4;

    case 4:
      $.goto = 5;
      ($context.call = eff)("a");
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk("20:2-20:11");
      $.state = 6;

    case 6:
      $.goto = 8;
      ($context.call = eff)("b");
      continue;

    case 7:
      $.goto = 8;
      return $unhandled($.error);

    case 8:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "17:2-17:8", $s$15], [4, "18:2-18:13", $s$15], [2, "18:6-18:12", $s$15], [4, "19:2-19:11", $s$15], [2, "19:2-19:10", $s$15], [4, "20:2-20:11", $s$15], [2, "20:2-20:10", $s$15], [16, "21:1-21:1", $s$15], [16, "21:1-21:1", $s$15]]),
    $m$14 = $M.fun("m$14", "bS", null, $m$0, [], 0, 3, "23:0-28:1", 0, function bS($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("24:2-25:16");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $p = ($context.call = eff)(2);
      $.state = 3;

    case 3:
      $l[2] = $p;
      $.goto = 4;
      $brk("26:2-26:10");
      $.state = 4;

    case 4:
      $.goto = 5;
      ($context.call = eff)($l[1]);
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk("27:2-27:10");
      $.state = 6;

    case 6:
      $.goto = 8;
      ($context.call = eff)($l[2]);
      continue;

    case 7:
      $.goto = 8;
      return $unhandled($.error);

    case 8:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "24:2-25:16", $s$16], [2, "24:11-24:17", $s$16], [2, "25:9-25:15", $s$16], [4, "26:2-26:10", $s$16], [2, "26:2-26:9", $s$16], [4, "27:2-27:10", $s$16], [2, "27:2-27:9", $s$16], [16, "28:1-28:1", $s$16], [16, "28:1-28:1", $s$16]]),
    $m$15 = $M.fun("m$15", "b", null, $m$0, [], 0, 3, "30:0-36:1", 0, function b($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("31:2-32:16");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $p = ($context.call = eff)(2);
      $.state = 3;

    case 3:
      $l[2] = $p;
      $.goto = 4;
      $brk("33:2-33:10");
      $.state = 4;

    case 4:
      $.goto = 5;
      ($context.call = eff)($l[1]);
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk("34:2-34:10");
      $.state = 6;

    case 6:
      $.goto = 7;
      ($context.call = eff)($l[2]);
      $.state = 7;

    case 7:
      $.goto = 8;
      $brk("35:2-35:16");
      $.state = 8;

    case 8:
      $l[1] = $l[2] = 100;
      $.goto = 10;
      continue;

    case 9:
      $.goto = 10;
      return $unhandled($.error);

    case 10:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "31:2-32:16", $s$17], [2, "31:11-31:17", $s$17], [2, "32:9-32:15", $s$17], [4, "33:2-33:10", $s$17], [2, "33:2-33:9", $s$17], [4, "34:2-34:10", $s$17], [2, "34:2-34:9", $s$17], [4, "35:2-35:16", $s$17], [0, "35:2-35:15", $s$17], [16, "36:1-36:1", $s$17], [16, "36:1-36:1", $s$17]]),
    $m$16 = $M.fun("m$16", "b1", null, $m$0, [], 0, 3, "38:0-43:1", 0, function b1($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("39:2-39:11");
      $.state = 1;

    case 1:
      $.goto = 2;
      $brk("40:2-40:29");
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = ($context.call = eff)(1);
      $.state = 3;

    case 3:
      $l[1] = $p;
      $.goto = 4;
      $p = ($context.call = eff)(2);
      $.state = 4;

    case 4:
      $l[2] = $p;
      $.goto = 5;
      $brk("41:2-41:9");
      $.state = 5;

    case 5:
      $.goto = 6;
      ($context.call = eff)($l[1]);
      $.state = 6;

    case 6:
      $.goto = 7;
      $brk("42:2-42:9");
      $.state = 7;

    case 7:
      $.goto = 9;
      ($context.call = eff)($l[2]);
      continue;

    case 8:
      $.goto = 9;
      return $unhandled($.error);

    case 9:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "39:2-39:11", $s$18], [4, "40:2-40:29", $s$18], [2, "40:7-40:13", $s$18], [2, "40:21-40:27", $s$18], [4, "41:2-41:9", $s$18], [2, "41:2-41:8", $s$18], [4, "42:2-42:9", $s$18], [2, "42:2-42:8", $s$18], [16, "43:1-43:1", $s$18], [16, "43:1-43:1", $s$18]]),
    $m$17 = $M.fun("m$17", "c", null, $m$0, [], 0, 12, "45:0-62:1", 0, function c($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("46:2-48:15");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $l[2] = 2;
      $.goto = 3;
      $p = ($context.call = eff)(3);
      $.state = 3;

    case 3:
      $l[3] = $p;
      $.goto = 4;
      $brk("49:2-49:11");
      $.state = 4;

    case 4:
      $.goto = 5;
      ($context.call = eff)("a");
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk("50:2-50:11");
      $.state = 6;

    case 6:
      $.goto = 7;
      ($context.call = eff)("b");
      $.state = 7;

    case 7:
      $.goto = 8;
      $brk("51:2-55:10");
      $.state = 8;

    case 8:
      $.goto = 9;
      $p = ($context.call = eff)(4);
      $.state = 9;

    case 9:
      $l[4] = $p;
      $l[5] = 5;
      $.goto = 10;
      $p = ($context.call = eff)(6);
      $.state = 10;

    case 10:
      $l[6] = $p;
      $.goto = 11;
      $p = ($context.call = eff)(7);
      $.state = 11;

    case 11:
      $l[7] = $p;
      $l[8] = 8;
      $.goto = 12;
      $brk("56:2-58:17");
      $.state = 12;

    case 12:
      $.goto = 13;
      $p = ($context.call = eff)("x");
      $.state = 13;

    case 13:
      $l[9] = $p;
      $l[10] = "y";
      $.goto = 14;
      $p = ($context.call = eff)("z");
      $.state = 14;

    case 14:
      $l[11] = $p;
      $.goto = 15;
      $brk("59:2-59:9");
      $.state = 15;

    case 15:
      $.goto = 16;
      ($context.call = eff)(9);
      $.state = 16;

    case 16:
      $.goto = 17;
      $brk("60:2-60:51");
      $.state = 17;

    case 17:
      $l[1] = $l[2] = $l[3] = $l[4] = $l[5] = $l[6] = $l[7] = $l[8] = $l[9] = $l[10] = $l[11] = 1000;
      $.goto = 18;
      $brk("61:2-61:10");
      $.state = 18;

    case 18:
      $.goto = 20;
      ($context.call = eff)(10);
      continue;

    case 19:
      $.goto = 20;
      return $unhandled($.error);

    case 20:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "46:2-48:15", $s$19], [2, "46:10-46:16", $s$19], [2, "48:8-48:14", $s$19], [4, "49:2-49:11", $s$19], [2, "49:2-49:10", $s$19], [4, "50:2-50:11", $s$19], [2, "50:2-50:10", $s$19], [4, "51:2-55:10", $s$19], [2, "51:10-51:16", $s$19], [2, "53:8-53:14", $s$19], [2, "54:8-54:14", $s$19], [4, "56:2-58:17", $s$19], [2, "56:10-56:18", $s$19], [2, "58:8-58:16", $s$19], [4, "59:2-59:9", $s$19], [2, "59:2-59:8", $s$19], [4, "60:2-60:51", $s$19], [4, "61:2-61:10", $s$19], [2, "61:2-61:9", $s$19], [16, "62:1-62:1", $s$19], [16, "62:1-62:1", $s$19]]),
    $m$18 = $M.fun("m$18", "d", null, $m$0, [], 0, 3, "64:0-69:1", 0, function d($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("65:2-65:26");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff1)("a");
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $p = ($context.call = eff)(2);
      $.state = 3;

    case 3:
      $l[1].some = $p;
      $.goto = 4;
      $brk("66:2-66:26");
      $.state = 4;

    case 4:
      $.goto = 5;
      $p = ($context.call = eff)("b");
      $.state = 5;

    case 5:
      $l[1] = $p;
      $l[2] = $l[1].some;
      $.goto = 6;
      $p = ($context.call = eff)(3);
      $.state = 6;

    case 6:
      $l[1].some = $l[2] + $p;
      $.goto = 7;
      $brk("67:2-67:18");
      $.state = 7;

    case 7:
      $.goto = 8;
      $p = ($context.call = eff)("c");
      $.state = 8;

    case 8:
      $p.some = $p.some + 1;
      $.goto = 9;
      $brk("68:2-68:14");
      $.state = 9;

    case 9:
      some["d"] = some["d"] - 1;
      $.goto = 11;
      continue;

    case 10:
      $.goto = 11;
      return $unhandled($.error);

    case 11:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "65:2-65:26", $s$20], [2, "65:2-65:11", $s$20], [2, "65:19-65:25", $s$20], [4, "66:2-66:26", $s$20], [2, "66:2-66:10", $s$20], [2, "66:19-66:25", $s$20], [4, "67:2-67:18", $s$20], [2, "67:2-67:10", $s$20], [4, "68:2-68:14", $s$20], [0, "68:2-68:13", $s$20], [16, "69:1-69:1", $s$20], [16, "69:1-69:1", $s$20]]),
    $m$19 = $M.fun("m$19", "e1", null, $m$0, [], 0, 2, "70:0-74:1", 0, function e1($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("71:2-71:22");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1, $l[1]);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $brk("72:2-72:18");
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = ($context.call = eff)(2, $l[1]);
      $.state = 4;

    case 4:
      $l[1] = $p;
      $.goto = 5;
      $brk("73:2-73:13");
      $.state = 5;

    case 5:
      $.goto = 7;
      ($context.call = eff)(2, $l[1]);
      continue;

    case 6:
      $.goto = 7;
      return $unhandled($.error);

    case 7:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "71:2-71:22", $s$21], [2, "71:11-71:21", $s$21], [4, "72:2-72:18", $s$21], [2, "72:7-72:17", $s$21], [4, "73:2-73:13", $s$21], [2, "73:2-73:12", $s$21], [16, "74:1-74:1", $s$21], [16, "74:1-74:1", $s$21]]),
    $m$20 = $M.fun("m$20", "e2", null, $m$0, [], 0, 3, "75:0-85:1", 0, function e2($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("76:2-76:22");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff)(1, $l[1]);
      $.state = 2;

    case 2:
      $l[1] = $p;
      $.goto = 3;
      $brk("77:2-77:18");
      $.state = 3;

    case 3:
      $.goto = 4;
      $p = ($context.call = eff)(2, $l[1]);
      $.state = 4;

    case 4:
      $l[1] = $p;
      $.goto = 5;
      $brk("78:2-78:13");
      $.state = 5;

    case 5:
      $.goto = 6;
      ($context.call = eff)(3, $l[1]);
      $.state = 6;

    case 6:
      $.goto = 7;
      $brk("80:4-80:26");
      $.state = 7;

    case 7:
      $.goto = 8;
      $p = ($context.call = eff)(4, $l[2]);
      $.state = 8;

    case 8:
      $l[2] = $p;
      $.goto = 9;
      $brk("81:4-81:20");
      $.state = 9;

    case 9:
      $.goto = 10;
      $p = ($context.call = eff)(5, $l[2]);
      $.state = 10;

    case 10:
      $l[2] = $p;
      $.goto = 11;
      $brk("82:4-82:15");
      $.state = 11;

    case 11:
      $.goto = 12;
      ($context.call = eff)(6, $l[2]);
      $.state = 12;

    case 12:
      $.goto = 13;
      $brk("84:2-84:13");
      $.state = 13;

    case 13:
      $.goto = 15;
      ($context.call = eff)(7, $l[1]);
      continue;

    case 14:
      $.goto = 15;
      return $unhandled($.error);

    case 15:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "76:2-76:22", $s$22], [2, "76:11-76:21", $s$22], [4, "77:2-77:18", $s$22], [2, "77:7-77:17", $s$22], [4, "78:2-78:13", $s$22], [2, "78:2-78:12", $s$22], [4, "80:4-80:26", $s$23], [2, "80:15-80:25", $s$23], [4, "81:4-81:20", $s$23], [2, "81:9-81:19", $s$23], [4, "82:4-82:15", $s$23], [2, "82:4-82:14", $s$23], [4, "84:2-84:13", $s$22], [2, "84:2-84:12", $s$22], [16, "85:1-85:1", $s$22], [16, "85:1-85:1", $s$22]]),
    $m$21 = $M.fun("m$21", "es6", null, $m$0, [], 0, 22, "87:0-98:1", 0, function es6($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk("88:9-88:33");
      $.state = 1;

    case 1:
      $.goto = 2;
      $p = ($context.call = eff_1)();
      $.state = 2;

    case 2:
      $l[4] = $p;
      $.goto = 3;
      $p = ($context.call = $l[0][5])($l[4]);
      $.state = 3;

    case 3:
      $l[5] = $p;
      $l[6] = $l[5][1];
      $l[7] = $l[5][2];
      $.goto = 4;
      $p = $mcall("slice", $l[5], 3);
      $.state = 4;

    case 4:
      $l[8] = $p;
      $.goto = 5;
      $brk("90:4-91:12");
      $.state = 5;

    case 5:
      $.goto = 6;
      $p = ($context.call = eff)(2);
      $.state = 6;

    case 6:
      $l[9] = $p;
      $.goto = 7;
      $p = ($context.call = $l[0][5])($l[9].m);
      $.state = 7;

    case 7:
      $l[10] = $p;
      $l[11] = $l[10][0];
      $l[12] = $l[10][1];
      $l[13] = $l[12].b;
      $l[14] = $l[12].m;
      $.goto = 8;
      $p = ($context.call = $l[0][3])($l[12], ["b", "m"]);
      $.state = 8;

    case 8:
      $l[15] = $p;
      $.goto = 9;
      $p = $mcall("slice", $l[10], 2);
      $.state = 9;

    case 9:
      $l[16] = $p;
      $.goto = 10;
      $brk("92:13-96:3");
      $.state = 10;

    case 10:
      $.goto = 11;
      $p = ($context.call = eff_1)();
      $.state = 11;

    case 11:
      $l[21] = $p;
      $.goto = 12;
      $p = ($context.call = eff)(2);
      $.state = 12;

    case 12:
      $l[1] = $p;
      $.goto = 13;
      $p = ($context.call = $l[0][1])($l[1].m, 2);
      $.state = 13;

    case 13:
      $l[2] = $p;
      $l[11] = $l[2][0];
      $l[3] = $l[2][1];
      $l[13] = $l[3].b;
      $l[14] = $l[3].m;
      $.goto = 14;
      $p = ($context.call = $l[0][3])($l[3], ["b", "m"]);
      $.state = 14;

    case 14:
      $l[15] = $p;
      $.goto = 15;
      $p = ($context.call = $l[21])($l[1]);
      $.state = 15;

    case 15:
      $l[17] = $p;
      $.goto = 16;
      $p = ($context.call = $l[0][1])($l[17], 3);
      $.state = 16;

    case 16:
      $l[18] = $p;
      $.goto = 17;
      $brk("92:5-92:6");
      $.state = 17;

    case 17:
      $l[6] = $l[18][1];
      $.goto = 18;
      $brk("92:8-92:9");
      $.state = 18;

    case 18:
      $l[7] = $l[18][2];
      $.goto = 19;
      $brk("97:17-97:24");
      $.state = 19;

    case 19:
      $.goto = 20;
      $p = ($context.call = eff_4)();
      $.state = 20;

    case 20:
      $l[19] = $p;
      $.goto = 21;
      $p = ($context.call = $l[0][5])($l[19]);
      $.state = 21;

    case 21:
      $l[20] = $p;
      $.goto = 22;
      $brk("97:3-97:4");
      $.state = 22;

    case 22:
      $l[6] = $l[20][0];
      $.goto = 23;
      $brk("97:9-97:13");
      $.state = 23;

    case 23:
      $.goto = 24;
      $p = $mcall("slice", $l[20], 1);
      $.state = 24;

    case 24:
      $l[8] = $p;
      $.goto = 26;
      continue;

    case 25:
      $.goto = 26;
      return $unhandled($.error);

    case 26:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "88:9-88:33", $s$24], [2, "88:26-88:33", $s$24], [2, null, $s$24], [2, null, $s$24], [4, "90:4-91:12", $s$24], [2, "91:6-91:12", $s$24], [2, null, $s$24], [2, null, $s$24], [2, null, $s$24], [4, "92:13-96:3", $s$24], [2, "92:13-92:20", $s$24], [2, "95:8-95:14", $s$24], [2, null, $s$24], [2, null, $s$24], [2, "92:13-96:3", $s$24], [2, null, $s$24], [4, "92:5-92:6", $s$24], [4, "92:8-92:9", $s$24], [4, "97:17-97:24", $s$24], [2, "97:17-97:24", $s$24], [2, null, $s$24], [4, "97:3-97:4", $s$24], [4, "97:9-97:13", $s$24], [2, null, $s$24], [0, null, $s$24], [16, "98:1-98:1", $s$24], [16, "98:1-98:1", $s$24]]);

$M.moduleExports();