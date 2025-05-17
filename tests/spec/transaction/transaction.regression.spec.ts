import { test, Page} from '@playwright/test'
import { variable } from '../../../resources/variables/index';
import { loginUseCases } from '../../reusablecase/login.usecase';
import { randomName, getRandomFiveDigit } from '../../../utilities/random.helper';
import { dashboardController } from '../../controller/dashboard/dashboard.controller';
import { shipmentController } from '../../controller/shipment/shipment.controller';
import { sharedController } from '../../controller/shared/shared.controller';

let page: Page;
let DashboardController: dashboardController;
let ShipmentController: shipmentController;
let LoginUseCases: loginUseCases;
let SharedController: sharedController;

test.describe.configure({ mode: 'serial' });

test.describe('Login saucelab',{tag: '@happyFlow'}, () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        LoginUseCases = new loginUseCases(page);
        DashboardController = new dashboardController(page);
        ShipmentController = new shipmentController(page);
        SharedController = new sharedController(page);
        await SharedController.accessUrl('https://www.saucedemo.com/v1/');
    });

    test("login success", async () => {
        await LoginUseCases.login_success(variable.username,variable.password);
        await SharedController.visualRegression("product_header.png")
    })

    test("choose items", async () => {
        await DashboardController.clickItemAddtoCart("Sauce Labs Backpack");
        await DashboardController.clickItemAddtoCart("Sauce Labs Bike Light");
        await DashboardController.clickItemAddtoCart("Sauce Labs Onesie");
        await DashboardController.clickCartIcon();
        await DashboardController.verifyCartHeaderVisible();
        await SharedController.visualRegression("cart_header.png")
    })

    test("order shipment", async () => {
        await ShipmentController.clickCheckoutButton();
        await ShipmentController.inputFirstName(randomName());
        await ShipmentController.inputLastName(randomName());
        await ShipmentController.inputPostalCode(getRandomFiveDigit());
        await ShipmentController.clikContinueButton();
        await ShipmentController.textCheckoutOverviewVisible();
        await SharedController.visualRegression("checkout_overview.png")
    })

    test("complete order", async () => {
        await ShipmentController.clickFinishButton();
        await ShipmentController.verifyOrderComplete();
        await SharedController.visualRegression("order_complete.png")
    })
})