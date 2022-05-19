// arrow functions with this

//with arrow function inside object, this refers to outside object
//in this case, Window object

const user1 = {
    firstName : "kamini",
    age: 20,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age); // undefined undefined
    }   
}

user1.about(user1);