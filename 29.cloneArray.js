// Clone array // Deep Copy
// Concatenate Two Arrays

let array1 = ["Kamini", "Chhabra"];
// Five ways to clone the array

// let array2 = ["Kamini", "Chhabra"];
// let array2 = array1.slice();
// let array2 = [].concat(array1);
// let array2 = [...array1]; // spread Operator
let array2 = Array.from(array1);
console.log(array2);

console.log(array1 == array2); //false // because these are tw different arrays
console.log(array1 === array2); //false // because these are tw different arrays

array1.push("Kitty");
console.log(array1);
console.log(array2);

// Clone and Concatenate together
// array2 = array1.concat(["item3","item4"]);
array2 = [].concat(array1,["item3.1","item4.1"]);
array2 = [].concat(array1).concat(["item3.2","item4.2"]); 

array2 = [...array1,"item3.3","item4.3"];
array2 = [...array1,...array1];

// console.log(array2);