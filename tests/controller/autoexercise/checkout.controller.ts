import { expect, Page } from "playwright/test";
import { CheckoutElements } from "../../pageobject/autoexercise/checkout.page";


export class CheckoutControllers {
    private checkoutElement: CheckoutElements;

    constructor(private page: Page) {
        this.checkoutElement = new CheckoutElements(page);
    }

    async verifyTotalAmount() {
        
        await expect (this.checkoutElement.totalAmount()).toBeVisible({ timeout: 5000 });
        const totalAmount = await this.checkoutElement.totalAmount().textContent();
        console.log(totalAmount);
        //await expect (this.checkoutElement.totalAmount()).toHaveText("Rs. 1900");
        await expect (this.checkoutElement.totalAmount()).toHaveText("Rs. 5688");
    }

    async getCartItems(): Promise<{ name: string; price: string }[]> {
        const rows = await this.page.locator('#cart_info_table tbody tr').all();
        const cartItems: { name: string; price: string }[] = [];
      
        for (const row of rows) {
          const nameLocator = row.locator('.cart_description p');
          const priceLocator = row.locator('.cart_price p');
      
          const name = (await nameLocator.textContent())?.trim() || '';
          const price = (await priceLocator.textContent())?.trim() || '';
      
          cartItems.push({ name, price });
        }
      
        return cartItems;
      }

      async clickPlaceOrder() {
        await this.checkoutElement.buttonPlaceOrder().click();
      }

    
}
