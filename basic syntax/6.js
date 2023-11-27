function average(a, b){
  let c = (a + b)/2;
  return c;
}
//console.log(average(5, 7));

function square(x) {
  let a = x**2;
 // let a = Math.pow(x, 2);
  // let a = x*x;
  return a;
}
//console.log(square(3));

function cube(x) {
   let b = x**3;
  // let b = Math.pow(x, 3);
  // let b = x*x*x;
  return b;
}
//console.log(cube(3));
const calculate = () => {
  let arr = [];
  for (let x = 0; x <= 9; x++) {
      arr.push(average(square(x), cube(x)));
  }
  return arr;
}

console.log(calculate());