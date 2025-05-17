import { test } from '@playwright/test';
import { LoginAjaibController } from '../../controller/ajaib/login.controller';
import { interceptAjaibLoginRoute, interceptChangeAjaibLoginRoute } from '../../../mock/routes/ajaib.route';
import { MockAjaibRequest } from '../../../mock/request/ajaib.mock';
import { sharedController } from '../../controller/shared/shared.controller';

test.describe('Request Mock Testing', () => {
  let loginAjaibController: LoginAjaibController;
  let SharedController: sharedController;

  test.beforeEach(async ({ page }) => {
    loginAjaibController = new LoginAjaibController(page);
    SharedController = new sharedController(page);
    await SharedController.accessUrl('https://login.ajaib.co.id/login');
  })
  
  test('Intercept Request', async ({ page, request }) => {
    await interceptAjaibLoginRoute(page, request);

    await loginAjaibController.inputUsername("candra@kode.id");
    await loginAjaibController.inputPassword("rahasia");
    await loginAjaibController.clickLoginButton();
    await loginAjaibController.verifyErrorText();
  });

  test('No Mock', async () => {
    await loginAjaibController.inputUsername("rahasia@kode.id");
    await loginAjaibController.inputPassword("rahasia");
    await loginAjaibController.clickLoginButton();
    await loginAjaibController.verifyErrorText();
  });

  test('Intercept Username and Password', async ({ page, request }) => {
    await interceptChangeAjaibLoginRoute(page, request, MockAjaibRequest);

    await loginAjaibController.inputUsername("rahasia@kode.id");
    await loginAjaibController.inputPassword("rahasia");
    await loginAjaibController.clickLoginButton();

    await loginAjaibController.inputPin("1111");
    await loginAjaibController.verifyHomePage();
  });
})