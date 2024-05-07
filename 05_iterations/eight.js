const myNums = [1,2,3,4];

// const myTotal = myNums.reduce((acc, curr) => {
//   console.log(`acc: ${acc}        curr: ${curr}`);
//   return acc + curr;
// }, 0)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python course",
    price: 999
  },
  {
    itemName: "Mobile Dev course",
    price: 5999
  },
  {
    itemName: "Data Science course",
    price: 12999
  },
]

// Method 1
// const priceTotal = shoppingCart
//                       .map((item) => item.price)
//                       .reduce((acc, curr) => acc + curr, 0);

// Methos 2
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);