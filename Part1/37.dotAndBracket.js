// Difference b/w dot notation and bracket notation
// The properties are shown in alphabetical order in Chrome Dev Tools
const person = {
    fname: "Parteek",
    lname: "******",
    age: 29,
    favPerson: "Kamini",
    "person hobbies": ["listening", "sleeping", "travelling", "loving"]
}

//console.log(person["person hobbies"]);
console.log(person.favPerson);
console.log(person["person hobbies"]); // It allows to query keys with spaces

// Adding a key from a variable 
const key = "email";

person[key] = "parteek_chhabra@hotmail.com"; //dynamic Key
// cannot use . notation in this case to add dynamic key name
console.log(person.email);
console.log(person);
