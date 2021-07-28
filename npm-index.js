const chalk = require('chalk');


// console.log(chalk.blue.underline('hello'));

// console.log(chalk.blue.bold('hello'));

// console.log(chalk.blue.underline.inverse('hello'));
// console.log(chalk.green.underline.inverse('success'));
// console.log(chalk.red.underline.inverse('false'));

//form validation
const validator = require('validator');
const res = validator.isEmail("lokanjaneyulu1999@gmail.com");
// const res = validator.isEmail("lokanjaneyulu1999@gmai");
console.log(res ? chalk.green.underline.inverse(res) : chalk.red.underline.inverse(res));