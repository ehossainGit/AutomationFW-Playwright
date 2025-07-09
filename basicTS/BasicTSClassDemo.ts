/** Reusable utilities: TBD */


export class BasicDemo {

    //class properties demo:
    //Ref:https://www.typescriptlang.org/docs/handbook/2/classes.html

    id:number=5;
    name:string;
    underAge:boolean;
    dob:Date;
    
    constructor() {
        this.start();
    }
    
    start(): void {
        console.log("Program started");
        // Your main program logic here
        this.performTask("Task 1");
        this.performTask("Task 2");
        console.log("Program finished");
    }

    performTask(taskName: string): void {
     console.log(`Performing ${taskName}...`);
     // Add task execution logic here
    }

    getId() {

    }

   
 
    
}
