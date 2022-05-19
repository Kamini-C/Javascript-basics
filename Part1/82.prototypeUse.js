// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     myAddress(){
//     return `${this.firstName}'s address is ${this.address}`;
// }
// }
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
createUser.prototype.myAddress = function () {
    return `${this.firstName}'s address is ${this.address}`;

}


const user1 = createUser('parteek', 'chhabra', 'parteek@gmail.com', 30, "jalandhar");
const user2 = createUser('kamini', 'chhabra', 'kamini@gmail.com', 16, "kapurthala");
console.log(user1);
console.log(user1.is18());