// for in loop
const fruits = ["Apple","Mango","Banana"];
const fruitsUpper = [];
const fruitsLower = [];

for(let index in fruits){ //in gives index of each item
    // index = 1; // if index is declared as const it cannot be changed inside the loop
    // meaning index is declared and initialized with every iteration 
    console.log(index);
    console.log(fruits[index]);
    fruitsUpper.push(fruits[index].toUpperCase());
    fruitsLower.push(fruits[index].toLowerCase());
}

console.log(fruits);
console.log(fruitsUpper);
console.log(fruitsLower);