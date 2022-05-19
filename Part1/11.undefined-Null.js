//undefined
//null

let firstName;
console.log(typeof firstName);  //undefined

var firstName$var;
console.log(typeof firstName$var);  //undefined

//Error : SyntaxError: Missing initializer in const declaration
//const firstName$const;
//console.log(typeof firstName$const);  //Error

firstName = "Parteek";
console.log(typeof firstName, firstName);  //string, console.log can have multiple parameters

//******************NULL ************************
let myVariable = null;
console.log(typeof myVariable);  //object // bug,erorr, can't be fixed because of lots of frameworks

//******************BigInt ************************
let myNumber = 123;
console.log(typeof myNumber); //number
myNumber = 123n;
console.log(typeof myNumber); //bigint
console.log(Number.MAX_SAFE_INTEGER); //number // 9007199254740991
console.log(typeof (Number.MAX_SAFE_INTEGER+1)); //number

// console.clear();
//2 ways to create bigint
let myInt1 = BigInt(123);
let myInt2 = 123n;
console.log(typeof myInt1); 

//bigint can be used with bigints only
//Error: Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(12n+ 12); 


