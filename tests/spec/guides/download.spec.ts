import { test } from '@playwright/test';
import { sharedController } from '../../controller/shared/shared.controller';
import path from 'path';

test.describe('download', () => {
    let SharedController: sharedController;

    test.beforeEach(async ({ page }) => {
        SharedController = new sharedController(page);
        await SharedController.accessUrl('https://demoqa.com/upload-download');
    })

    test('download static file name', async ({ page }) => {
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#downloadButton').click(),
        ])

        const fileName = download.suggestedFilename();
        const directory = process.cwd();
        const filePath = path.join(directory, 'download', fileName);

        await download.saveAs(filePath);
    })

    test('download dynamic file name', async ({ page }) => {
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#downloadButton').click(),
        ])

        let { name, ext } = path.parse(download.suggestedFilename());
        
        const timeStamp = Date.now();
        const fileName = `${name}_${timeStamp}${ext}`; 

        const directory = process.cwd();
        const filePath = path.join(directory, 'download', fileName);

        await download.saveAs(filePath);
    })
    
    
})
