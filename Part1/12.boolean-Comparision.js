// boolean & comparison operator

let num1 = 5;
let num2 = 7;

console.log(num1 > num2); // false
num2 = 5;
console.log(num1 > num2); // false
num2 = 4;
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true


console.clear();
// == vs ====

num1 = "7";
num2 = 7;
console.log(num1 == num2);  //true // Check for only values // Only happens in JS :)
console.log(num1 === num2); // false //Checks for datatype as well

// != vs !==
console.log(num1 != num2); //false // because they are equal 7=7
console.log(num1 !== num2); //true // because they are not equal "7" != 7
