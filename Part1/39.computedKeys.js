// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Keys are not computed if used this way
// const obj = {
//     key1: value1,
//     key2: value2
// }

const obj = {
    [key1]: value1, // [] computes the value
    [key2]: value2
}

// Another Way

//obj = {}
//obj[key1] = value1;
//obj[key2] = value2;

console.log(obj);