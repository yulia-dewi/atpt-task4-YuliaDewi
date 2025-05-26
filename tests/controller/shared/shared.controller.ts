import { Page } from "playwright";
import { expect, Locator, PageAssertionsToHaveScreenshotOptions, TestInfo } from "playwright/test";
import { AxeResults } from 'axe-core'
import { AccessibilityImpact } from "../../../enum/impact.enum";

type ModifyVisualRegressionInput = {
    fileName: string;
    element?: string;
    options?: PageAssertionsToHaveScreenshotOptions;
  };

export class sharedController {
    constructor(private page: Page) {}

    async accessUrl(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }

    async visualRegression(fileName: string): Promise<void> {
        expect(await this.page.screenshot()).toMatchSnapshot(fileName, { maxDiffPixelRatio: 0.02 });
    }

    async modifyVisualRegression(input: ModifyVisualRegressionInput ): Promise<void> {
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

    async accessibilityErrorCheck(results: AxeResults, testInfo?: TestInfo): Promise<void> {

        if (results.violations.length > 0) {
            console.log(`🔴 ${results.violations.length} accessibility violations found:`);
        
            results.violations.forEach((violation, index) => {
              console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
              console.log(`   Help: ${violation.help}`);
              console.log(`   Impact: ${violation.impact}\n`);
        
              violation.nodes.forEach((node, i) => {
                console.log(`   [Node ${i + 1}] Target: ${node.target.join(', ')}`);
                console.log(`   Failure Summary: ${node.failureSummary}\n`);
              });
            });
          } else {
            console.log('✅ No accessibility violations found.');
          }

          if (testInfo) {
            await testInfo.attach('accessibility-report', {
              body: JSON.stringify(results, null, 2),
              contentType: 'application/json',
            });
          }
    }

    async accessibilityCheckByStatus(results: AxeResults, status: AccessibilityImpact, maxError?: number): Promise<void> {
        const maximumError = maxError || 0;

        const violationImpact = results.violations.filter(
            (v) => v.impact == status
        );

        console.log(`🔍 Ditemukan ${violationImpact.length} pelanggaran ${status}.`);

        if (violationImpact.length > maximumError) {
            violationImpact.forEach((violation, index) => {
                console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
                console.log(`   Help: ${violation.help}`);
                console.log(`   URL: ${violation.helpUrl}`);
            });
        }

        expect(violationImpact.length).toBeLessThanOrEqual(maximumError);
    }
}
