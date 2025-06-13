import { test, expect } from '@playwright/test';
import { sharedController } from '../../controller/shared/shared.controller';
import path from 'path';

test.describe('upload', () => {
    let SharedController: sharedController;

    test.beforeEach(async ({ page }) => {
        SharedController = new sharedController(page);
        await SharedController.accessUrl('https://demoqa.com/upload-download');
    })

    test('upload file', async ({ page }) => {
        const fileName = 'not-match-chromium.png';
        const directory = process.cwd();
        const filePath = path.join(directory, 'snapshots/login/login.sanity.spec.ts-snapshots', fileName);

        await page.locator('#uploadFile').setInputFiles(filePath);
        await expect(page.locator('#uploadedFilePath')).toContainText(fileName)
    })
})
