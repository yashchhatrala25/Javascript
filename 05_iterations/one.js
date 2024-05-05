// for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// console.log(index);

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let num = 1; num <= 10; num++) {
    const element = num;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// We can't use because it is a scope level element
// console.log(element);


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner Loop : ${j} and Inner loop : ${i}`);
//     }
// }


// Print Tables 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ========> ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

const myArray = ["graps", "banana", "Orange", "Mango"];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue
// Break
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

// Continue 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}