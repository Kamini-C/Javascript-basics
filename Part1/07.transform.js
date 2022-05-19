// trim();
// toUpperCase();
// toLowerCase();
// slice();

let firstName = "       parTEEk     ";
console.log(firstName);  // Non-Trimmed String
console.log(firstName.length);  // 19
firstName = firstName.trim();   // Trims the white spaces and assigns it to variables
console.log(firstName); // Trimmed String
console.log(firstName.length);  // 7


// toUpperCase();
console.log("----------");
console.log(firstName.toUpperCase());
firstName = firstName.toUpperCase();
console.log(firstName);

// toLowerCase();
firstName = firstName.toLowerCase();
console.log(firstName);

console.log(firstName);

// slice(startIndex, endIndex);
// endIndex character is not included

// Part of the string
console.log(firstName[0] + firstName[1]+ firstName[2] + firstName[3]);

/*
0 1 2 3 4 5 6 // INDEX
P A R T E E K // VARIABLE
*/

//console.clear();
console.log(firstName.slice()); // gives the same string
console.log(firstName.slice(0)); // gives the same string
console.log(firstName.slice(1,1)); // gives ""
console.log(firstName.slice(1,2)); // gives letter  "a"
console.log(firstName.slice(1)); // gives "arteek"
firstName = firstName.slice(-2,-2); // gives "" // no negative indexes


