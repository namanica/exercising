let arrPhoneBook = [
  {name: 'Tymur', phone: '+380445554439'},
  {name: 'Danyil', phone: '+380388904433'},
  {name: 'Mykyta', phone: '+380755556735'},
];

function findPhoneByName(name){
  for (let obj of arrPhoneBook) {
      for (let key in obj) {
          if (name === obj[key]) {
              let s = obj.name;
              let k = obj.phone;
              return '{' + obj.name + ':' + obj.phone + '}' ;
          }
      }
  }

}

console.log(findPhoneByName('Mykyta'));