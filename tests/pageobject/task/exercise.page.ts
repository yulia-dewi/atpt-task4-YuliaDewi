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

    buttonSubmitById() {
        return this.page.locator('//button[@id="submit"]');
    }

    textEnterAccountInformation() {
        return this.page.getByText('Enter Account Information');
    }

    fieldDefault(field: string) {
        return this.page.locator(`//label[@for="${field}"]/following-sibling::input[@type="text"]`);
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

    productsButton() {
        return this.page.locator('//a[contains(text(),"Products")]');
    }

    headerProduct() {
        return this.page.locator('//h2[contains(text(),"Products")]')
    }

    productName(product: string) {
        return this.page.locator(`//div[contains(@class,"productinfo")]//p[text()="${product}"]`);
    }

    productPrice(product: string) {
        return this.page.locator(`//div[contains(@class,"productinfo")]//p[text()="${product}"]/preceding-sibling::h2`);
    }

    addToCart(product: string) {
        return this.page.locator(`//div[contains(@class,"productinfo")]//p[text()="${product}"]//following-sibling::a`);
    }

    modalAddtoCart() {
        return this.page.locator('//button[text()="Continue Shopping"]');
    }

    cartButton() {
        return this.page.locator('//a[contains(text(),"Cart")]');
    }

    headerCart() {
        return this.page.locator('//li[text()="Shopping Cart"]');
    }

    cartItems(index: number) {
        return this.page.locator(`//tbody/tr[${index}]//h4`);
    }

    cartTotalPrice(index: number) {
        return this.page.locator(`//tbody/tr[${index}]//p[@class="cart_total_price"]`);
    }

    cartProceed() {
        return this.page.locator('//a[text()="Proceed To Checkout"]');
    }

    headerCheckout() {
        return this.page.locator('//li[text()="Checkout"]');
    }

    checkoutTotalPrice() {
        return this.page.locator('//b[text()="Total Amount"]//ancestor::td/following-sibling::td/p[@class="cart_total_price"]');
    }

    buttonPlaceOrder() {
        return this.page.locator('//a[text()="Place Order"]');
    }

    headerPayment() {
        return this.page.locator('//li[text()="Payment"]');
    }

    paymentInput(field: string) {
        return this.page.locator(`//label[text()="${field}"]/following-sibling::input`);
    }

    paymentInputYear() {
        return this.page.locator(`//input[@name="expiry_year"]`);
    }
    
    downloadInvoiceButton() {
        return this.page.locator('//a[text()="Download Invoice"]');
    }
}