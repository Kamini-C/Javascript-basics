// break keyword
// continue keyword


for(let i=0; i<=10; i++){
    if(i == 4){continue;}  // It will skip the 4th iteration
    if(i == 6){break;} // It will terminate after 6th iteration and will not complete all 10 iterations
    
    console.log(i);
}