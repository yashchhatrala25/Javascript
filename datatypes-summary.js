//  Primitive:
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is a dynamically typed language

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 1534567878665543456464654646n;


// Reference Types (Non-primitive):
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Yash",
    age: 25
}
const myFunction = function(){
    console.log("Hello World!!");
}

// console.log(typeof outSideTemp);
// console.log(typeof scoreValue);
console.log(typeof myFunction);