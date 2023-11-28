'use strict';
// for in and for of loops for arrays and objects
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;
// console.log(numbers);

// for (const i in numbers) {
//   const value = numbers[i];
//   console.log(i, typeof i, value);
// }

for (const i of numbers) {
  const value = numbers[i];
  console.log(i, typeof i, value);
}