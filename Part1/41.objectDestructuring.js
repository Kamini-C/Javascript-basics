// Object Destructuring

const band = {
    bandName: "Coldplay",
    famousSong: "Yellow",
    year: "1992",
    anotherFamousSong: "Higher Power"
}

//Task: Create variables from this object

// Longcut
const bandNameL = band.bandName;
const famousSongL = band.famousSong;

console.log(bandNameL, famousSongL);

// Shortcut - Destructuring
// will create two const variables from keys
const { bandName, famousSong, ...restProps } = band;
console.log("Const: ", bandName, famousSong);

// will create two let variables renaming variables
let { bandName: var1, famousSong: var2 } = band;
console.log("Variables: ",var1, var2); 

// Left over properties in an object
console.log(restProps);