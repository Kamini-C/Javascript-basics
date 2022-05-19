const fruits = ["Apple","Mango","Banana"];
const fruitsUpper = [];
const fruitsLower = [];
let i=0;
 
// while(i < fruits.length){
//     console.log(fruits[i]);
//     fruitsUpper.push(fruits[i].toUpperCase());
//     fruitsLower.push(fruits[i].toLowerCase());
//     i++;
//  }

// console.log(fruits);
// console.log(fruitsUpper);
// console.log(fruitsLower);
  
do{
    console.log(fruits[i]);
    fruitsUpper.push(fruits[i].toUpperCase());
    fruitsLower.push(fruits[i].toLowerCase());
    i++;
}while(i < fruits.length)

console.log(fruits);
console.log(fruitsUpper);
console.log(fruitsLower);