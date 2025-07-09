write a typescript class that demonstrates basic TypeScript features
export class TypeScriptDemo {
    // Properties
    private name: string;
    private age: number;
    private isActive: boolean;

    // Constructor
    constructor(name: string, age: number, isActive: boolean) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }

    // Method to display information
    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Active: ${this.isActive}`);
    }

    // Method to update age
    public updateAge(newAge: number): void {
        if (newAge > 0) {
            this.age = newAge;
            console.log(`Age updated to: ${this.age}`);
        } else {
            console.log('Invalid age');
        }
    }

    // Static method to create a default instance
    public static createDefault(): TypeScriptDemo {
        return new TypeScriptDemo('Default Name', 25, true);
    }

    // Method to demonstrate string manipulation
    public manipulateName(): string {
        // Convert name to uppercase and reverse it
        const upperName = this.name.toUpperCase();
        const reversedName = upperName.split('').reverse().join('');
        console.log(`Manipulated Name: ${reversedName}`);
        return reversedName;
    }
}

