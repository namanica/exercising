const generateKey = (length, possible) => {
  let res ='';
  let counter = 0;
  while (counter < length){
      res += possible.charAt(Math.floor(Math.random()*possible.length));
      counter += 1;
  }
  return res;
};
console.log(generateKey(7, 'ABHJKLMBG111BJUG'));