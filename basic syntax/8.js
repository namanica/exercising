function createUser(name, city) {
  let object = {
       name: name,
       city: city,
  };
  return object;
}
console.log(createUser('Tymur', 'Kyiv'));