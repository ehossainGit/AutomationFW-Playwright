export class Person {
    private name: string;
    private arr: Array<string> = ["Apple", "Orange", "Mango"];
    private car: { make: string, model: string, year: number } = {
        make: "Toyota",
        model: "Corolla",
        year: 2009
      };


    constructor(name: string){
        this.name = name;
    }

    public greeting(): string{
        return "Hello "+ this.name;
    }

    public sum(a:number, b:number): number{
        return a+b;
    }

    public addElementToArr(elem: string): number {
        // this.arr[0] = elem;
        return this.arr.push(elem);
    }

    public printArr(){
        console.log(this.arr.toString());
    }

    public printObj(){
        console.log(this.car.model +" - "+ this.car.year);
    }
}