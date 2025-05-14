import { test, expect } from '@playwright/test';

test('iframe', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame1Text:string | null = await page.locator('#frame1').contentFrame().locator('#sampleHeading').textContent()
  console.log(frame1Text);
  expect(frame1Text).toMatch('This is a sample page')

  const frame2Text = await page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' }).innerText();
  console.log(frame2Text);
  await expect(page.locator('#frame2').contentFrame().getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
  await page.waitForTimeout(10000);
});