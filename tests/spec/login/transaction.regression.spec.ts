import { expect, test, Page} from '@playwright/test'
import { loginElements } from '../../pageobject/login/login.page'
import { variable } from '../../../resources/variables/index';
import { loginUseCases } from '../../use_cases/login.usecase';
import { dashboardlements } from '../../pageobject/dashboard/dahboard.page';
import { shipmentElements } from '../../pageobject/shipment/shipment.page';

let page: Page;
let LoginElement: loginElements;
let LoginUseCases: loginUseCases;
let DashboardElement: dashboardlements;
let ShipmentElements: shipmentElements;

test.describe('Login saucelab', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        LoginElement = new loginElements(page);
        LoginUseCases = new loginUseCases(page);
        DashboardElement = new dashboardlements(page);
        ShipmentElements = new shipmentElements(page);
        await page.goto('https://www.saucedemo.com/v1/');
    });

    test("login success",{tag: '@regression'}, async () => {
        await LoginUseCases.login_success(variable.username,variable.password);
    })

    test("choose items",{tag: '@regression'}, async () => {
        // await DashboardElement.buttonAddToChartBackpack().click();
        // await DashboardElement.buttonAddToChartBoltTShirt().click();
        // await DashboardElement.buttonCart().click();

        await DashboardElement.buttonAddToChart("Sauce Labs Backpack").click();
        await DashboardElement.buttonAddToChart("Sauce Labs Bike Light").click();
        await DashboardElement.buttonAddToChart("Sauce Labs Onesie").click();
        await DashboardElement.buttonCartFix().click();
    })

    test("order shipment",{tag: '@regression'}, async () => {
        await ShipmentElements.buttonCheckout().click();
        await ShipmentElements.inputFirstName().fill('First Name');
        await ShipmentElements.inputLastName().fill('Last Name');
        await ShipmentElements.inputPostalCode().fill('55555');
        await ShipmentElements.buttonContinue().click();
    })

    test("complete order",{tag: '@regression'}, async () => {
        await ShipmentElements.buttonFinish().click();
        await expect(ShipmentElements.textOrderComplete()).toBeVisible();
    })
})