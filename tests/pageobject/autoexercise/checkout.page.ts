import { Page } from "@playwright/test";

export class CheckoutElements {
    constructor (private page : Page) {}

    buttonPlaceOrder() {
        return this.page.getByRole('link', { name: 'Place Order' });
    }

    totalAmount() {
        return this.page.locator('p.cart_total_price >> nth=-1');
    }

    delivAdrHeader() {
        return this.page.locator('#address_delivery h3');
    }

    delivAdrLastName() {
        return this.page.locator('#address_delivery li:nth-child(2)');
    }
    delivAdrCompany() {
        return this.page.locator('#address_delivery li:nth-child(3)');
    }
    delivAdrAddress1() {
        return this.page.locator('#address_delivery li:nth-child(4)');
    }
    delivAdrAddress2() {
        return this.page.locator('#address_delivery li:nth-child(5)');
    }
    delivAdrCityStatePostal() {
        return this.page.locator('#address_delivery li:nth-child(6)');
    }

    delivAdrCountry() {
        return this.page.locator('#address_delivery li:nth-child(7)');
    }
    delivAdrPhone() {
        return this.page.locator('#address_delivery li:nth-child(8)');
    }

    billAdrHeader() {
        return this.page.locator('#address_invoice h3');
    }

    billAdrLastName() {
        return this.page.locator('#address_invoice li:nth-child(2)');
    }
    billAdrCompany() {
        return this.page.locator('#address_invoice li:nth-child(3)');
    }
    billAdrAddress1() {
        return this.page.locator('#address_invoice li:nth-child(4)');
    }
    billAdrAddress2() {
        return this.page.locator('#address_invoice li:nth-child(5)');
    }
    billAdrCityStatePostal() {
        return this.page.locator('#address_invoice li:nth-child(6)');
    }

    billAdrCountry() {
        return this.page.locator('#address_invoice li:nth-child(7)');
    }
    billAdrPhone() {
        return this.page.locator('#address_invoice li:nth-child(8)');
    }

    fieldComment() {
        return this.page.locator('textarea[name="message"]');
    }

    
}
