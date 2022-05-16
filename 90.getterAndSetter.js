// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Kamini", "sharma", 21);
// console.log(person1.fullName());
console.log(person1); 
console.log(person1.fullName); //getter

person1.fullName = "parteek Chhabra"; //setter
console.log(person1);
console.log(person1.fullName);
