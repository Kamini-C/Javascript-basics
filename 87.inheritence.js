//Parent Class / Base Class / Super Class
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

//Sub-Class / Derived Class
class Dog extends Animal{
    respond(){
        return "barking";
    }    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.respond());
