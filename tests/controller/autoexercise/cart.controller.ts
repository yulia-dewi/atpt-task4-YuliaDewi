import { expect, Page } from "playwright/test";
import { CartElement } from "../../pageobject/autoexercise/cart.page";


export class CartControllers {
    private cartElement: CartElement;

    constructor(private page: Page) {
        this.cartElement = new CartElement(page);
    }

    async verifyCartText() {
        await expect (this.cartElement.textShoppingCart()).toBeVisible();
        await expect (this.cartElement.textShoppingCart()).toHaveText("Shopping Cart");
    }

    async clickProceedCheckout() {
        await this.cartElement.buttonProceedCheckout().click();
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

    
}
