// class keyword introduced in ECMA2015 (ES6)
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called") //will be called every time we use new keyword
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
//methods will be added to prototype of newly created Object 
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    myAddress(){
        return `${this.firstName}'s address is ${this.address}`;
    }

}

const user1 = new CreateUser('parteek', 'chhabra', 'parteek@gmail.com', 30, "jalandhar");
const user2 = new CreateUser('kamini', 'chhabra', 'kamini@gmail.com', 16, "kapurthala");

console.log(user1);
console.log(user1.is18());
console.log(user2.myAddress());

console.log(Object.getPrototypeOf(user1));
