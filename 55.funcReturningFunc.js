// function returning function 

//also called higher order function

// function myFunc() {
//     let hello = () => {
//         return "hello world"
//     }
//     return hello;
// }
function myFunc(){
    return function(){ //lambda expression can also be used here
        return "hello world"
    };
}

const ans = myFunc();
console.log(ans());