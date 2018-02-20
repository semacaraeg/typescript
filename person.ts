class Person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
    
    constructor(firstName:string, lastName:string, age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = true;
    }
}

let person1 = new Person("Sarah", "Macaraeg", 29);