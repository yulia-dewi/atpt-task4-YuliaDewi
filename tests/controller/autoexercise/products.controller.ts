import { expect, Page } from "playwright/test";
import { ProductsElement } from "../../pageobject/autoexercise/products.page";


export class ProductControllers {
    private productsElement: ProductsElement;

    constructor(private page: Page) {
        this.productsElement = new ProductsElement(page);
    }

    async addProductToCart(id: number) {
        await this.productsElement.buttonAddProducts(id).click();        
    }

    async clickContinueShopping() {
        await this.productsElement.buttonContinueShopping().click({ timeout: 5000 });
    }

    async clickViewCart() {
        await this.productsElement.linkViewCart().click();
    }

    
}
