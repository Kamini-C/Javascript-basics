// for Loop in Array

let fruits = ["Mango","Apple","Banana","Grapes"];

console.log(fruits.length);

let fruits2 = [];
for (i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits[i].toUpperCase());
}

console.log(fruits);
console.log(fruits2);