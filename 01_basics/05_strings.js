const name = "Yash";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('yash-chhatrala');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-12, 5);
// console.log(anotherString);

const newStringOne = "           Yash              ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://yash.com/yash%20chhatrala";
// console.log(url.replace('%20', '-'));
// console.log(url.includes('yash'));

console.log(gameName.split('-'));