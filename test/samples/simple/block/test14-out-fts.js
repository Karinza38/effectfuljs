function a_1(i) {
  if (i++) return a_2(i);else {
    return M.jM1(eff2(i), a_3, i);
  }
}

function a_2(i) {
  return M.jM1(eff1(i), a_3, i);
}

function a_3(i) {
  return eff(i);
}

function a() {
  var i;
  i = 0;
  return M.jM1(eff(i), a_1, i);
}