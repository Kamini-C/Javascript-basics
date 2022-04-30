// map method 

//creates a new array
// when using, callback func must have return statement

const numbers = [3,4,6,1,8];

// const square = function(number){ //callback func can be defined ouside the func
//     return number*number;
// }

const squareNumber = numbers.map((number, index) => {
    return `index: ${index} , ans: ${number * number}`;
});
console.log(squareNumber);

const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);