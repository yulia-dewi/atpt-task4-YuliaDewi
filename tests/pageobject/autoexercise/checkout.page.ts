import { Page } from "@playwright/test";

export class CheckoutElements {
    constructor (private page : Page) {}

    buttonPlaceOrder() {
        return this.page.getByRole('link', { name: 'Place Order' });
    }

    totalAmount() {
        return this.page.locator('p.cart_total_price >> nth=-1');
    }


    // await expect(page.getByText('Checkout')).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Your delivery address' })).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('Mrs. ydtest lima')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('koperasi serpong')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('jln paramount serpong')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('Queen Street')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('Auckland Auckland Region')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('New Zealand')).toBeVisible();
    // await expect(page.locator('#address_delivery').getByText('64211234567')).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Your billing address' })).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('Mrs. ydtest lima')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('koperasi serpong')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('jln paramount serpong')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('Queen Street')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('Auckland Auckland Region')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('New Zealand')).toBeVisible();
    // await expect(page.locator('#address_invoice').getByText('64211234567')).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible();
    // await expect(page.getByRole('link', { name: 'Madame Top For Women' })).toBeVisible();
    // await expect(page.getByRole('link', { name: 'Men Tshirt' })).toBeVisible();
    // await expect(page.getByRole('link', { name: 'Half Sleeves Top Schiffli' })).toBeVisible();
    // await expect(page.getByText('Rs. 1000').first()).toBeVisible();
    // await expect(page.getByText('Rs. 400').first()).toBeVisible();
    // await expect(page.getByText('Rs. 359').first()).toBeVisible();
    // await expect(page.getByRole('row', { name: 'Product Image Madame Top For' }).getByRole('button')).toBeVisible();
    // await expect(page.getByRole('row', { name: 'Product Image Men Tshirt Men' }).getByRole('button')).toBeVisible();
    // await expect(page.getByRole('row', { name: 'Product Image Half Sleeves' }).getByRole('button')).toBeVisible();
    // await expect(page.getByText('Rs. 1000').nth(1)).toBeVisible();
    // await expect(page.getByText('Rs. 400').nth(1)).toBeVisible();
    // await expect(page.getByText('Rs. 359').nth(1)).toBeVisible();
    // await expect(page.getByText('Total Amount')).toBeVisible();
    // await expect(page.getByText('Rs. 7698')).toBeVisible();
    // await page.locator('textarea[name="message"]').click();
    // await page.locator('textarea[name="message"]').fill('comment berapa ini');
    // await page.getByRole('link', { name: 'Place Order' }).click();
    // await page.goto('https://automationexercise.com/payment');
    //await expect(page.getByRole('textbox', { name: 'Name *', exact: true })).toBeVisible();

    
}
