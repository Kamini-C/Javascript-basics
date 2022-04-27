// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a=1,b=1){
    return a+b;
}

var ans = addTwo(4, 8); // 12
// var ans = addTwo(4); //5
// var ans = addTwo(); // 2
console.log(ans);