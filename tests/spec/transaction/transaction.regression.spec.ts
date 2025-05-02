import { test, Page} from '@playwright/test'
import { variable } from '../../../resources/variables/index';
import { loginUseCases } from '../../use_cases/login.usecase';
import { randomName, getRandomFiveDigit } from '../../../utilities/random.helper';
import { dashboardController } from '../../controller/dashboard/dashboard.controller';
import { shipmentController } from '../../controller/shipment/shipment.controller';

let page: Page;
let DashboardController: dashboardController;
let ShipmentController: shipmentController;
let LoginUseCases: loginUseCases;

test.describe.configure({ mode: 'serial' });

test.describe('Login saucelab',{tag: '@happyFlow'}, () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        LoginUseCases = new loginUseCases(page);
        DashboardController = new dashboardController(page);
        ShipmentController = new shipmentController(page);
        await page.goto('https://www.saucedemo.com/v1/');
    });

    test("login success", async () => {
        await LoginUseCases.login_success(variable.username,variable.password);
    })

    test("choose items", async () => {
        await DashboardController.clickItemAddtoCart("Sauce Labs Backpack");
        await DashboardController.clickItemAddtoCart("Sauce Labs Bike Light");
        await DashboardController.clickItemAddtoCart("Sauce Labs Onesie");
        await DashboardController.clickCartIcon();
        await DashboardController.verifyCartHeaderVisible();
    })

    test("order shipment", async () => {
        await ShipmentController.clickCheckoutButton();
        await ShipmentController.inputFirstName(randomName());
        await ShipmentController.inputLastName(randomName());
        await ShipmentController.inputPostalCode(getRandomFiveDigit());
        await ShipmentController.clikContinueButton();
        await ShipmentController.textCheckoutOverviewVisible();
    })

    test("complete order", async () => {
        await ShipmentController.clickFinishButton();
        await ShipmentController.verifyOrderComplete();
    })
})