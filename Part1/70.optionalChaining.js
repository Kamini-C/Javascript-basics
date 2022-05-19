// optional chaining 

const user  = {
    firstName: "parteek",
    address: {houseNumber: '1140'}

}


console.log(user?.firstName);
console.log(user['address']?.['houseNumber']); //OR
console.log(user?.address?.houseNumber);
console.log(user?.address?.streetNumber);