import { Page } from "@playwright/test";

export class dashboardElements {
    constructor (private page : Page) {}

    buttonAddToChart(product: string) {
        return this.page.locator(`//div[text()="${product}"]//ancestor::div[2]//button`)
    };

    buttonAddToChartBackpack() {
        return this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button')
    }

    buttonAddToChartBoltTShirt() {
        return this.page.getByRole('button', { name: 'ADD TO CART' }).nth(1)
    }

    buttonCart() {
        return this.page.getByRole('link', { name: '2' })
    }

    buttonCartFix() {
        return this.page.locator('//*[@data-icon="shopping-cart"]');
    }

    textYourCart() {
        return this.page.locator('//div[text()="Your Cart"]');
    }
}
