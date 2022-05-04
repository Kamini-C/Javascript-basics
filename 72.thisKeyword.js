// "use strict"; //Output = undefined if using strict mode

// console.log(this); //Gives Window object 
//OR
// console.log(window);
//OR
function myFunc(){
    console.log(this)
}
myFunc(); // OR 
//window.myFunc();