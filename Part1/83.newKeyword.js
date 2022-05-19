// new keyword 
// 1.) this = {}
// 2.) return {} 
// const user = Object.create(createUser.prototype);

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
// function name starts with Capital letter by convention
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    //no return statment required
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.myAddress = function () {
    return `${this.firstName}'s address is ${this.address}`;
}


const user1 = new CreateUser('parteek', 'chhabra', 'parteek@gmail.com', 30, "jalandhar");
const user2 = new CreateUser('kamini', 'chhabra', 'kamini@gmail.com', 16, "kapurthala");

console.log(user1);
console.log(user1.is18());
console.log(user2.myAddress());