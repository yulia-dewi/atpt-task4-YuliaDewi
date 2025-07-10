import { Page, test, expect, Download } from '@playwright/test'
import { SignupController } from '../../controller/autoexercise/signup.controller';
import { sharedController } from '../../controller/shared/shared.controller';
import { ydData, ydLogin, selectedProducts, ydPayment } from '../../../resources/variables/yddata';
import { LoginControllers } from '../../controller/autoexercise/login.controller';
import { aeHomeControllers } from '../../controller/autoexercise/aehome.controller';
import { ProductControllers } from '../../controller/autoexercise/products.controller';
import { CartControllers } from '../../controller/autoexercise/cart.controller';
import { CheckoutControllers } from '../../controller/autoexercise/checkout.controller';
import { PaymentControllers } from '../../controller/autoexercise/payment.controller';
import path from 'path';
import { OrderControllers } from '../../controller/autoexercise/order.controller';

let page: Page;
let signupController: SignupController;
let SharedController: sharedController;
let loginControllers: LoginControllers;
let aeHomeController: aeHomeControllers;
let productControllers: ProductControllers;
let cartControllers: CartControllers;
let checkoutControllers: CheckoutControllers;
let paymentControllers: PaymentControllers;
let orderControllers: OrderControllers;

test.describe.configure({ mode: 'serial' });
test.describe('Whole transaction process from registration until download invoice',{tag: ['@endtoend', '@regression']}, () => {
    console.log('test');
    let download: Download;
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        signupController = new SignupController(page);
        SharedController = new sharedController(page);
        loginControllers = new LoginControllers(page);
        aeHomeController = new aeHomeControllers(page);
        productControllers = new ProductControllers(page);
        cartControllers = new CartControllers(page);
        checkoutControllers = new CheckoutControllers(page);
        paymentControllers = new PaymentControllers(page);
        orderControllers = new OrderControllers(page);
        await SharedController.accessUrl('https://www.automationexercise.com/');  
        
    });

    let name: string;
    let email: string;
    let password: string;

    // test("New User Signup", async () => {

    //     const randomString = Math.random().toString(36).substring(2, 8);
    //     name = `${ydData.name}${randomString}`;
    //     email = `${ydData.email}${randomString}@yopmail.com`;
    //     password = `${ydData.password}${randomString}`;

    //     console.log (name);
    //     console.log (email);
    //     console.log (password);
    //     await aeHomeController.clickSignup();  
    //     await signupController.inputName(name);
    //     await signupController.inputEmail(email);
    //     await signupController.clickSignupButton();
        
    // })

    // test("Enter Account Information", async () => {
    //     console.log ("test2:",name);
    //     console.log (email);
    //     console.log (password);
    //     await signupController.verifyInputAccountName(name);
    //     await signupController.verifyInputAccountEmail(email);
    //     await signupController.chooseGender("Mrs");
    //     //await signupController.inputAccountName(name);
    //     await signupController.inputAccountPassword(password);
    //     await signupController.selectDob('days', '25');
    //     await signupController.selectDob('months', '12');
    //     await signupController.selectDob('years', '1983');
    //     await signupController.clickNewsletter();
    //     await signupController.clickOptin();
    //     await signupController.inputFirstName(ydData.firstName);
    //     await signupController.inputLastName(ydData.lastName);
    //     await signupController.inputCompany(ydData.company);
    //     await signupController.inputAddress1(ydData.address1);
    //     await signupController.inputAddress2(ydData.address2);
    //     await signupController.selectCountry();
    //     await signupController.inputState(ydData.state);
    //     await signupController.inputCity(ydData.city);
    //     await signupController.inputZipcode(ydData.zipcode);
    //     await signupController.inputMobile(ydData.mobile);
    //     await signupController.clickButtonCreateAccount();
        
    // })

    // test("Account Created", async () => {
        
    //     await signupController.verifyHeaderText();
    //     await signupController.verifyCongratulationsText();
    //     await signupController.verifyAdvantageText();
        
    // })

    // test("Back to Homepage and already logged in", async () => {
        
    //     await signupController.buttonContinue();
    //     await loginControllers.verifyLogin(name);

    // })

    test("Login account to skip register when scripting", async () => {
        //need to choose want to login or signup
        await aeHomeController.clickLogin();
        await loginControllers.inputEmail(ydLogin.email);
        await loginControllers.inputPassword(ydLogin.password);
        await loginControllers.clickLoginButton();

    })

    test("Click menu Products", async () => {
        //need to choose want to login or signup
        await aeHomeController.clickProducts();
        await aeHomeController.verifyHeaderAllProducts();
    })

    test("Click product details", async () => {
        for (const product of selectedProducts) {
            await productControllers.addProductToCart(product.id);
            await productControllers.clickContinueShopping();
          }
    })

    test("Cart page", async () => {
        await aeHomeController.clickCart();
        await cartControllers.verifyCartText();
        
        const rows = await page.locator('#cart_info_table tbody tr').all();
        let columnValues: string[] = [];
      
        for (const row of rows) {
          const columns = await row.locator('td').all();
      
          for (const col of columns) {
            const text = (await col.innerText()).trim();
            if (text !== '') {
              columnValues.push(text);
            }
          }
        }
        
        console.log(columnValues);
        for (const product of selectedProducts) {
            const nameMatch = columnValues.some(val => val.includes(product.name));
            const priceMatch = columnValues.some(val => val.includes(product.price));
            console.log(nameMatch);
            console.log(priceMatch);
          
            expect(nameMatch).toBeTruthy();  // Check if product name exists
            expect(priceMatch).toBeTruthy(); // Check if product price exists
          }
      
        
    })

    test("Click proceed to checkout", async () => {
        await cartControllers.clickProceedCheckout();

        await checkoutControllers.verifyDelivAdr();
        await checkoutControllers.verifyDelivLastName();
        await checkoutControllers.verifyDelivCompany();
        await checkoutControllers.verifyDelivAddress1();
        await checkoutControllers.verifyDelivAddress2();
        await checkoutControllers.verifyDelivCityStatePostal();
        await checkoutControllers.verifyDelivCountry();
        await checkoutControllers.verifyDelivPhone();
        await checkoutControllers.verifyBillAdr();
        await checkoutControllers.verifyBillLastName();
        await checkoutControllers.verifyBillCompany();
        await checkoutControllers.verifyBillAddress1();
        await checkoutControllers.verifyBillAddress2();
        await checkoutControllers.verifyBillCityStatePostal();
        await checkoutControllers.verifyBillCountry();
        await checkoutControllers.verifyBillPhone();

        const rows = await page.locator('#cart_info tbody tr').all();
        let columnValues: string[] = [];
      
        for (const row of rows) {
          const columns = await row.locator('td').all();
      
          for (const col of columns) {
            const text = (await col.innerText()).trim();
            if (text !== '') {
              columnValues.push(text);
            }
          }
        }
        
        console.log(columnValues);
        for (const product of selectedProducts) {
            const nameMatch = columnValues.some(val => val.includes(product.name));
            const priceMatch = columnValues.some(val => val.includes(product.price));
            console.log(nameMatch);
            console.log(priceMatch);
          
            expect(nameMatch).toBeTruthy();  // Check if product name exists
            expect(priceMatch).toBeTruthy(); // Check if product price exists
          }

        await checkoutControllers.verifyTotalAmount();
        await checkoutControllers.inputComment();
    })

    test("Click place to order", async () => {
        await checkoutControllers.clickPlaceOrder();
        await paymentControllers.verifyTextPayment();
        await paymentControllers.inputNameCard(ydPayment.name);
        await paymentControllers.inputCardNumber(ydPayment.card);
        await paymentControllers.inputCvc(ydPayment.cvc);
        await paymentControllers.inputExpiryMonth(ydPayment.month);
        await paymentControllers.inputExpiryYear(ydPayment.year);
        await paymentControllers.clickPayConfirm();
    })

    test('Order successfully placed and download invoice', async () => {
        const fileName = "invoice.txt";
        const directory = process.cwd();
        const filePath = path.join(directory, 'download', fileName);

        await orderControllers.verifyOrderPlaced();
        await orderControllers.verifyOrderConfirmed();
        [download] = await Promise.all([
            page.waitForEvent('download'),
            orderControllers.clickDownloadInvoice(),
        ])
        await download.saveAs(filePath);
        await orderControllers.clickContinue();
    })

})