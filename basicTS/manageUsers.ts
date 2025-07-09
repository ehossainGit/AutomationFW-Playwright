
export type userInfo = {
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}
export class Users implements userInfo{
    name: string;
    email: string;
    age: number;
    isActive: boolean;

    constructor(inputUser: userInfo){
        this.name = inputUser.name;
        this.email = inputUser.email;
        this.age = inputUser.age;
        this.isActive = inputUser.isActive;
    }

    addNewUser(): void {
        console.log(`added ${this.name} ${this.email}, ${this.age} ${this.isActive}`);
    }

    UpdateNewUser(): void {
        console.log(`Updated ${this.name} ${this.email}, ${this.age} ${this.isActive}`);
    }

}