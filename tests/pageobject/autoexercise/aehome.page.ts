import { Page } from "@playwright/test";
export class HomeElement {
    constructor (private page : Page) {}
    menuLogin() {
        return this.page.getByRole('link', { name: 'Signup / Login' });
    }

    menuSignup() {
        return this.page.getByRole('link', { name: 'Signup / Login' });
    }

    menuLogout() {
        return this.page.getByRole('link', { name: 'Logout' });
    }

    menuDeleteAccount() {
        return this.page.getByRole('link', { name: 'Delete Account' });
    }
    menuProducts() {
        return this.page.getByRole('link', { name: 'Products' });
    }

    menuCart() {
        return this.page.getByRole('link', { name: 'Cart' });
    }

    headerAllProducts() {
        return this.page.locator('//h2[text()="All Products"]')
    }

    

}