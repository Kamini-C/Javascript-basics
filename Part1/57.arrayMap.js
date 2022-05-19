// map method 

//creates a new array
// when using, callback func must have return statement
//used to perform some action on each array element

const numbers = [3,4,6,1,8];

// const square = function(number){ //callback func can be defined ouside the func
//     return number*number;
// }

const squareNumber = numbers.map((number, index) => {
    return `index: ${index} , ans: ${number * number}`;
});
console.log(squareNumber);

const users = [
    { firstName: "parteek", age: 30 },
    { firstName: "kamini", age: 21 },
    { firstName: "rinky", age: 21 },
    { firstName: "vikas", age: 29 },
]

const userNames = users.map((user) => {
    return user.firstName+" people";
});

console.log(userNames);