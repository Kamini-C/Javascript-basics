// Iterating Object

const person = {
    fname: "Parteek",
    lname: "******",
    age: 29,
    favPerson: "Kamini",
    "person hobbies": ["listening", "sleeping", "travelling", "loving"]
}

// console.log(person);
/* 
2 ways:
for in loop // iterate index
Object.keys
 */

for (let key in person){
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person)); // returns array of keys only
// Next we can iterate over these array of keys using for loop
for(let key of Object.keys(person)){
    console.log(`${key} : ${person[key]}`);
}