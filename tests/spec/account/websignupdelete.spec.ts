import { test, Page } from '@playwright/test'
import { SignupController } from '../../controller/autoexercise/signup.controller';
import { sharedController } from '../../controller/shared/shared.controller';
import { ydData } from '../../../resources/variables/yddata';
import { LoginControllers } from '../../controller/autoexercise/login.controller';
import { aeHomeControllers } from '../../controller/autoexercise/aehome.controller';

let page: Page;
let signupController: SignupController;
let SharedController: sharedController;
let loginControllers: LoginControllers;
let aeHomeController: aeHomeControllers;
test.describe.configure({ mode: 'serial' });


test.describe('Signup and delete account on Automation Exercise',{tag: ['@regression']}, () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        aeHomeController = new aeHomeControllers(page);
        signupController = new SignupController(page);
        SharedController = new sharedController(page);
        loginControllers = new LoginControllers(page);
        await SharedController.accessUrl('https://www.automationexercise.com/');
        
        
    });

    let name: string;
    let email: string;
    let password: string;

    test("New User Signup", async () => {
        const randomString = Math.random().toString(36).substring(2, 8);
        name = `${ydData.name}${randomString}`;
        email = `${ydData.email}${randomString}@yopmail.com`;
        password = `${ydData.password}${randomString}`;

        console.log (name);
        console.log (email);
        console.log (password);
        await aeHomeController.clickSignup();  
        await signupController.inputName(name);
        await signupController.inputEmail(email);
        await signupController.clickSignupButton();
    })

    test("Enter Account Information", async () => {
        
        await signupController.verifyInputAccountName(name);
        await signupController.verifyInputAccountEmail(email);
        await signupController.chooseGender("Mrs");
        //await signupController.inputAccountName(name);
        await signupController.inputAccountPassword(password);
        await signupController.selectDob('days', '25');
        await signupController.selectDob('months', '12');
        await signupController.selectDob('years', '1983');
        await signupController.clickNewsletter();
        await signupController.clickOptin();
        await signupController.inputFirstName(ydData.firstName);
        await signupController.inputLastName(ydData.lastName);
        await signupController.inputCompany(ydData.company);
        await signupController.inputAddress1(ydData.address1);
        await signupController.inputAddress2(ydData.address2);
        await signupController.selectCountry();
        await signupController.inputState(ydData.state);
        await signupController.inputCity(ydData.city);
        await signupController.inputZipcode(ydData.zipcode);
        await signupController.inputMobile(ydData.mobile);
        await signupController.clickButtonCreateAccount();
        
    })

    test("Account Created", async () => {
        
        await signupController.verifyHeaderText();
        await signupController.verifyCongratulationsText();
        await signupController.verifyAdvantageText();
        await signupController.buttonContinue();
        
    })

    test("Back to Homepage and delete account", async () => {
        
        await loginControllers.verifyLogin(name);
        await aeHomeController.clickDeleteAccount();
        await loginControllers.verifyDeleteHeader();
        await loginControllers.verifyDeletedText();
        await loginControllers.verifyDeleteAdvantage();
    })
})