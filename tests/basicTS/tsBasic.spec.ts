import { Person } from "../../basicTS/TypeDemo";
import { Person as InterfacePerson } from "../../basicTS/interfaceDemo";
import {test, expect} from "@playwright/test";

test.describe("TypeScript Basic Tests", () => {
    test("should create a Person instance and check properties", () => {
        const person = new Person("John Doe", 30, true, { street: "123 Main St", city: "Anytown", zipCode: "12345" }, ["reading", "gaming"]);

        expect(person.name).toBe("John Doe");
        expect(person.age).toBe(30);
        expect(person.isEmployed).toBe(true);
        expect(person.address.street).toBe("123 Main St");
        expect(person.hobbies).toContain("reading");
    });

    test("should call greet method on Person instance", () => {
        const person = new Person("Jane Doe", 25, false, { street: "456 Elm St", city: "Othertown", zipCode: "67890" }, ["cooking"]);
        
        expect(person.greet()).toBe("Hello, my name is Jane Doe.");
    });

    test("should create an InterfacePerson instance and check properties", () => {
        const interfacePerson: InterfacePerson = {
            name: "Alice Smith",
            age: 28,
            isEmployed: true,
            address: { street: "789 Oak St", city: "Sometown", zipCode: "54321" },
            hobbies: ["painting", "hiking"],
            greet() {
                return `Hello, my name is ${this.name}.`;
            },
            getDetails() {
                return `${this.name}, ${this.age} years old, lives at ${this.address.street}, ${this.address.city}, ${this.address.zipCode}.`;
            }
        };

        expect(interfacePerson.name).toBe("Alice Smith");
        expect(interfacePerson.age).toBe(28);
        expect(interfacePerson.isEmployed).toBe(true);
        expect(interfacePerson.address.street).toBe("789 Oak St");
        expect(interfacePerson.hobbies).toContain("painting");
    });
});

