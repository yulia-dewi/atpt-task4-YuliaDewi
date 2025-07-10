import { expect, Page } from "playwright/test";
import { SignupElements } from "../../pageobject/autoexercise/signup.page";
//import { ydData } from '../../../resources/variables/yddata';

export class SignupController {
    private signupElements: SignupElements;

    constructor(private page: Page) {
        this.signupElements = new SignupElements(page);
    }
    // async clickSignup() {
    //     await this.signupElements.menuSignup().click();
    // }
    async inputName(name: string) {
        await this.signupElements.signupNameEmail("name").fill(name);
    }
    async inputEmail(email: string) {
        await this.signupElements.signupNameEmail("email").fill(email);
    }
    async clickSignupButton() {
        await this.signupElements.buttonSignup().click();
    }
    async chooseGender(gender: "Mr" | "Mrs") {
        await this.signupElements.radioGender(gender).check();      //kalau ga bs coba nanti ganti check jd click
    }
    async inputAccountName(name: string) {
        await this.signupElements.signupNameEmailPassword("name").fill(name);
    }
    async verifyInputAccountName(name: string) {
        await expect(this.signupElements.signupNameEmailPassword("name")).toHaveValue(name);
    }
    async verifyInputAccountEmail(email: string) {
        await expect(this.signupElements.signupNameEmailPassword("email")).toHaveValue(email);
    }
    async inputAccountPassword(password: string) {
        await this.signupElements.signupNameEmailPassword("password").fill(password);
    }

    async selectDob(date: 'days' | 'months' | 'years', value: string) {
        await this.signupElements.dropdownDob(date).selectOption(value);
    }

    async clickNewsletter() {
        await this.signupElements.checkboxNewsletterOptin("newsletter").check();
    }
    async clickOptin() {
        await this.signupElements.checkboxNewsletterOptin("optin").check();
    }

    async inputFirstName(name: string) {
        await this.signupElements.signupFirstLastName("first_name").fill(name);
    }
    async inputLastName(name: string) {
        await this.signupElements.signupFirstLastName("last_name").fill(name);
    }
    async inputCompany(company: string) {
        await this.signupElements.signupCompany().fill(company);
    }
    async inputAddress1(address: string) {
        await this.signupElements.signupAddress("address1").fill(address);
    }
    async inputAddress2(address: string) {
        await this.signupElements.signupAddress("address2").fill(address);
    }
    async selectCountry() {
        await this.signupElements.dropdownCountry().selectOption("New Zealand");
    }
    async inputState(state: string) {
        await this.signupElements.signupStateCity("state").fill(state);
    }
    async inputCity(city: string) {
        await this.signupElements.signupStateCity("city").fill(city);
    }

    async inputZipcode(zipcode: string) {
        await this.signupElements.signupZipcode().fill(zipcode);
    }
    async inputMobile(mobile: string) {
        await this.signupElements.signupMobileNumber().fill(mobile);
    }
    async clickButtonCreateAccount() {
        await this.signupElements.buttonCreateAccount().click();
    }
    async verifyHeaderText() {
        await expect(this.signupElements.headerAccountCreated()).toHaveText("Account Created!");
    }

    async verifyCongratulationsText() {
        await expect(this.signupElements.textCongratulation()).toHaveText("Congratulations! Your new account has been successfully created!");
    }
    async verifyAdvantageText() {
        await expect(this.signupElements.textAdvantage()).toContainText("You can now take advantage of member privileges to enhance your online shopping experience with us.");
    }

    async buttonContinue() {
        await this.signupElements.buttonContinue().click();
    }
    
}
