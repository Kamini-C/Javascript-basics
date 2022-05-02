// fill method 
// arguments: value , start , end 

const myArray = new Array(5).fill(0); //creates new array and fill 0 as items
console.log(myArray);

const numbers = [1,2,3,4,5,6,7,8];
numbers.fill(0,2,5); // fills 0 , starting from 2nd index to 4th index, counting till 5th
console.log(numbers);