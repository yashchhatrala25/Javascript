// Immediately Invoked Function Expression (IIFE) 

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai();

// ERROR
// function chai() {
//     console.log(`DB CONNECTED`);
// }()

(function chai () {
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("yash")
