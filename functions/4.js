function Methods(obj){
  for (let key in obj){
      obj[key] = obj[key].length;
  } return Object.entries(obj);


} console.log(Methods(
iface = {
  m1: x => [x],
  m2: function (x, y) {
      return [x, y];
  },
  m3(x, y, z) {
      return [x, y, z];
  },
}
));