// find method 

// returns only first occurence 

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string){
    return string.length === 3; 
}

// const ans = myArray.find(isLength3);
//returns cat only and never gets to dog
const ans = myArray.find((string)=>string.length===3);
console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser); // {userId : 3, userName: "nitish"},