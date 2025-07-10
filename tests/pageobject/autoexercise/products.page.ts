import { Page } from "@playwright/test";
export class ProductsElement {
    constructor (private page : Page) {}
    

    buttonAddProducts(id: number) {
        return this.page.locator(`//div[contains(@class, 'productinfo') and contains(@class, 'text-center')]//a[@data-product-id='${id}']`)
       
    }
    buttonContinueShopping() {
        return this.page.locator('//button[text()="Continue Shopping"]')
    }
    
    linkViewCart() {
        return this.page.getByRole('link', { name: 'View Cart' });
    }
}