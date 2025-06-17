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
}