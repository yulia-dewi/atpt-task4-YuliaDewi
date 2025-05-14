import { test, expect } from '@playwright/test';

test('dropdown', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('(//div[@class="inventory_item"])[1]')).toContainText('$29.99');
  await expect(page.locator('(//div[@class="inventory_item"])[2]')).toContainText('$9.99');

  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  await expect(page.locator('(//div[@class="inventory_item"])[1]')).toContainText('$15.99');
  await expect(page.locator('(//div[@class="inventory_item"])[2]')).toContainText('$7.99');

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await expect(page.locator('(//div[@class="inventory_item"])[1]')).toContainText('$7.99');
  await expect(page.locator('(//div[@class="inventory_item"])[2]')).toContainText('$9.99');

  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await expect(page.locator('(//div[@class="inventory_item"])[1]')).toContainText('$49.99');
  await expect(page.locator('(//div[@class="inventory_item"])[2]')).toContainText('$29.99');
  await page.waitForTimeout(10000)
});