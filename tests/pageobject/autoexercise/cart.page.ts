import { Page } from "@playwright/test";
export class CartElement {
    constructor (private page : Page) {}
    
    textShoppingCart() {
        return this.page.locator('//li[text()="Shopping Cart"]')
    }

    buttonProceedCheckout() {
        return this.page.locator('//a[text()="Proceed To Checkout"]')
    }


}