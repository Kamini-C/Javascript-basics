// Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];

const newArray = [...array1, ...array2, 88];
// const newArray = [...array1, array2];  // This will not spread array2
console.log(newArray);

// Spread Operator for string
// Strings, Arrays are iterable
// Integers are not iterable
console.log([..."123456"]);
console.log([..."abcdef"]);
// console.log([...123456]); // Error: 123456 is not iterable

// Spread Operator in Objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "value12",
    key3: "value3",
    key4: "value4"
}

// Keys are unique
const newObj = {...obj1, ...obj2}; // will replace key1 in obj1
const newObj1 = { ...obj2, ...obj1, key5: "value5" };  // key1 will come from obj1
const newObj2 = {...["item1","item2"]}; // Array items will have keys as their index
const newObj3 = {..." abcdefghijklmnopqrstuvwxyz"};

console.log("newObj", newObj);
console.log("newObj1", newObj1);
console.log("newObj2", newObj2);
console.log("newObj3", newObj3);