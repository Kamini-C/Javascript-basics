// iterables 
// where we can apply for of loop 
// string , array are iterable 

const firstName = "Parteek";
for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

//Objects are not iterable
const obj = {'key1': 'value1', 'key2': 'value2'}
// for(let item of obj){
//     console.log(item) //error: obj is not iterable
// }

// Array like Object 
// which have length property and can be accessed using their index
// example :- string 

const myName = "kamini";
console.log(myName.length); //6
console.log(myName[2]); //m