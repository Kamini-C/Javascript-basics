// Functions inside Functions

const app = () => {
    console.group("Starting App Function");

    const sum = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const mul = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    console.log(sum(3, 5));
    console.log(subtract(5, 3));
    console.log(mul(3, 5));
    // console.log(divide(15, 5)); 


    console.log("Ending App Function");
    console.groupEnd();
};

app();
// Inside functions cannot be called outside of the body
console.log(divide(15, 5)); // ReferenceError not defined
