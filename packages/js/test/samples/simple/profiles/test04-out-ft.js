function a() {
  var a = M.context();
  console.log('hi');
  return M.chain(e1(), a_1, a_7);
}

function a_1(a) {
  return M.chain(e2(), a_2, a_7);
}

function a_2(a) {
  return M.chain(p1(), a_3, a_7);
}

function a_3(a) {
  console.profile('minimal');
  return M.chain(p2(), a_4, a_7);
}

function a_4(a) {
  console.profileEnd();
  return M.chain(e1(), a_5, a_7);
}

function a_5(a) {
  return M.chain(e(2), a_6, a_7);
}

function a_6(a) {
  return M.pure();
}

function a_7(a, e) {
  return M.raise(e);
}