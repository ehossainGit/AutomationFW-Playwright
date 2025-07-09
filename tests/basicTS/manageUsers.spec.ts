
import {Users, userInfo} from "../../basicTS/manageUsers.ts";
import {test, expect} from "@playwright/test";

test.describe('Suite1', () => {
    test('test1', () => {
        const user: userInfo = {name: "test", age: 10, email: "tst@gmail.com", isActive: true};
        const users = new Users(user);
        users.addNewUser();
        expect(user.name).toBe("test");
    });

    test('test2', () => {
        const user: userInfo = {name: "test", age: 20, email: "tst@gmail.com", isActive: true};
        const users = new Users(user);
        users.UpdateNewUser();
        expect(user.age).toBe(20);
    });
});
