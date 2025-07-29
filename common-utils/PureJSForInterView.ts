export function demoArray(): void {
    // Create an array of numbers
    const numbers: number[] = [1, 2, 3, 4, 5];

    // Add a number to the array
    numbers.push(6);

    // Remove the first element
    const first = numbers.shift();

    // Map: multiply each number by 2
    const doubled = numbers.map(n => n * 2);

    // Filter: keep only even numbers
    const evens = numbers.filter(n => n % 2 === 0);

    // Reduce: sum all numbers
    const sum = numbers.reduce((acc, n) => acc + n, 0);

    // Log results
    console.log('Original array (after shift):', numbers);
    console.log('Removed first element:', first);
    console.log('Doubled:', doubled);
    console.log('Even numbers:', evens);
    console.log('Sum:', sum);
}

export function demoObject(): void {
    // Create an object
    const person = {
        name: 'Alice',
        age: 30,
        city: 'New York',
        email:'tbd'
    };

    // Add a new property
    person.email = 'alice@example.com';

    // Update a property
    person.age = 31;

    // Delete a property
    // delete person.city;

    // Iterate over properties
    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key as keyof typeof person]}`);
        }
    }

    // Get all keys and values
    const keys = Object.keys(person);
    const values = Object.values(person);

    console.log('Keys:', keys);
    console.log('Values:', values);
}

//write func for demoing string manipulation
export function demoStringManipulation(): void {
    // Create a string
    let str = 'Hello, World!';

    // Convert to uppercase
    const upperStr = str.toUpperCase();

    // Convert to lowercase
    const lowerStr = str.toLowerCase();

    // Find the length of the string
    const length = str.length;

    // Replace a substring
    const replacedStr = str.replace('World', 'JavaScript');

    // Split the string into an array
    const words = str.split(' ');

    // Trim whitespace
    const trimmedStr = '   Hello, World!   '.trim();

    // Log results
    console.log('Original string:', str);
    console.log('Uppercase:', upperStr);
    console.log('Lowercase:', lowerStr);
    console.log('Length:', length);
    console.log('Replaced string:', replacedStr);
    console.log('Words array:', words);
    console.log('Trimmed string:', trimmedStr);
}