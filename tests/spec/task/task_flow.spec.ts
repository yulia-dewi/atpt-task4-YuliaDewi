import { test, Page, expect } from '@playwright/test';
import { sharedController } from '../../controller/shared/shared.controller';
import { ExerciseController } from '../../controller/task/exercise.controller';
import { ExercisePage } from '../../pageobject/task/exercise.page';

let page: Page;
let SharedController: sharedController;
let exerciseController: ExerciseController;
let exercisePage: ExercisePage;

test.describe.configure({ mode: 'serial' });

test.describe('Assignment 3 Solution Code', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

        SharedController = new sharedController(page);
        exerciseController = new ExerciseController(page);
        exercisePage = new ExercisePage(page);
        await SharedController.accessUrl('https://automationexercise.com/');
        await exerciseController.websiteLogoVisible();
    })

    test('Homepage', async () => {
        await expect(page).toHaveScreenshot('homepage.png', {
            mask: [
                exercisePage.slideCarousel()
            ],
            maxDiffPixelRatio: 0.01,
            maxDiffPixels: 200
        });

        await exerciseController.clickSignUpOrLoginButton();
        await exerciseController.verifyTextNewUserSignUp();
    })
    
    test('Sign Up', async () => {
        const rndm = Date.now();

        await exerciseController.inputName(`account_${rndm}`);
        await exerciseController.inputEmail(`account_${rndm}@test.com`);

        await expect(page).toHaveScreenshot('signup.png', {
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.clickSubmit('Signup');
        await exerciseController.verifyTextEnterAccountInformation();
    })
    
    test('Input Information', async () => {
        await exerciseController.clickCheckboxGender('Mr');
        await exerciseController.inputDataField('Password', 'PasswordMustBeStrong');
        await exerciseController.selectDropdownCalendar('days', '15');
        await exerciseController.selectDropdownCalendar('months', '10');
        await exerciseController.selectDropdownCalendar('years', '2008');
        await exerciseController.inputDataField('First name', 'Candra');
        await exerciseController.inputDataField('Last name', 'Ok');
        await exerciseController.inputDataField('Company', 'My Company');
        await exerciseController.inputDataField('Address', 'Company Address');
        await exerciseController.selectDropdownCountry('United States');
        await exerciseController.inputDataField('State', 'Indonesia');
        await exerciseController.inputDataField('City', 'Jakarta');
        await exerciseController.inputDataField('Zipcode', '77777');
        await exerciseController.inputDataField('Mobile Number', '08091234567');

        await expect(page).toHaveScreenshot('after_input_information.png', {
            fullPage: true,
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.clickSubmit('Create Account');
        await exerciseController.verifyTextResult('Account Created!');
    })
    
    test('Success Signup', async () => {
        await expect(page).toHaveScreenshot('Success Signup.png', {
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.clickContinueButton();
        await exerciseController.verifyHeaderMenu('Logout');
        await exerciseController.verifyHeaderMenu('Delete Account');
    })

    test('Delete Account', async () => {
        await expect(page).toHaveScreenshot('homepage_before_delete.png', {
            mask: [
                exercisePage.slideCarousel()
            ],
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.clickDeleteAccountButton();
        await exerciseController.verifyTextResult('Account Deleted!');
    })
    
    test('Delete Success', async () => {
        await expect(page).toHaveScreenshot('Success Delete.png', {
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.clickContinueButton();
        await exerciseController.verifyHeaderMenu('Signup');
        await exerciseController.verifyHeaderMenu('Login');
        await exerciseController.verifyHeaderMenuNotContainText('Delete Account');

        await expect(page).toHaveScreenshot('homepage_after_delete.png', {
            mask: [
                exercisePage.slideCarousel()
            ],
            maxDiffPixelRatio: 0.01
        });
    })
})
