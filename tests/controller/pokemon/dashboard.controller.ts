import { Page } from "playwright";
import { DashboardPokemonElements } from "../../pageobject/pokemon/dashboard.page";
import { expect } from "playwright/test";

export class DashboardPokemonController {
    private dashboardElement: DashboardPokemonElements

    constructor(private page: Page) {
        this.dashboardElement = new DashboardPokemonElements(page);
    }

    async clickMenu(menu: string) {
        await this.dashboardElement.buttonMenu(menu).click();
    }

    async verifyText(text: string) {
        await expect(this.dashboardElement.resultField()).toContainText(text);
    }

    async verifyHeaderText(text: string) {
        await expect(this.dashboardElement.headerText()).toContainText(text);
    }
}