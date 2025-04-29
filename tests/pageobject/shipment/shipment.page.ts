import { Page } from "@playwright/test";

export class shipmentElements {
    constructor (private page : Page) {}

    buttonCheckout() {
        return this.page.getByRole('link', { name: 'CHECKOUT' });
    }

    inputFirstName() {
        return this.page.locator('[data-test="firstName"]');
    }

    inputLastName() {
        return this.page.locator('[data-test="lastName"]');
    }

    inputPostalCode() {
        return this.page.locator('[data-test="postalCode"]');
    }

    buttonContinue() {
        return this.page.getByRole('button', { name: 'CONTINUE' });
    }

    buttonFinish() {
        return this.page.getByRole('link', { name: 'FINISH' });
    }

    textOrderComplete() {
        return this.page.locator('//h2[text()="THANK YOU FOR YOUR ORDER"]');
    }

    textCheckoutOverview() {
        return this.page.locator('//div[text()="Checkout: Overview"]')
    }
}