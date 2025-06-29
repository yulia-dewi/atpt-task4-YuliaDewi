import { Page, expect } from "playwright/test";
import { ExercisePage } from "../../pageobject/task/exercise.page";

export class ExerciseController {
    private exercisePage: ExercisePage;

    constructor(private page: Page) {
        this.exercisePage = new ExercisePage(page);
    }

    async websiteLogoVisible() {
        await expect(this.exercisePage.websiteLogo()).toBeVisible();
    }

    async clickSignUpOrLoginButton() {
        await this.exercisePage.signUpOrLoginButton().click();
    }

    async clickProductButton() {
        await this.exercisePage.productsButton().click();
    }

    async clickCartButton() {
        await this.exercisePage.cartButton().click();
    }

    async verifyTextNewUserSignUp() {
        await expect(this.exercisePage.textNewUserSignUp()).toBeVisible();
    }

    async inputName(value: string) {
        await this.exercisePage.fieldSignup("name").fill(value);
    }

    async inputEmail(value: string) {
        await this.exercisePage.fieldSignup("email").fill(value);
    }

    async clickSubmit(text?: string) {
        if (!text) {
            await this.exercisePage.buttonSubmit().click();

        } else {
            await this.exercisePage.buttonSubmit(text).click();
        }
    }

    async clickSubmitButton() {
        await this.exercisePage.buttonSubmitById().click();
    }

    async verifyTextEnterAccountInformation() {
        await expect(this.exercisePage.textEnterAccountInformation()).toBeVisible();
    }

    async clickCheckboxGender(gender: 'Mr' | 'Mrs') {
        await this.exercisePage.checkboxGender(gender).click();
    }

    async inputDataField(field: string, value: string) {
        await this.exercisePage.dataField(field).fill(value);
    }

    async selectDropdownCalendar(date: 'days' | 'months' | 'years', value: string) {
        await this.exercisePage.dropdownCalendar(date).selectOption(value);
    }

    async selectDropdownCountry(value: string) {
        await this.exercisePage.dropdownCountry().selectOption(value);
    }

    async verifyTextResult(value: string) {
        await expect(this.exercisePage.textResult()).toContainText(value);
    }

    async clickContinueButton() {
        await this.exercisePage.continueButton().click();
    }

    async verifyHeaderMenu(value: string) {
        await expect(this.exercisePage.headerMenu()).toContainText(value);
    }

    async verifyHeaderMenuNotContainText(value: string) {
        await expect(this.exercisePage.headerMenu()).not.toContainText(value);
    }

    async clickDeleteAccountButton() {
        await this.exercisePage.deleteAccountButton().click();
    }

    async verifyHeaderProduct() {
        await expect(this.exercisePage.headerProduct()).toBeVisible();
    }

    async clickProductName(product: string) {
        await this.exercisePage.productName(product).click();
    }

    async getProductPrice(product: string) {
        return this.exercisePage.productPrice(product).innerText();
    }

    async clickAddtoCart(product: string) {
        await this.exercisePage.addToCart(product).click();
    }

    async clickModalAddtoCart() {
        await this.exercisePage.modalAddtoCart().click();
    }

    async verifyHeaderCart() {
        await expect(this.exercisePage.headerCart()).toBeVisible();
    }

    async getCartItems(index: number) {
        return this.exercisePage.cartItems(index).innerText();
    }

    async getCartItemTotalPrice(index: number) {
        return this.exercisePage.cartTotalPrice(index).innerText();
    }

    async clickCartProceed() {
        await this.exercisePage.cartProceed().click();
    }

    async verifyHeaderCheckout() {
        await expect(this.exercisePage.headerCheckout()).toBeVisible();
    }

    async getTotalPrice() {
        return this.exercisePage.checkoutTotalPrice().innerText();
    }

    async clickPlaceOrder() {
        await this.exercisePage.buttonPlaceOrder().click();
    }

    async verifyHeaderPayment() {
        await expect(this.exercisePage.headerPayment()).toBeVisible();
    }

    async inputField(field: string, value: string) {
        await this.exercisePage.paymentInput(field).fill(value);
    }

    async inputFieldYear(value: string) {
        await this.exercisePage.paymentInputYear().fill(value);
    }

    async clickDownloadInvoiceButton() {
        await this.exercisePage.downloadInvoiceButton().click();
    }
}