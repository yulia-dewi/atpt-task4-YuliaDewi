import { Page } from "@playwright/test";

export class SignupElements {
    constructor (private page : Page) {}

    menuSignup() {
        return this.page.getByRole('link', { name: 'Signup / Login' });
    }
    
    signupNameEmail(field: "name" | "email") {
        return this.page.locator(`//input[@data-qa="signup-${field}"]`) //input[@data-qa="signup-name"] //input[@data-qa="signup-email"]
    };

    buttonSignup() {
        return this.page.locator('//button[@data-qa="signup-button"]')  //button[text()="Signup"]
        //return this.page.getByRole('button', { name: 'Signup' }).click();
    };

    radioGender(gender: 'Mr' | 'Mrs') {
        return this.page.locator(`//input[@value="${gender}"]`);
    }

    signupNameEmailPassword(field: "name" | "email" | "password") {
        return this.page.locator(`//input[@data-qa="${field}"]`) //input[@data-qa="name"] //input[@data-qa="email"] //input[@data-qa="password"]
    };

    dropdownDob(date: 'days' | 'months' | 'years') {
        return this.page.locator(`#${date}`);
    }

    checkboxNewsletterOptin(name: "newsletter" | "optin") {
        return this.page.locator(`//input[@name="${name}"]`);   //input[@name="newsletter"] //input[@name="optin"] #newsletter #optin
    }

    signupFirstLastName(field: "first_name" | "last_name") {
        return this.page.locator(`#${field}`)             
    };

    signupCompany() {
        return this.page.locator('#company')             
    };

    signupAddress(field: "address1" | "address2") {
        return this.page.locator(`#${field}`)             
    };

    dropdownCountry() {
        return this.page.getByLabel('Country *');
    }

    signupStateCity(field: "state" | "city") {
        return this.page.locator(`#${field}`)             
    };

    signupZipcode() {
        return this.page.locator('#zipcode')             
    };

    signupMobileNumber() {
        return this.page.locator('#mobile_number')             
    };

    buttonCreateAccount() {
        return this.page.locator('//button[@data-qa="create-account"]');
    }

    headerAccountCreated() {
        return this.page.locator('//h2[@data-qa="account-created"]');   //b[text()="Account Created!"]
    }
    textCongratulation() {
        return this.page.locator('//p[text()="Congratulations! Your new account has been successfully created!"]');
    }
    textAdvantage() {
        return this.page.locator('//p[text()="You can now take advantage of member privileges to enhance your online shopping experience with us."]');
    }
    buttonContinue() {
        return this.page.locator('//a[@data-qa="continue-button"]');        //return this.page.getByRole('link', { name: 'Continue' })
    }
    //await expect(page.getByRole('textbox', { name: 'Name *', exact: true })).toBeVisible();

    // fieldUsernamePassword(field: string) {
    //     return this.page.locator(`//input[@type="${field}"]`)
    // };

    // buttonSubmit() {
    //     return this.page.locator('//input[@type="submit"]')
    // };

    // buttonLogin() {
    //     return this.page.getByRole('button', { name: 'LOGIN' })
    // }

    // textError() {
    //     return this.page.locator('//h3')
    // }

    // headerProduct() {
    //     return this.page.locator('//*[text()="Products"]')
    // }
}

// await page.getByRole('link', { name: 'Signup / Login' }).click();
// await page.getByRole('textbox', { name: 'Name' }).click();
// await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
// await page.getByRole('button', { name: 'Signup' }).click();
// await page.getByRole('radio', { name: 'Mrs.' }).check();
// await page.getByRole('textbox', { name: 'Password *' }).click();
// await page.locator('#days').selectOption('4');
// await page.locator('#months').selectOption('9');
// await page.locator('#years').selectOption('2000');
// await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
// await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
// await page.getByRole('textbox', { name: 'First name *' }).click();
// await page.getByRole('textbox', { name: 'Last name *' }).click();
// await page.getByRole('textbox', { name: 'Company', exact: true }).click();
// await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
// await page.getByRole('textbox', { name: 'Address 2' }).click();
// await page.getByLabel('Country *').selectOption('New Zealand');
// await page.getByRole('textbox', { name: 'State *' }).click();
// await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
// await page.locator('#zipcode').click();
// await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
// await page.getByRole('button', { name: 'Create Account' }).click();
// await expect(page.getByText('Account Created!')).toBeVisible();
// await expect(page.getByText('Congratulations! Your new')).toBeVisible();
// await expect(page.getByText('You can now take advantage of')).toBeVisible();
// await page.getByRole('link', { name: 'Continue' }).click();
// await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
// await expect(page.getByRole('link', { name: ' Delete Account' })).toBeVisible();