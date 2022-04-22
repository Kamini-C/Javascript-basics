// Objects inside Arrays OR
// Array of Objects
// Very Useful in real world applications

const users = [
    { userID: 1, firstName: "Bihari Lal", lastName: "Chhabra", age: "68", gender: "Male" },
    { userID: 2, firstName: "Kamlesh", lastName: "Chhabra", age: "65", gender: "Female" },
    { userID: 3, firstName: "Aseem", lastName: "Sahil", age: "35", gender: "Male" },
    { userID: 4, firstName: "Saloni", lastName: "Jaggi", age: "31", gender: "Female" },
    { userID: 5, firstName: "Parteek", lastName: "Chhabra", age: "30", gender: "Male" },
]

console.log(users);
for (let user of users) {
    console.log(user.firstName);
}

// Learned Map and Filtering using Map
const mappedUsers = users.map(user => user.firstName.toUpperCase())
const filteredUsers = users.filter(user => user.age > 30) //filters/returns the items for which condition holds true

console.log(mappedUsers);
console.log(filteredUsers);