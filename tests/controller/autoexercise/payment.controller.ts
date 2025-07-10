import { expect, Page } from "playwright/test";
import { PaymentElement } from "../../pageobject/autoexercise/payment.page";

export class PaymentControllers {
    //private loginElement: LoginElement;
    private paymentElement: PaymentElement;

    constructor(private page: Page) {
        //this.loginElement = new LoginElement(page);
        this.paymentElement = new PaymentElement(page);
    }

    async inputNameCard(name: string) {
        await this.paymentElement.fieldNameCard().fill(name);
    }

    async inputCardNumber(card: string) {
        await this.paymentElement.fieldCardNumber().fill(card);
    }

    async inputCvc(cvc: string) {
        await this.paymentElement.fieldCvc().fill(cvc);
    }
    async inputExpiryMonth(month: string) {
        await this.paymentElement.fieldExpiryMonth().fill(month);
    }
    async inputExpiryYear(year: string) {
        await this.paymentElement.fieldExpiryYear().fill(year);
    }

    async clickPayConfirm() {
        await this.paymentElement.buttonPayConfirm().click();
    }

    async verifyTextPayment() {
        await expect(this.paymentElement.textPayment()).toBeVisible();
        await expect(this.paymentElement.textPayment()).toHaveText("Payment");
    }
}
