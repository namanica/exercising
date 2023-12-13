const ipToInt = (ip = '127.0.0.1') => {
  let ipToArray = ip.split('.').map(Number);
  for (let i = 0; i < ipToArray.length - 1; i++) {
      for (let j = ipToArray.length - 1; j > i; j--)
      {
          ipToArray[i] = ipToArray[i] << 8;
      }

  } const sum = ipToArray.reduce((total, amount) => total + amount);
  return sum;
};
console.log(ipToInt('127.0.0.1'));