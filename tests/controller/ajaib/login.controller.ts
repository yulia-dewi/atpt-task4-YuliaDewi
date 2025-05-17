import { Page } from "playwright";
import { expect } from "playwright/test";
import { LoginAjaibElements } from "../../pageobject/ajaib/login.page";

export class LoginAjaibController {
    private loginAjaibElements: LoginAjaibElements

    constructor(private page: Page) {
        this.loginAjaibElements = new LoginAjaibElements(page);
    }

    async inputUsername(username: string) {
        await this.loginAjaibElements.usernameField().fill(username);
    }

    async inputPassword(password: string) {
        await this.loginAjaibElements.passwordField().fill(password);
    }

    async clickLoginButton() {
        await this.loginAjaibElements.loginButton().click();
    }

    async verifyErrorText() {
        await expect(this.loginAjaibElements.errorMessage()).toBeVisible();
    }

    async inputPin(pin: string) {
        await this.loginAjaibElements.pinField(pin.length).waitFor({ state: 'visible' });

        for (let i = 0 ; i < pin.length; i++) {
            const index = i + 1;
            await this.loginAjaibElements.pinField(index).fill(pin[i]);
        }
    }

    async verifyHomePage() {
        await expect(this.loginAjaibElements.homePage()).toBeVisible();
    }
}