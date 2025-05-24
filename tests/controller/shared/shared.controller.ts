import { Page } from "playwright";
import { expect, Locator, PageAssertionsToHaveScreenshotOptions } from "playwright/test";

type ModifyVisualRegressionInput = {
    fileName: string;
    element?: string;
    options?: PageAssertionsToHaveScreenshotOptions;
  };

export class sharedController {
    constructor(private page: Page) {}

    async accessUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }

    async visualRegression(fileName: string) {
        expect(await this.page.screenshot()).toMatchSnapshot(fileName, { maxDiffPixelRatio: 0.02 });
    }

    async modifyVisualRegression(input: ModifyVisualRegressionInput ){
        let webElement: Page | Locator = this.page;

        if (input.element) {
            webElement = this.page.locator(input.element);
        }
        
        await expect(webElement).toHaveScreenshot(input.fileName, input.options);
    }

    async htmlVisualRegression(fileName: string, locator?: string): Promise<void> {
        let element: string;

        if (locator) {
            element = await this.page.locator(locator).innerHTML();
        } else {
            element = await this.page.content();
        }

        expect(element).toMatchSnapshot(fileName);
    }
}
