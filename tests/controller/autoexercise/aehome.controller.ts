import { expect, Page } from "playwright/test";
//import { LoginElement } from "../../pageobject/autoexercise/login.page";
import { HomeElement } from "../../pageobject/autoexercise/aehome.page";

export class aeHomeControllers {
    //private loginElement: LoginElement;
    private aeHomeElement: HomeElement;

    constructor(private page: Page) {
        //this.loginElement = new LoginElement(page);
        this.aeHomeElement = new HomeElement(page);
    }

    async clickLogin() {
        await this.aeHomeElement.menuLogin().click();
    }

    async clickLogout() {
        await this.aeHomeElement.menuLogout().click();
    }
    async clickDeleteAccount() {
        await this.aeHomeElement.menuDeleteAccount().click();
    }
    async clickSignup() {
        await this.aeHomeElement.menuSignup().click();
    }

    async clickProducts() {
        await this.aeHomeElement.menuProducts().click();
    }

    async clickCart() {
        await this.aeHomeElement.menuCart().click();
    }

    async verifyHeaderAllProducts() {
        await expect(this.aeHomeElement.headerAllProducts()).toBeVisible();
        await expect(this.aeHomeElement.headerAllProducts()).toHaveText("All Products");
    }
}
