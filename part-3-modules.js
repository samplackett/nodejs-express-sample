// modules
const names = require('./part-4-names');
const sayHi = require('./part-5-utils');
const data = require('./part-6-alt-flavour');
require('./part-7-mind-grenade');
console.log(names);
console.log(sayHi);
sayHi('General Kenobi');
sayHi(names.anakin);
sayHi(names.grevious);
sayHi(names.obiwan);

console.log(data);