const coding = ["js", "ruby", "java", "python", "sql"];

// coding.forEach( function (item) {
//   console.log(item);
// } )

// coding.forEach((item) => {
//   console.log(item);
// } )

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const Coding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "C++",
    languageFileName: "cpp"
  },
  {
    languageName: "java",
    languageFileName: "java"
  }
]

Coding.forEach((item) => {
  console.log(`Language Name is : ${item.languageName} and FilName is : ${item.languageFileName}`);
});