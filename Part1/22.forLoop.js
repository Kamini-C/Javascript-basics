// for loop

// i can be declared as var or let to get the access outside of the for loop
// i can be declared before the for loop and a ; can be just added in for loop(see below)

let i = 0;
for (; i<=10; i++){
    console.log(i);
}

console.log(`Current value of  i is ${i}`);

// Increment/decrement can be declared inside the for loop and a ; can be just added instead (see below)
i=0;
for (; i<=10;){
    console.log(i);
    i++;
}

console.log(`Current value of  i is ${i}`);
