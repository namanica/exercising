function inc1(a) {
  let res = a+1;
  return res;
}
const a = 5;
const b = inc1(a);
console.dir({a, b});

function inc2(obj) {
  obj[Object.keys(obj).join("")] = obj[Object.keys(obj).join("")] + 1;
  return obj;
}
const obj = { n: 5 };
console.dir(inc2(obj));