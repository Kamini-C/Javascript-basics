// Destructuring of Nested Objects

const users = [
    { userID: 1, firstName: "Bihari Lal", lastName: "Chhabra", age: "68", gender: "Male" },
    { userID: 2, firstName: "Kamlesh", lastName: "Chhabra", age: "65", gender: "Female" },
    { userID: 3, firstName: "Aseem", lastName: "Sahil", age: "35", gender: "Male" },
    { userID: 4, firstName: "Saloni", lastName: "Jaggi", age: "31", gender: "Female" },
    { userID: 5, firstName: "Parteek", lastName: "Chhabra", age: "29", gender: "Male" },
];

console.log(users);

let var1 = users[4].firstName;
console.log("Long Cut:", var1);

let [ 
    , 
    ,{ firstName: firstNameIndex2, gender },
    { firstName }
] = users;

console.log("firstNameIndex2", firstNameIndex2);
console.log("gender", gender);
console.log("firstName", firstName);

