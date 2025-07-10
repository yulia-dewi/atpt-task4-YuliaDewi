import { Page } from "@playwright/test";
import { ydData } from '../../../resources/variables/yddata';

export class LoginElement {
    constructor (private page : Page) {}
    menuLogin() {
        return this.page.getByRole('link', { name: 'Signup / Login' });
    }
    loginEmailPassword(field: string) {
        return this.page.locator(`//input[@data-qa="login-${field}"]`) //input[@data-qa="login-email"] //input[@data-qa="login-password"]
        //return this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        //return this.page.getByRole('textbox', { name: 'Password' })
    };

    buttonLogin() {
        return this.page.locator('//button[@data-qa="login-button"]')  //button[text()="Login"]
        //return this.page.getByRole('button', { name: 'Login' })
    };

    verifyLogin() {
        return this.page.getByText(`Logged in as ${ydData.name}`)
    }

    menuLogout() {
        return this.page.getByRole('link', { name: 'Logout' });
    }

    menuDeleteAccount() {
        return this.page.getByRole('link', { name: 'Delete Account' });
    }

    headerAccountDeleted() {
        return this.page.locator('//h2[@data-qa="account-deleted"]');   //b[text()="Account Created!"]
    }
    textAccountDeleted() {
        return this.page.locator('//p[text()="Your account has been permanently deleted!"]');
    }
    textDeleteAdvantage() {
        return this.page.locator('//p[text()="You can create new account to take advantage of member privileges to enhance your online shopping experience with us."]');
    }


    // await expect(page.getByText('Logged in as ydtestdua')).toBeVisible();
    // await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
    // await expect(page.getByRole('link', { name: ' Delete Account' })).toBeVisible();
    // await page.getByText('Logged in as ydtestdua').click();
    // await page.getByRole('link', { name: ' Logout' }).click();
    // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('ydtestt@yopmail.com');
    // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
    // await page.getByRole('textbox', { name: 'Password' }).fill('ydtestdua');
    // await page.getByRole('button', { name: 'Login' }).click();

    //await page.getByRole('button', { name: 'Login' }).click();
}