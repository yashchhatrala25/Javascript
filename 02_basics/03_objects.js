// singleton
// Object.create

// object literals

const mySym = Symbol("mykey1");

const JsUser = {
    name: "Yash",
    "full name": "Yash Chhatrala",
    [mySym]: "mykey1",
    age: 24,
    location: "Gujarat",
    email: "yash@gmail.com",
    isLoggedIn: false,
    lartLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "test@gmail.com";
// console.log(JsUser.email);

// Freez Object any Changes not apply on this Object
// Object.freeze(JsUser)
// JsUser.email = "testnew@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

