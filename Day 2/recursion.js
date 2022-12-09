console.clear();
("use strict");

function f() {
  const a = 5;
  return a;
}
let fy = f();
// console.log(fy);

let i = 1;
function er(a, b) {
  if (i <= b) {
    console.log(`${a} * ${i} =  ${a*i}`);
    i++;
    er(a, b);
  }
}

er(10,10)
