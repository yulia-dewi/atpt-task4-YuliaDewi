import { test } from '@playwright/test';
import { sharedController } from '../../controller/shared/shared.controller';
import path from 'path';
import { loginUseCases } from '../../reusablecase/login.usecase';
import { variable } from '../../../resources/variables';

test.describe('Screenshot', () => {
    let SharedController: sharedController;
    let LoginUseCases: loginUseCases;

    test.beforeEach(async ({ page }) => {
        SharedController = new sharedController(page);
        LoginUseCases = new loginUseCases(page);
        await SharedController.accessUrl('https://saucedemo.com/');
        await LoginUseCases.login_success(variable.username,variable.password);
        await page.waitForTimeout(1000);
    })

    test('Take screenshot whole page', async ({ page }) => {
        await page.screenshot({ 
            fullPage: true,
            path: path.join(process.cwd(), 'screenshots', 'take_fullpage_screenshot.png')
         });
    })

    test('Take screenshot viewport', async ({ page }) => {
        await page.screenshot({ 
            path: path.join(process.cwd(), 'screenshots', 'viewport_screenshot.png')
         });
    })

    test('Take screenshot element', async ({ page }) => {
        await page.locator('(//*[@class="inventory_item"])[1]').screenshot({ 
            path: path.join(process.cwd(), 'screenshots', 'element_screenshot.png')
         });
    })
    
    
})
