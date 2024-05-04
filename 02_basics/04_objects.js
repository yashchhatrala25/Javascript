// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "someuser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Yash",
            lastName: "Chhatrala"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj4 = {5: 'e', 6: 'f'}
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "test@gmail.com"
    },
    {
        id: 2,
        email: "test1@gmail.com"
    },
    {
        id: 3,
        email: "test2@gmail.com"
    },
    {
        id: 4,
        email: "test3@gmail.com"
    },
    {
        id: 5,
        email: "test4@gmail.com"
    },
]

// user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));