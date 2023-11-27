const range = (start, end) => {
  if (start > end) return [];
  if (start > 30 || start < 15 || end < 15 || end > 30) return [];
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;

}

console.log(range(20, 30));