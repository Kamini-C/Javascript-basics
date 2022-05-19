//mistake to avoid
//cannot assign object method to a variable without binding

const user1 = {
    firstName : "parteek",
    age: 12,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

user1.about();

const myFunc = user1.about; // undefined undefined
// above eqaution == 
// const myFunc = function(){
    //     console.log(this.firstName, this.age); // here this = Window
    // };


//right way of binding and then assiging method
const rightFunc = user1.about.bind(user1); 

myFunc();
rightFunc();