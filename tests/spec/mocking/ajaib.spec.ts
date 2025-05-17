import { test } from '@playwright/test';
import { LoginAjaibController } from '../../controller/ajaib/login.controller';
import { mockAjaibLoginRoute } from '../../../mock/routes/ajaib.route';
import { MockAjaibRequest } from '../../../mock/request/ajaib.mock';

test.describe('Request Mock Testing', () => {
  let loginAjaibController: LoginAjaibController;

  test.beforeEach(async ({ page }) => {
    loginAjaibController = new LoginAjaibController(page);
    await page.goto('https://login.ajaib.co.id/login');
  })
  
  test('No Mock', async () => {
    await loginAjaibController.inputUsername("rahasia@kode.id");
    await loginAjaibController.inputPassword("rahasia");
    await loginAjaibController.clickLoginButton();
    await loginAjaibController.verifyErrorText();
  });

  test('Mock Username and Password', async ({ page, request }) => {
    await mockAjaibLoginRoute(page, request, MockAjaibRequest);

    await loginAjaibController.inputUsername("rahasia@kode.id");
    await loginAjaibController.inputPassword("rahasia");
    await loginAjaibController.clickLoginButton();

    await loginAjaibController.inputPin("1111");
    await loginAjaibController.verifyHomePage();
  });
})