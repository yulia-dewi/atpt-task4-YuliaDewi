import { Page } from "playwright";
import { expect } from "playwright/test";

export class sharedController {
    constructor(private page: Page) {}

    async visualRegression(fileName: string) {
        expect(await this.page.screenshot()).toMatchSnapshot(fileName);
    }
}