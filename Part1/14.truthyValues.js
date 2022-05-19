// truthy and falsy values

/* 
falsy values examples
    undefined
    false
    ""
    null
    0
true values examples
    "abc"
    1, -1
    Infinity
*/

let firstName;
firstName = false;
firstName = "";
firstName = null;
firstName = 0;
firstName =  Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER; //Infinity //true value //???

//firstName =  Number.MAX_SAFE_INTEGER ** Number.MAX_SAFE_INTEGER; //Infinity //true value
//firstName = Infinity; //true value


if(firstName){
    console.log(`TRUE value: ${firstName} `);
}else{
    console.log(`FirstName is having a FALSE value: ${firstName} `);
}