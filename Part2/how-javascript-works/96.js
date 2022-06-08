// function execution context 

let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName){
    //console.log(arguments);  //is not used anymore
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("kamini", "sharma"); //generates new function execution context inside global execution context
console.log(personName);