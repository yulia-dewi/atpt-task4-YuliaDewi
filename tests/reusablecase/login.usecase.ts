import { Page } from "@playwright/test";
import { loginController } from "../controller/login/login.controller";

export class loginUseCases {
    constructor(private page: Page) {}

    async login_success(username: string, password: string) {
        const LoginController = new loginController(this.page);

        await LoginController.inputUsername(username);
        await LoginController.inputPassword(password);
        await LoginController.clickLoginButton();
        await LoginController.verifyHeaderVisible();
    }
}