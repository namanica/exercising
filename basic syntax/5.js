const rangeOdd = (start, end) => {
  if (start > end) return [];
  if (start > 30 || start < 15 || end < 15 || end > 30) return [];
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;

}

console.log(rangeOdd(20, 30));