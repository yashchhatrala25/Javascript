const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros);

// const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Yash"));
console.log(Array.from("Yash"));
console.log(Array.from({name: "Yash"})); // instrecting

let score_one = 100;
let score_two = 200;
let score_three = 300;
console.log(Array.of(score_one, score_two, score_three));