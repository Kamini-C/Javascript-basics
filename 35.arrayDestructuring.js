// Array Destructuring
const myArray = ["value1", "value2","value3", "value4", "value5"];
// Tedious Way
let myVar1 = myArray[0];
let myVar2 = myArray[1];

//Shortcut
let [,myVar3,myVar4, ...myVar5] = [...myArray]
.map(ele => ele.toUpperCase());  // if the array does has less values, those will be undefined
//let [myVar3,myVar4,myVar5,myVar6] = [...myArray].map(ele => ele.toUpperCase());  // if the array does has less values, those will be undefined
// , will skip the value
// ...variable should come into last because it will look for the rest of the values

console.log(myVar1, myVar2);  // Printing all variables
console.log(myVar3, myVar4, myVar5);  // Printing all variables