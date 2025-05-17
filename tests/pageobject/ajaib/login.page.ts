import { Page } from "@playwright/test";

export class LoginAjaibElements {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    usernameField () {
        return this.page.getByRole('textbox', { name: 'Masukkan email' });
    }

    passwordField() {
        return this.page.getByRole('textbox', { name: 'Masukkan password' });
    }

    loginButton() {
        return this.page.getByRole('button', { name: 'Masuk' });
    }

    pinField(index: number) {
        return this.page.locator(`(//input[@type="password"])[${index}]`);
    }

    errorMessage() {
        return this.page.getByText('Email dan/atau password salah');
    }

    homePage() {
        return this.page.getByRole('link', { name: 'Beranda' });
    }
}