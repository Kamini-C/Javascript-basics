// use const for creating Arrays
// const pi = (22/7).toPrecision(5);
const pi = (22/7).toFixed(5);
console.log(pi);  // cannot change value of primitive const variables

// Reference Type Variables
// heap memory 0x11

const fruits = ["Banana", "Apple"];
// fruits = []; // Assignment to constant variable // this changes the pointer so gives the error

fruits.push("banana");  // This method is used to add items to arrays
console.log(fruits);

// Use const for safely declaring arrays and objects