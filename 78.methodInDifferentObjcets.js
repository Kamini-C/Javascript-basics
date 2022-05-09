const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    address(){
        return `User address is ${this.address}`;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('parteek', 'chhabra', 'parteek@gmail.com', 30, "my address");
const user2 = createUser('kamini', 'chhabra', 'kamini@gmail.com', 16, "my address");
console.log(user1.about());
console.log('I user an adult:',user2.is18());