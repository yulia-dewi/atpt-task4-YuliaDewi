import { Page } from "playwright";
import { shipmentElements } from "../../pageobject/shipment/shipment.page";
import { expect } from "playwright/test";

export class shipmentController {
    private ShipmentElement: shipmentElements;

    constructor(private page: Page) {
        this.ShipmentElement = new shipmentElements(page);
    }

    async clickCheckoutButton() {
        await this.ShipmentElement.buttonCheckout().click();
    }

    async inputFirstName(firstName: string){
        await this.ShipmentElement.inputFirstName().fill(firstName);
    }

    async inputLastName(lastName: string) {
        await this.ShipmentElement.inputLastName().fill(lastName);
    }

    async inputPostalCode(postal: string) {
        await this.ShipmentElement.inputPostalCode().fill(postal);
    }

    async clikContinueButton() {
        await this.ShipmentElement.buttonContinue().click();
    }

    async textCheckoutOverviewVisible() {
        await expect(this.ShipmentElement.textCheckoutOverview()).toBeVisible()
    }

    async clickFinishButton() {
        await this.ShipmentElement.buttonFinish().click();
    }

    async verifyOrderComplete() {
        await expect(this.ShipmentElement.textOrderComplete()).toBeVisible()
    }
}