//if Else condition

//check for games
let age = 18;
if(age>=18){
    console.log("User can play Pubg");
}else{
    console.log("User can play Mario");
}


//check for even number
// Meaning divide by 2 , remainder should be 0
// console.log(9%3);  // Remainder // Modulo // returns 0
let number =  13;
let result = (number  % 2 == 0) ? "Even" : "Odd";
console.log("Number is : ", result)
console.log("1.Number is " + ((number%2) == 0) ? "Even" : "Odd" );  
//Incorrect because of brackets (replace + with , to resolve)
console.log("0.Number is " + (((number%2) == 0) ? "Even" : "Odd" ));   //Correct