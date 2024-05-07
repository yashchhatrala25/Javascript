// const coding = ["js", "ruby", "java", "python", "sql"];
// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item;
// })
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => num > 5);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//   return num > 5
// });
// console.log(newNums);

// for (const nums of myNums) {
//   if (nums > 5) {
//     console.log(nums);
//   }
// }

// const newNums = [];
// myNums.forEach(item => {
//   if (item > 4) {
//     console.log(item);
//   }
// });


const books = [
  {
    title: "Book One", genre: "Fiction", pubilsh: 1981, edition: 2008
  },
  {
    title: "Book Two", genre: "Non-Fiction", pubilsh: 1992, edition: 2007
  },
  {
    title: "Book Three", genre: "History", pubilsh: 1999, edition: 2010
  },
  {
    title: "Book Four", genre: "Non-Fiction", pubilsh: 2009, edition: 2014
  },
  {
    title: "Book Five", genre: "Science", pubilsh: 1987, edition: 2010
  },
  {
    title: "Book Six", genre: "Fiction", pubilsh: 1986, edition: 1996
  },
  {
    title: "Book Seven", genre: "History", pubilsh: 1988, edition: 1998
  },
  {
    title: "Book Eight", genre: "Science", pubilsh: 1997, edition: 2011
  }
]

let userBooks = books.filter((bk) => bk.genre === "History")
// userBooks = books.filter((bk) => bk.pubilsh >= 2000)
userBooks = books.filter((bk) => bk.pubilsh >= 1995 && bk.genre === "History")
console.log(userBooks);