//hoisting

console.log(hello);
var hello = "Hello Kamini";  // undefined; let and const will give ReferenceError on line 3
console.log(hello);

helloWorld(); // calling method before declaration, 
// does not work in case of function expressions and arrow functions

// helloWorldExp();  // Cannot access 'helloWorldExp' before initialization
// helloWorldArrow();  // Cannot access 'helloWorldArrow' before initialization

function helloWorld() {
    console.log("Hello, World!!");
}


const helloWorldExp = function() {
    console.log("Hello, World!!");
}

const helloWorldArrow = () => console.log("Hello, World - Arrow!!");