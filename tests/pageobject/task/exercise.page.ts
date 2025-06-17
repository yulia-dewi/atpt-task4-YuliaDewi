import { Page } from "@playwright/test";

export class ExercisePage {
    constructor(private page: Page) { }

    websiteLogo() {
        return this.page.locator('//img[@alt="Website for automation practice"]');
    }

    signUpOrLoginButton() {
        return this.page.locator('//a[contains(text(),"Signup") or contains(text(),"Login")]');
    }

    textNewUserSignUp() {
        return this.page.locator('//h2[text()="New User Signup!"]');
    }

    fieldSignup(field: "name" | "email") {
        return this.page.locator(`//input[@data-qa="signup-${field}"]`)
    }

    buttonSubmit(text?: string) {
        if (text) {
            return this.page.locator(`//button[@type="submit" and text()="${text}"]`);
        }

        return this.page.locator('//button[@type="submit"]');
    }

    textEnterAccountInformation() {
        return this.page.getByText('Enter Account Information');
    }

    checkboxGender(gender: 'Mr' | 'Mrs') {
        return this.page.locator(`//input[@value="${gender}"]`);
    }

    dataField(field: string) {
        return this.page.locator(`(//label[contains(text(),"${field}")])[1]/following-sibling::input`);
    }

    dropdownCalendar(date: 'days' | 'months' | 'years') {
        return this.page.locator(`#${date}`);
    }

    dropdownCountry() {
        return this.page.getByLabel('Country *');
    }

    textResult() {
        return this.page.locator('//h2[@class="title text-center"]/b');
    }

    continueButton() {
        return this.page.locator('//a[text()="Continue"]');
    }

    headerMenu() {
        return this.page.locator('#header');
    }

    deleteAccountButton() {
        return this.page.locator('//a[contains(text(),"Delete")]');
    }

    slideCarousel() {
        return this.page.locator('(//div[@class="carousel-inner"])[1]');
    }
}