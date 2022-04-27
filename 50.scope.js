// block scope vs function scope 

// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "parteek";
//     console.log(firstName);
// }

// console.log(firstName); 
let firstName = "Kamini" //if declared, will be accessible everywhere

function myApp() {
    if (true) {
        var firstName = "Parteek"; //Accessible inside myApp() function only
        // let firstName = "parteek"; //or const - not accessible ouside if block
        console.log("First IF", firstName);
    }

    if (true) {
        console.log("Second IF", firstName);
    }

    console.log("Outside IF", firstName);
}

myApp();
console.log(firstName); //Error - not defined (if we omit line:12)
