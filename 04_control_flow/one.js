// if
// True 
// if (true) {
//     // code execute 
// }
// False 
// if (false) {
//     // code not execute
// }
// const isUserLoggedIn = true;
// const temperature = 41;
// if (temperature < 50) {
//     console.log("Less than 50");
// } else {
//     console.log("Grater than 50");
// }
// console.log("Execute");

// if (2 == "2") {
//     console.log("Code Executed...");
// } // True

// if (2 === "2") {
//     console.log("Code Executed...");
// } // False

// < : Lessthan
// <= : Lessthan or Equalto
// > : Graterthan 
// >= : Grater or Equalto
// == : Equal to
// != : Not Equal to  => 3 != 2 => True
// === : Check Type and Value also
// !== : Not Equal Check Strictly


// const score = 200;
// if (score > 100) {
//     // var power = "fly";
//     const power = "fly";
//     console.log(`User Power ${power}`);
// }
// Reference Error: Power is not defined
// console.log(`User Power ${power}`);


const balance = 1000;
// if (balance > 500) {
//     console.log("Executed");
// }

// Explicite Scope (Bad Practice)
// if (balance > 500) console.log("Executed"), console.log("test2");

// Nesting 
// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}