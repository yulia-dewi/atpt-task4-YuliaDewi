import { expect, test} from '@playwright/test'
import { loginElements } from '../../pageobject/login/login.page'
import { variable } from '../../../resources/variables/index';
import { loginUseCases } from '../../use_cases/login.usecase';

test.describe('Login saucelab', () => {
    let LoginElement: loginElements;
    let LoginUseCases: loginUseCases;

    test.beforeEach(async ({ page }) => {
        LoginElement = new loginElements(page);
        LoginUseCases = new loginUseCases(page)
        await page.goto("https://www.saucedemo.com/v1/");
    });

    test("login incorrect",{tag: '@regression'}, async ({page}) => {
        await LoginElement.fieldUsernamePassword("text").fill("standard_sauces");
        await LoginElement.fieldUsernamePassword("password").fill(variable.password);
        await LoginElement.buttonLogin().click();
        await page.pause();
        // const errorMessage = LoginElement.textError().innerText();
        await expect(LoginElement.textError()).toHaveText(/Username and password do not match any user in this service/);
        // console.log(errorMessage);
    })

    test("login with empty username",{tag: ['@sanity', '@regression']}, async ({page}) => {
        await LoginElement.fieldUsernamePassword("password").fill(variable.password);
        await LoginElement.buttonLogin().click();

        // const errorMessage = LoginElement.textError().innerText();
        await expect(LoginElement.textError()).toHaveText(/Username is required/);
        // console.log(errorMessage);
    })

    test("login with empty password",{tag: '@sanity'}, async ({page}) => {
        await LoginElement.fieldUsernamePassword("text").fill(variable.username);
        await LoginElement.buttonLogin().click();

        // const errorMessage = LoginElement.textError().innerText();
        await expect(LoginElement.textError()).toHaveText(/Password is required/);
        // console.log(errorMessage);
    })

    test.skip("login with no internet connection",{tag: ['@sanity']}, async ({page}) => {
        await LoginElement.fieldUsernamePassword("text").fill(variable.username);
        await LoginElement.fieldUsernamePassword("password").fill(variable.password);
        await LoginElement.buttonLogin().click();
        await page.context().setOffline(true);

        try {
            await page.reload();
          } catch (error) {
            console.log('Reload failed as expected due to offline mode.');
          }
          
        await expect(LoginElement.headerProduct()).not.toBeVisible();
        await page.context().setOffline(false);
        await page.reload();
        await expect(LoginElement.headerProduct()).toBeVisible();
    })

    test("login success",{tag: ['@sanity','@regression','@success']}, async ({page}) => {
        await LoginUseCases.login_success(variable.username,variable.password);
    })
})