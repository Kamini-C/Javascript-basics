// function provides more usefull properties.
// they provide us free space i.e.Empty Object {} called prototype

function hello() {
    console.log("hello world");
}

// javascript function ===> function  + object

// name property ---> tells function name;
console.log(hello.name);

// you can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);


// only functions provide prototype property
console.log(hello.prototype); // {}

{
    // let hello = [];
    // let hello = {'key' : 'val1'}
    if (hello.prototype) {
        console.log('prototype present')
    } else {
        console.log('prototype NOT present')
    }
}
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());