// const userEmail = "yash@gmail.com";
// const userEmail = "";
const userEmail = [];

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// - false
// - 0
// - -0
// - BigInt
// - 0n
// - ""
// - null
// - undefined
// - NaN

// truthy values
// - true
// - "0"
// - "false"
// - " "
// - []
// - {}
// - function(){}

if (userEmail.length === 0) {
  // console.log("Array is Empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is Empty");
}

// Nullish Coalesing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 50
val1 = null ?? 10 ?? 15 ?? 50; // 10
console.log(val1);

// Terniary Operator
// confition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
