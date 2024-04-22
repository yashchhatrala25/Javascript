const accountId = 144553;
let accountEmail = "yash@gmail.com";
var accountPassword = "123456";
accountCity = "Ahmedabad";
let accountState;

// accountId = 2; // not allowed
accountEmail = "yash123@gmail.com";
accountPassword = "5454544";
accountCity = "Rajkot";

/**
Prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);