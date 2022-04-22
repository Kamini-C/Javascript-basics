// objects
// objects are reference type
// objects store key value pairs
// obects don't have index

// Objects Creation
// {} => is also called as Object Literal

const person = {
    fname: "Parteek",
    lname: "*******",
    age: 29,
    favPerson: "Kamini",
    hobbies: ["listening", "sleeping", "travelling", "loving wifey"],
    "place of birth": "Jalandhar"    
}

console.log(person);
console.log(typeof person);
console.log(person.favPerson); // all keys are string in objects
console.log(person["place of birth"]); // [] notation is needed for such keys
console.log(person["hobbies"]);

// adding or updating more key value pairs
person.gender = "male"; // we can alternate between both notations
person["lname"] = "Chhabra"; //keys are unique in object
console.log(person);