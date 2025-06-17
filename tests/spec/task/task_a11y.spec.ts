import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { sharedController } from '../../controller/shared/shared.controller';

let SharedController: sharedController

test.describe('Task 3 accessibility', () => {
    test.beforeEach(async ({ page }) => {
        SharedController = new sharedController(page);
        await SharedController.accessUrl('https://automationexercise.com/');
    })

    test('Check Accessibility', async ({ page }) => {
        const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

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
    })
})
