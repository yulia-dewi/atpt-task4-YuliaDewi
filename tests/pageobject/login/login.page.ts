import { Page } from "@playwright/test";

export class loginElements {
    constructor (private page : Page) {}

    fieldUsernamePassword(field: string) {
        return this.page.locator(`//input[@type="${field}"]`)
    };

    buttonSubmit() {
        return this.page.locator('//input[@type="submit"]')
    };

    buttonLogin() {
        return this.page.getByRole('button', { name: 'LOGIN' })
    }

    textError() {
        return this.page.locator('//h3')
    }

    headerProduct() {
        return this.page.locator('//*[text()="Products"]')
    }
}
