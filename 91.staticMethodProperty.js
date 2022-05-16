// static methods and properties
// these can only be accesed by Class and not through Objects

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("Kamini", "sharma", 8);
console.log(person1.eat());
const info = Person.classInfo();
console.log(info);
console.log(Person.desc); //static property

//cannot use person1 object to call statis property or method
console.log(person1.desc); //undefined