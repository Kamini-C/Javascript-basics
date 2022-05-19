//call
//1. One Way
const user1 = {
    firstName : "parteek", age: 29, 
    about: function(){ //method
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName : "kamini", age: 21,
}

user1.about(); // parteek 29
//call an object's method for other object
user1.about.call(user2); // kamini 21
//need to pass object in call() to method
user1.about.call(); // undefined undefined


//2. Another Way
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const newUser = {
    firstName : "rinky",
    age: 22, 
}

about.call(newUser,"singing","rehman");
about.call(user2,"painting","arijit");


// apply
about.apply(newUser, ["guitar", "sonu"]); // similar to call but uses array to pass other arguments


//bind
// bind returns a function that can be called
const bindFunc = about.bind(user2, "keyboard", "sonu nigam");
bindFunc();
