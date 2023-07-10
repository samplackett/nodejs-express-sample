// npm --version - version number
// npm i <pckg> - install package
// npm i -g <pckg> - install package globally

// package.json - manifest file.
// can create file manually in the root
// or use npm init (step by step)
// or npm init -y (make settings default)

const lodash = require('lodash');

const items = [1,[2,[3, [4]]]];

const flatArray = lodash.flattenDeep(items);
console.log(flatArray);