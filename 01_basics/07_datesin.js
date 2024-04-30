// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Tue Apr 30 2024 14:26:13 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Tue Apr 30 2024
// console.log(myDate.toISOString()); // 2024-04-30T14:26:13.656Z
// console.log(myDate.toLocaleDateString()); // 4/30/2024
// console.log(myDate.toLocaleString()); // 4/30/2024, 2:26:13 PM
// console.log(myDate.toTimeString()); // 14:26:13 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
}); 