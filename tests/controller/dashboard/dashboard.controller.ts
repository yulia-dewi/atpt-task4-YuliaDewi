import { Page } from "playwright";
import { dashboardElements } from "../../pageobject/dashboard/dahboard.page";
import { expect } from "playwright/test";

export class dashboardController {
    private DashboardElement: dashboardElements;

    constructor(private page: Page) {
        this.DashboardElement = new dashboardElements(page);
    }

    async clickItemAddtoCart(itemName: string) {
        await this.DashboardElement.buttonAddToChart(itemName).click();
    }

    async clickCartIcon() {
        await this.DashboardElement.buttonCartFix().click();
    }

    async verifyCartHeaderVisible() {
        await expect(this.DashboardElement.textYourCart()).toBeVisible();
    }
}