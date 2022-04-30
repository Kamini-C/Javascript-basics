// param destructuring 

// used with object 
// mostly used in react 

const person = {
    firstName: "parteek",
    gender: "male",
    age: 29
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){ //destructure with curly braces
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);