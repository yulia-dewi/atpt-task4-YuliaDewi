import { expect, Page } from "playwright/test";
import { LoginElement } from "../../pageobject/autoexercise/login.page";
//import { ydData } from "../../../resources/variables/yddata";

export class LoginControllers {
    private loginElement: LoginElement;

    constructor(private page: Page) {
        this.loginElement = new LoginElement(page);
    }

    // async clickLogin() {
    //     await this.loginElement.menuLogin().click();
    // }
    async inputEmail(email: string) {
        await this.loginElement.loginEmailPassword("email").fill(email);
    }
    async inputPassword(password: string) {
        await this.loginElement.loginEmailPassword("password").fill(password);
    }
    async clickLoginButton() {
        await this.loginElement.buttonLogin().click();
    }

    async verifyLogin(loginname: string) {
        await expect(this.loginElement.verifyLogin()).toBeVisible();
        await expect(this.loginElement.verifyLogin()).toHaveText(`Logged in as ${loginname}`);
    }
    // async clickLogout() {
    //     await this.loginElement.menuLogout().click();
    // }
    // async clickDeleteAccount() {
    //     await this.loginElement.menuDeleteAccount().click();
    // }
    async verifyDeleteHeader() {
        await expect(this.loginElement.headerAccountDeleted()).toHaveText("Account Deleted!");
    }

    async verifyDeletedText() {
        await expect(this.loginElement.textAccountDeleted()).toHaveText("Your account has been permanently deleted!");
    }
    async verifyDeleteAdvantage() {
        await expect(this.loginElement.textDeleteAdvantage()).toContainText("You can create new account to take advantage of member privileges to enhance your online shopping experience with us.");
    }
}
