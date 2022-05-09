// __proto__ 
//also called DUNDER
// offical ecmascript documentation 
// [[prototype]] (= __proto__ )
// prototype : used in functions (!= __proto__ )

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 =  {}

// there is one more way to create empty object
const obj2 = Object.create(obj1); // returns empty object:{}

obj2.key3 = "value3";
obj2.key2 = "unique";

console.log(obj2);

console.log(obj2.key2); 
//(ans= value2), if we comment line 18 otherwise (ans= unique)
// javascript searches for a key in object ->
// if not exist, searches in __proto__ of object
// __proto__ is created when we use Object.create


// console.log(obj2.prototype);
console.log(obj2.__proto__);

