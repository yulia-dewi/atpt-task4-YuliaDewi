import { Page } from "@playwright/test";
import { loginElements } from "../pageobject/login/login.page";
import { variable } from "../../resources/variables";
import { expect } from "@playwright/test";

export class loginUseCases {
    constructor(private page: Page) {}

    async login_success(username: string, password: string) {
        const LoginElement = new loginElements(this.page);

        await LoginElement.fieldUsernamePassword("text").fill(username);
        await LoginElement.fieldUsernamePassword("password").fill(password);
        await LoginElement.buttonLogin().click();
        await expect(LoginElement.headerProduct()).toBeVisible();
    }
}