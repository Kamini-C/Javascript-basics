let numbers = [1,2,3];
//let numbers = new Array(1,2,3); //Internal command


console.log(numbers.prototype); //undefined

console.log(Object.getPrototypeOf(numbers));
//gives all array functions //OR
console.log(Array.prototype); //[constructor: ƒ, concat: ƒ..........] == Array

console.log(numbers);


function hello(){
    console.log("hello");
}
console.log(hello.prototype) //{constructor: ƒ} == Object
