/** Reusable utilities: TBD */

//ref: https://date-fns.org/docs/Getting-Started#installation
import { format, compareAsc } from "date-fns";

export class ArrayAndListDemo {
    private numbers: number[];
    private fruits: string[];
    private booleans: boolean[];

    constructor() {
        this.numbers = [1, 2, 3];
        this.fruits= ['apple', 'banana', 'cherry'];
        this.booleans = [true, false, true];
    }
    
    
    mapDemo(numbers: number[]) {
        let doubled: number[] = numbers.map(num => num * 2);
        console.log(doubled); // Output: [2, 4, 6]
    }

    reduceDemo() {
        let sum: number = this.numbers.reduce((acc, num) => acc + num, 0);
        console.log(sum); // Output: 10
    }

    filterDemo() {
        const numbers: number[] = [1, 2, 3, 4, 5];
        let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
        console.log(evenNumbers); // Output: [2, 4]
    }
    

    
}
