const object1 = {
  name: "David",
};
//object1.name = "Illya";
//console.log(object1);
let object2 = {
  name: "Mykyta",
};
//object2.name = "Nica";
let object3 = {
  name : "Illya",
};
object2 = object3;
//object1 = object3;
console.log(object2, object1);