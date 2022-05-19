// JavaScript Arrow Functions
// Single Parameters can omit () brackets
// Single Body can omit return and {}

/* 
function abc(){}

abc = function(){}
abc = () => {}
 */


// person here is parameter
const singHappyBirthday = person =>  console.log("Happy Birthday", person);

// "Kamini" here is argument
singHappyBirthday("Kamini");


const sumTwoNumbers = (num1, num2) => num1 + num2;

console.groupCollapsed("sumTwoNumbers");
console.log(sumTwoNumbers()); // as undefined+undefined is NaN
console.log(sumTwoNumbers(0)); // NaN as 0+undefined is NaN
console.log(sumTwoNumbers(3, 4)); // 7
console.log(sumTwoNumbers(3, 4, 7)); // 7 // third argument will be ignored
console.log(sumTwoNumbers(-3, 4)); // 1
console.groupEnd();


// Method 3
isEven = (num1) => num1 % 2 === 0;


console.groupCollapsed("isEven");
console.log(isEven(2)); //true
console.log(isEven(0)); //true
console.log(isEven(false)); //true   // because false is evaluated as 0
console.log(isEven(-2)); //true
console.log(isEven(3)); //false
console.log(isEven(undefined)); //false
console.log(isEven(NaN)); //false
console.log(isEven([])); //true  // as [] == 0
console.groupEnd();

console.groupCollapsed("firstChar");

firstChar = (var1) => {
    return var1[0];
}

console.log(firstChar("Kamini")); // K
console.log(firstChar([0, 1, 2, 3]));  // 0
console.log(firstChar([..."1223"]));  // 1
console.log(firstChar({ key1: "val1" }));  // undefined // as it is an object
console.log(firstChar(true));  // undefined // as it is boolean
console.groupEnd();

console.group("findIndex");
const findIndex = (array, target) =>{
    console.log(this) //window object
    for (item in array) {
        if (array[item] == target) { 
          //  console.log("aa",array[item]);
            return item;
        }
        //console.log(item);
    }
    return -1;
}

let var1 = findIndex([..."abcdef"], "b"); // 1
console.log(var1);
var1 = findIndex([..."12345678"], 0); // -1
console.log(var1);
console.groupEnd();