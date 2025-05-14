import { test, expect } from '@playwright/test';

test('modal', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/entry_ad');
  await expect(page.getByText('This is a modal window It\'s')).toBeVisible();
  await expect(page.locator('#modal')).toContainText('This is a modal window');
  await expect(page.locator('#modal')).toContainText('It\'s commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).');
  await expect(page.locator('#modal')).toContainText('Close');
  await page.getByText('Close', { exact: true }).click();
});