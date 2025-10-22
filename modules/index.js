const sum = require('./modules/sum,subtract');
const multiply = require('./modules/multi');
const { divide, subtract } = require('./modules/div-sub');

console.log('Sum: ', sum(10, 5));
console.log('Multiply: ', multiply.multiply(10, 5));
console.log('Divide: ', divide(10, 5));
console.log('Subtract: ', subtract(10, 5));
