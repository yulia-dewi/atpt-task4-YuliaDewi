import { Android, _android as android } from "playwright";
import { Page, test } from "@playwright/test";
import { loginController } from "../../controller/login/login.controller";
import { loginUseCases } from "../../reusablecase/login.usecase";
import { variable } from "../../../resources/variables";
import { sharedController } from "../../controller/shared/shared.controller";
import { dashboardController } from "../../controller/dashboard/dashboard.controller";
import { shipmentController } from "../../controller/shipment/shipment.controller";
import { getRandomFiveDigit, randomName } from "../../../utilities/random.helper";
import { launchEmulatorAndWait } from "../../../utilities/emulator.helper";

let page: Page;
let LoginController: loginController;
let DashboardController: dashboardController;
let ShipmentController: shipmentController;
let LoginUseCases: loginUseCases;
let SharedController: sharedController;

test.describe.configure({ mode: 'serial' });

test.describe.skip('Emulator test', () => {
    test.beforeAll("Launch the browser", async () => {
        const device = await launchEmulatorAndWait('clone', '0000');
        // const [device]= await android.devices();
        await device.shell('am force-stop com.android.chrome');

        const context = await device.launchBrowser();
        page = context.pages()[0];

        LoginController = new loginController(page);
        DashboardController = new dashboardController(page);
        ShipmentController = new shipmentController(page);
        LoginUseCases = new loginUseCases(page);
        SharedController = new sharedController(page);

        await SharedController.accessUrl('https://www.saucedemo.com/v1/');
    })

    test.afterAll('Close tab after test', async () => {
        await page.close();
    })

    test("login success", async () => {
        await LoginUseCases.login_success(variable.username,variable.password);
        await SharedController.visualRegression("product_header.png");
    })

    test("choose items", async () => {
        await DashboardController.clickItemAddtoCart("Sauce Labs Backpack");
        await DashboardController.clickItemAddtoCart("Sauce Labs Bike Light");
        await DashboardController.clickItemAddtoCart("Sauce Labs Onesie");
        await DashboardController.clickCartIcon();
        await DashboardController.verifyCartHeaderVisible();
        await SharedController.visualRegression("cart_header.png");
    })

    test("order shipment", async () => {
        await ShipmentController.clickCheckoutButton();
        await ShipmentController.inputFirstName(randomName());
        await ShipmentController.inputLastName(randomName());
        await ShipmentController.inputPostalCode(getRandomFiveDigit());
        await ShipmentController.clikContinueButton();
        await ShipmentController.textCheckoutOverviewVisible();
        await SharedController.visualRegression("checkout_overview.png");
    })

    test("complete order", async () => {
        await ShipmentController.clickFinishButton();
        await ShipmentController.verifyOrderComplete();
        await SharedController.visualRegression("order_complete.png");
    })
})
