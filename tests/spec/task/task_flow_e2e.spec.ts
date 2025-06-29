import { test, Page, expect, Download } from '@playwright/test';
import { sharedController } from '../../controller/shared/shared.controller';
import { ExerciseController } from '../../controller/task/exercise.controller';
import { ExercisePage } from '../../pageobject/task/exercise.page';
import { totalPriceCalculation } from '../../../utilities/calculation.helper';
import path from 'path';

let page: Page;
let SharedController: sharedController;
let exerciseController: ExerciseController;
let exercisePage: ExercisePage;

test.describe.configure({ mode: 'serial' });

test.describe('Assignment 4 Solution Code', () => {
    const products: string[] = ["Blue Top", "Winter Top", "Madame Top For Women"];
    let price: string[] = new Array();

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
            maxDiffPixelRatio: 0.01,
            mask: [
                exercisePage.fieldDefault('name'),
                exercisePage.fieldDefault('email')
            ]
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

    test('Enter Products page', async () => {
        await exerciseController.clickProductButton();
        await exerciseController.verifyHeaderProduct();

        await expect(page).toHaveScreenshot('product.png', {
            maxDiffPixelRatio: 0.01,
            fullPage: true
        });

        for (let i: number = 0; i < products.length; i++) {
            await exerciseController.clickProductName(products[i]);

            const productPrice = await exerciseController.getProductPrice(products[i]);
            price.push(productPrice);

            await exerciseController.clickAddtoCart(products[i]);
            await exerciseController.clickModalAddtoCart();
        }
    })

    test('Enter Cart Page', async () => {
        await exerciseController.clickCartButton();
        await exerciseController.verifyHeaderCart();

        await expect(page).toHaveScreenshot('cart.png', {
            maxDiffPixelRatio: 0.01
        });

        for (let i: number = 0; i < products.length; i++) {
            const index = i + 1;
            const cartItem = await exerciseController.getCartItems(index);
            const cartItemPrice = await exerciseController.getCartItemTotalPrice(index);

            expect(cartItem).toEqual(products[i]);
            expect(cartItemPrice).toEqual(price[i]);
        }
    })
    
    test('Enter Checkout Page', async () => {
        await exerciseController.clickCartProceed();
        await exerciseController.verifyHeaderCheckout();

        await expect(page).toHaveScreenshot('checkout.png', {
            maxDiffPixelRatio: 0.01,
            fullPage: true
        });

        const totalPrice = await exerciseController.getTotalPrice();
        const calculation = await totalPriceCalculation(price);

        expect(totalPrice).toEqual(calculation);
    })
    
    test('Enter Payment Page', async () => {
        await exerciseController.clickPlaceOrder();
        await exerciseController.verifyHeaderPayment();

        await expect(page).toHaveScreenshot('payment.png', {
            maxDiffPixelRatio: 0.01
        });

        await exerciseController.inputField('Name on Card', 'Candra Ok');
        await exerciseController.inputField("Card Number",'10110111000111');
        await exerciseController.inputField("CVC",'101');
        await exerciseController.inputField("Expiration",'10');
        await exerciseController.inputFieldYear('2010');
    })
    
    test('Success Payment', async () => {
        await exerciseController.clickSubmitButton();
        await exerciseController.verifyTextResult('Order Placed!');

        await expect(page).toHaveScreenshot('success_payment.png', {
            maxDiffPixelRatio: 0.01
        });

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            exerciseController.clickDownloadInvoiceButton()
        ])

        const filePath = path.join(process.cwd(), 'download', download.suggestedFilename());
        await download.saveAs(filePath);

        await exerciseController.clickContinueButton();
        await expect(page).toHaveURL('https://automationexercise.com/');

        await expect(page).toHaveScreenshot('home.png', {
            maxDiffPixelRatio: 0.01
        });
    })
    
})
