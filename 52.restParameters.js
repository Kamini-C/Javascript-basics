// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c); //all numbers will be stored in c array
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans); //25