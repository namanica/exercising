function collection(array){
  const counter = { number: 0, string: 0, boolean: 0 };
  for (element of array) {
      counter[typeof element]++;

  } return counter;

}

console.log( collection([true, 'hello', 5, 12, -200, false, false, 'word']));