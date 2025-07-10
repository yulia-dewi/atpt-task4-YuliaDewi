import { expect, Page } from "playwright/test";
import { CheckoutElements } from "../../pageobject/autoexercise/checkout.page";
import { ydData } from "../../../resources/variables/yddata";


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
        await expect (this.checkoutElement.totalAmount()).toHaveText("Rs. 4799");
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

      async verifyDelivAdr() {
        await expect (this.checkoutElement.delivAdrHeader()).toBeVisible({ timeout: 2000 });
        await expect (this.checkoutElement.delivAdrHeader()).toHaveText('Your delivery address');
      }
      async verifyDelivLastName() {
        await expect (this.checkoutElement.delivAdrLastName()).toHaveText(`Mrs. ${ydData.firstName} ${ydData.lastName}`);
      }
      async verifyDelivCompany() {
        await expect (this.checkoutElement.delivAdrCompany()).toHaveText(ydData.company);
      }
      async verifyDelivAddress1() {
        await expect (this.checkoutElement.delivAdrAddress1()).toHaveText(ydData.address1);
      }
      async verifyDelivAddress2() {
        await expect (this.checkoutElement.delivAdrAddress2()).toHaveText(ydData.address2);
      }
      async verifyDelivCityStatePostal() {
        await expect (this.checkoutElement.delivAdrCityStatePostal()).toHaveText(`${ydData.city} ${ydData.state} ${ydData.zipcode}`);
      }
      async verifyDelivCountry() {
        await expect (this.checkoutElement.delivAdrCountry()).toHaveText("New Zealand");
      }
      async verifyDelivPhone() {
        await expect (this.checkoutElement.delivAdrPhone()).toHaveText(ydData.mobile);
      }
      async verifyBillAdr() {
        await expect (this.checkoutElement.billAdrHeader()).toBeVisible({ timeout: 2000 });
        await expect (this.checkoutElement.billAdrHeader()).toHaveText('Your billing address');
      }
      async verifyBillLastName() {
        await expect (this.checkoutElement.billAdrLastName()).toHaveText(`Mrs. ${ydData.firstName} ${ydData.lastName}`);
      }
      async verifyBillCompany() {
        await expect (this.checkoutElement.billAdrCompany()).toHaveText(ydData.company);
      }
      async verifyBillAddress1() {
        await expect (this.checkoutElement.billAdrAddress1()).toHaveText(ydData.address1);
      }
      async verifyBillAddress2() {
        await expect (this.checkoutElement.billAdrAddress2()).toHaveText(ydData.address2);
      }
      async verifyBillCityStatePostal() {
        await expect (this.checkoutElement.billAdrCityStatePostal()).toHaveText(`${ydData.city} ${ydData.state} ${ydData.zipcode}`);
      }
      async verifyBillCountry() {
        await expect (this.checkoutElement.billAdrCountry()).toHaveText("New Zealand");
      }
      async verifyBillPhone() {
        await expect (this.checkoutElement.billAdrPhone()).toHaveText(ydData.mobile);
      }
      async inputComment() {
        await this.checkoutElement.fieldComment().fill("Kindly pick the nicest ones, thanks");
      }
    
}
