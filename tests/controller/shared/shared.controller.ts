import { Page } from "playwright";
import { expect } from "playwright/test";

export class sharedController {
    constructor(private page: Page) {}

    async accessUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }

    async visualRegression(fileName: string) {
        expect(await this.page.screenshot()).toMatchSnapshot(fileName);
    }
}