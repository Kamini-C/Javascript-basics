// methods
// function inside object


const person = {
    firstName : "person1",
    age: 25,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
// console.log(person.about());
person.about();


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const myFunc = {
    firstName : "kamini",
    age: 21,
    about: personInfo
}
const myMan = {
    firstName : "parteek",
    age: 29,
    about: personInfo
}
const myPerson = {
    firstName : "rinky",
    age: 29,
    about: personInfo
}

myFunc.about();
myMan.about();
myPerson.about();

