import { loginElements } from "../../pageobject/login/login.page";
import { expect, Page } from "playwright/test";

export class loginController {
    private LoginElements: loginElements;

    constructor(private page: Page) {
        this.LoginElements = new loginElements(page);
    }
    async inputUsername(username: string) {
        await this.LoginElements.fieldUsernamePassword("text").fill(username);
    }

    async inputPassword(password: string) {
        await this.LoginElements.fieldUsernamePassword("password").fill(password);
    }

    async clickLoginButton() {
        await this.LoginElements.buttonLogin().click();
    }

    async verifyErrorMessage(errorMessage: string | RegExp) {
        await expect(this.LoginElements.textError()).toHaveText(errorMessage);
    }

    async verifyHeaderNotVisible() {
        await expect(this.LoginElements.headerProduct()).not.toBeVisible();
    }

    async verifyHeaderVisible() {
        await expect(this.LoginElements.headerProduct()).toBeVisible();
    }
}