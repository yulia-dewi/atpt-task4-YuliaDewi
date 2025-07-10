import { expect, Page } from "playwright/test";
import { OrderElement } from "../../pageobject/autoexercise/order.page";

export class OrderControllers {
    private orderElement: OrderElement;

    constructor(private page: Page) {
        this.orderElement = new OrderElement(page);
    }

    async clickDownloadInvoice() {
        await this.orderElement.buttonDownloadInvoice().click();
    }
    async clickContinue() {
        await this.orderElement.buttonContinue().click();
    }

    async verifyOrderPlaced() {
        await expect(this.orderElement.headerOrderPlaced()).toHaveText("Order Placed!");
    }

    async verifyOrderConfirmed() {
        await expect(this.orderElement.textOrderConfirmed()).toHaveText("Congratulations! Your order has been confirmed!");
    }
    
}
