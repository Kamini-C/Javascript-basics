// Sets (it is iterable)
// store iterable data  
// sets also have their own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numberSet = new Set([1,2,3,3]);
console.log(numberSet); //second 3 will be ignored
console.log(numberSet[2]) //undefined 

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);

numbers.add(items);
numbers.add(items); //will ignore this repetition

numbers.add(['key1','key2']);
numbers.add(['key1','key2']); //will add as both arrays have different addresses in memory


if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}
console.group("For of loop");
for(let number of numbers){
    console.log(number);
}
console.groupEnd();
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);

console.log(uniqueElements.length); //undefined
//solution:
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);