// Maps
// map is an iterable
// store data in ordered fashion

//Similarities with Objects
    //1. store key value pair
    //2. duplicate keys are not allowed like objects


// different between maps and objects
    // objects can only have string or symbol as key 
    // in maps you can use anything as key like array, number, string 

// object literal 
// key -> string 
// key -> symbol

const myPerson = {
    firstName : "parteek",
    age: 7,
    1:"one"
}
// console.log(myPerson.firstName);
// console.log(myPerson["firstName"]);
console.log(myPerson[1]);
for(let key in myPerson){
    console.log(typeof key); //String
}

// key value pair in Map
const person = new Map();
person.set('firstName', 'parteek');
person.set('age', 30);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);

console.log(person.firstName); //undefined
console.log(person['firstName']); //undefined
//Solution:
console.log(person.get('firstName'));

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
console.groupCollapsed("For Loop")
for(let [key, value] of person){ //destructuring
    // console.log(Array.isArray(key));
    console.log(key, " => " ,value)
}
console.groupEnd()

const person1 = {
    id: 1,
    firstName: "parteek"
}
const person2 = {
    id: 2,
    firstName: "kamini"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 30, gender: "male"});
extraInfo.set(person2, {age: 29, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
