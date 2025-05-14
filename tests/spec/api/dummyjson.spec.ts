import test, { expect } from "@playwright/test"
import { MyLoginService } from "../../api/service/dummyjson/login.service"
import { variable } from "../../../resources/variables";
import { setAuth } from "../../../auth/auth.store";
import { userService } from "../../api/service/dummyjson/get_user.service";

// test.describe.configure({ mode: 'serial' });

test.describe('login test case', async () => {
    let loginService: MyLoginService;
    let getUserService: userService;

    test.beforeEach('preparation', async () => {
        loginService = new MyLoginService();
        getUserService = new userService();
    })

    test('Login failed', async () => {
        const {data , status} = await loginService.login(variable.username, variable.pwd);
        expect(status).toBe(400);
        expect(data.message).toEqual("Invalid credentials")
    })

    test('Login missing email', async () => {
        const {data , status} = await loginService.login("", variable.pwd);
        expect(status).toBe(400);
        expect(data.message).toEqual("Username and password required")
    })

    test('Login missing password', async () => {
        const {data , status} = await loginService.login(variable.username, "");
        expect(status).toBe(400);
        expect(data.message).toEqual("Username and password required")
    })

    test('Login success', async () => {
        const {data , status} = await loginService.login(variable.email, variable.pwd);
        expect(status).toBe(200);
        expect(data.accessToken).toBeTruthy();
        setAuth(data.accessToken);
    })

    test('get user', async () => {
        const {status} = await getUserService.getUser();
        expect(status).toBe(200);
    })
})