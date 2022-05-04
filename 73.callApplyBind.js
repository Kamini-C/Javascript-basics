const user1 = {
    firstName : "parteek",
    age: 29, 
    about: function(){
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName : "kamini",
    age: 21,
    
}
user1.about(); // parteek 29
user1.about.call(user2); // kamini 21
user1.about.call(); // undefined undefined

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const newUser = {
    firstName : "parteek",
    age: 29, 
}
about.call(newUser,"singing","rehman");
about.call(user2,"painting","arijit");

// apply
// about.apply(newUser, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();
