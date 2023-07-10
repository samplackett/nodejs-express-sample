// modules
const names = require('./part-04-names');
const sayHi = require('./part-05-utils');
const data = require('./part-06-alt-flavour');
require('./part-07-mind-grenade');
console.log(names);
console.log(sayHi);
sayHi('General Kenobi');
sayHi(names.anakin);
sayHi(names.grevious);
sayHi(names.obiwan);

console.log(data);