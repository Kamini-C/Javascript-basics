/* Create a game and ask for number against a winning number
if user input matches winning number, show a message
else show if the number is to high or low

winning No = 19
19 // right
17 // too low
21 // too high

*/

const studentsInClass = 50;

let userGuess = prompt("Guess, how many students in the class?(Please enter number)");
//prompt always take string values, so converting it into number
//console.log(typeof userGuess);

if(isNaN(parseFloat(userGuess))){
    let message = ("User didn't input number");
    console.log(message);
    // alert(message);
}else{
    userGuess = +userGuess;
    if(userGuess === studentsInClass){
        console.log("You are absolutely right !!!");
    }else{
        if(userGuess > studentsInClass){
            console.log("Try again, your guess is high");
        }else{
            console.log("Try again, your guess is low");
        }
    }
}