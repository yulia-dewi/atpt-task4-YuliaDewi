import { Page } from "@playwright/test";
export class PaymentElement {
    constructor (private page : Page) {}
    
    textPayment() {
        return this.page.locator('//h2[text()="Payment"]')
    }

    buttonPayConfirm() {
        return this.page.locator('#submit')
    }

    fieldNameCard() {
        return this.page.locator('//input[@data-qa="name-on-card"]')
    };
    fieldCardNumber() {
        return this.page.locator('//input[@data-qa="card-number"]')
    };
    fieldCvc() {
        return this.page.locator('//input[@data-qa="cvc"]')
    };
    fieldExpiryMonth() {
        return this.page.locator('//input[@data-qa="expiry-month"]')
    };
    fieldExpiryYear() {
        return this.page.locator('//input[@data-qa="expiry-year"]')
    };

}
// await expect(page.getByRole('listitem').filter({ hasText: 'Payment' })).toBeVisible();
// await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
// await page.locator('input[name="name_on_card"]').click();
// await page.locator('input[name="name_on_card"]').fill('ydtest50hxafl');
// await page.locator('input[name="name_on_card"]').press('Tab');
// await page.locator('input[name="card_number"]').fill('7858577488341111');
// await page.getByRole('textbox', { name: 'ex.' }).click();
// await page.getByRole('textbox', { name: 'ex.' }).fill('842');
// await page.getByRole('textbox', { name: 'MM' }).click();
// await page.getByRole('textbox', { name: 'MM' }).fill('45');
// await page.getByRole('textbox', { name: 'YYYY' }).click();
// await page.getByRole('textbox', { name: 'YYYY' }).fill('2027');
// await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
// await expect(page.getByText('Order Placed!')).toBeVisible();
// await expect(page.getByText('Congratulations! Your order')).toBeVisible();
// const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('link', { name: 'Download Invoice' }).click();
//   const download = await downloadPromise;
// await page.getByRole('link', { name: 'Continue' }).click();