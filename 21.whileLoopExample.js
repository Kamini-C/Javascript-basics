// while Loop Example
//Sum of first n natural numbers

console.group("First Method:");
var startTime = performance.now();
let num = 1001; //First method might take less time if this number is less 10000
let total = 0;
let i = 1;

while (i <= num) {
    total += i
    //console.log(total);
    i++;
}

var endTime = performance.now();
console.log("Final Total:", total);

console.log(`Call for whileLoop took ${endTime - startTime} milliseconds`);
console.groupEnd();

// ********************** Second Way *****************************
console.group("Second Method:");
var startTime2 = performance.now();
let num2 = 1001; //First method might take less time if this number is less 10000
let total2 = 0;
total2 = (num2 * (num2 + 1)) / 2;
console.log("Final Total2:", total2);
var endTime2 = performance.now();
console.log(`Call for formula method took ${endTime2 - startTime2} milliseconds`);
console.groupEnd();