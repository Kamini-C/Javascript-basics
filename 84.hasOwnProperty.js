function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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

for(let key in user1){
    // console.log(key); //gives prototype keys as well
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }

}
