// every method

//returns Boolean value 
//true if condition is true for every item else false


const numbers = [2,4,6,8,10];
const ans = numbers.every((number)=>number%2===0);
//if array had one odd no, ans will be false
console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const answ = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(answ);