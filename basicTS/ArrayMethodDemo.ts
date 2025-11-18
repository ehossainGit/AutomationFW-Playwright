export class ArrayMethodDemo {
    private numbers: number[];
    constructor(numbers: number[]) {
        this.numbers = numbers;
    }   
    public demonstrateMethods(): void {
        console.log("Original array:", this.numbers);
        console.log("Map (squared):", this.numbers.map(num => num * num));
        console.log("Filter (even numbers):", this.numbers.filter(num => num % 2 === 0));


        const sum = this.numbers.reduce((acc, num) => acc + num, 0);
        console.log("Reduce (sum):", sum);
    }

    //forEach() demo:
    public forEachDemo(): void {
        const numbers: number[] = [10, 20, 30];
        console.log("ForEach demo:");
        // Using forEach to log each element
        numbers.forEach((value: number) => {
        console.log(value);
        });
        // Output:
        // 10
        // 20
        // 30

        // Using forEach with index
        const fruits: string[] = ['apple', 'banana', 'cherry'];
        fruits.forEach((fruit: string, index: number) => {
        console.log(`Fruit at index ${index}: ${fruit}`);
        });
        // Output:
        // Fruit at index 0: apple
        // Fruit at index 1: banana
        // Fruit at index 2: cherry
    }

}