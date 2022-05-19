let firstName = "PARTEEK"

/*
0 1 2 3 4 5 6 // INDEX
P A R T E E K // VARIABLE
1 2 3 4 5 6 7 // LENGTH
*/

console.log(firstName);
console.log(firstName[1+1]); // Prints Index at 2 --> R
console.log(firstName[6]); // Prints Index at 6 --> K
console.log(firstName[3555]); // undefined

// index = length - 1
console.log(firstName.length); // 7

console.log(firstName[firstName.length-1]); // Prints Last Index  --> K

