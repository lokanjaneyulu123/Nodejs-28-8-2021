// const name = require("./operations");
// const add = require("./operations");

// console.log(add(5,5));
// const name = require("./operations");
// console.log(name);



    //either
// const operations = require("./operations");
// console.log(operations);
// console.log(operations.add(5,5));
// console.log(operations.sub(10,5));
    //or
const { add, sub, mult, name } = require("./operations")
console.log(add(5,5));
console.log(sub(10,5));
console.log(mult(10,5));
console.log(name);