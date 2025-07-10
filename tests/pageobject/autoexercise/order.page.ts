import { Page } from "@playwright/test";

export class OrderElement {
    constructor (private page : Page) {}

    buttonDownloadInvoice() {
        return this.page.locator('//a[text()="Download Invoice"]')
    };

    buttonContinue() {
        return this.page.locator('//a[text()="Continue"]')
    };

    headerOrderPlaced() {
        return this.page.locator('//h2[@data-qa="order-placed"]');   //b[text()="Account Created!"]
    }
    textOrderConfirmed() {
        return this.page.locator('//p[text()="Congratulations! Your order has been confirmed!"]');
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