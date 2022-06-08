//let and const are hoisted

// Error for let and const
    // Uncaught ReferenceError: 
    // Cannot access 'firstName' before initialization

// Error if firstname is not defined anywhere
    // Uncaught ReferenceError: 
    // firstName is not defined

console.log(firstName);

// console.log(firstName);
let firstName;
console.log(firstName);

console.log(typeof firstName); // undefined

// let firstName = "kamini";



/*
TDZ- Temporal dead zone
a variable is in TDZ untill initialized
and it will keep on giving reference error
*/