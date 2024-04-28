const score = 400;
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othorNumber = 123.8966;
// console.log(othorNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++ Maths ++++++++++++++++
// console.log(Math); 
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.3)); // 4

// Choose always top (High) values
// console.log(Math.ceil(4.3)); // 5

// Choose always down (Low) values 
// console.log(Math.floor(4.7)); // 4

// console.log(Math.min(4, 6, 2, 3, 8, 4, 0)); // 0
// console.log(Math.max(4, 6, 2, 3, 8, 4, 0)); // 8

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);