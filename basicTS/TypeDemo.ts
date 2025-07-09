type person = {
    name: string; 
    age: number;

    isEmployed: boolean;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
    hobbies: string[];
    greet: () => string;
    getDetails: () => string;
};


export class Person implements person {
    name: string;
    age: number;
    isEmployed: boolean;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
    hobbies: string[];

    constructor(name: string, age: number, isEmployed: boolean, address: { street: string; city: string; zipCode: string }, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
        this.address = address;
        this.hobbies = hobbies;
    }

    greet(): string {
        return `Hello, my name is ${this.name}.`;
    }

    getDetails(): string {
        return `${this.name}, ${this.age} years old, lives at ${this.address.street}, ${this.address.city}, ${this.address.zipCode}.`;
    }
}   
