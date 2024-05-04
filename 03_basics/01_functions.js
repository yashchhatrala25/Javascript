function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");    
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
    // console.log("Yash");
    // console.log("Yash");
    let result = num1 + num2;
    return result
    // return num1 + num2;
}
const result = addTwoNumbers(5, 3);
// console.log("Result: ", result);

// function logInUserMessage(username) {
//     // if (username === undefined) {
//     //     console.log("Please enter a username");
//     //     return;
//     // }
//     if (!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just loggedin`;
// }
// console.log(logInUserMessage());
// console.log(logInUserMessage("Yash"));
// const username = logInUserMessage("Yash")
// console.log(username);

function logInUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just loggedin`;
}
console.log(logInUserMessage());