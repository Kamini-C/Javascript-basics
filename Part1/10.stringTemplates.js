// String Templates

let age = 29;
let firstName = "Parteek";
let wifeName = "Kamini";

// "My name is Parteek and my age is 29 and I am married to Kamini"
let aboutMe = "My name is " +firstName+ " and my age is " +age+ " and I am married to " +wifeName; 
console.log(aboutMe);

aboutMe = `My name is ${firstName} and my age is ${age} and I am married to ${wifeName}`

console.log(aboutMe);