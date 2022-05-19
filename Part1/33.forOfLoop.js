// for of loop in array
// most used loop

const fruits = ["Apple","Mango","Banana"];
const fruitsUpper = [];
const fruitsLower = [];

for(let fruit of fruits){ //of gives value of each item in array
    // fruit = "yay"; // if fruit is declared as const it cannot be changed inside the loop
    // meaning fruit is declared and initialized with every iteration 
    console.log(fruit);
    fruitsUpper.push(fruit.toUpperCase());
    fruitsLower.push(fruit.toLowerCase());
}

console.log(fruits);
console.log(fruitsUpper);
console.log(fruitsLower);
