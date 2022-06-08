// lexical environment, scope chain

const lastName = "kamini";

const printName = function(){
    const firstName = "sharma";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();