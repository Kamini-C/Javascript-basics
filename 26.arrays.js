// Intro to Arrays: Ordered Collection of items
// Reference Type

// How to Create Arrays
// Indexing
// typeof Array is Object, so better check with Array.isArray
// Arrays are mutable, meaning the original value can be changed.

let fruits = "apple";
console.log(fruits);

fruits = ["apple", "grapes", "mango"];
let number = [1,2,3,4];
let mixed = ["apple",1, undefined, true, null];

console.log(fruits);
console.log(fruits[2]);
fruits[1] = "banana";
console.log(fruits);
let obj = {}; //Object Literal

console.log(typeof fruits);
console.log(typeof obj);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));