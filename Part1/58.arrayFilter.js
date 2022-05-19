// filter method 
//used to filter out elements satisfying certain condition

const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0; //returns boolean value
});
const oddNumbers = numbers.filter((number)=>{
    return number % 2 !== 0; //returns boolean value
});
console.log(evenNumbers);
console.log(oddNumbers);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const costlyItems = userCart.filter((product) => {
    return product.price > 14000
});
console.log(costlyItems)