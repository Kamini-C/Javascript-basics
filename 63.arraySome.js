// some method 
// returns Booleanvalue
//true if any one item exist for which the condition is true
// else false 
const numbers = [3,6,11,9]; 

const ans = numbers.some((number)=>number%2===0);
//if array had all odd numbers, ans will be false
console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const answ = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(answ);