export class registerPage{
    webLocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary',
    }

    openURL() {
        cy.visit(Cypress.env('baseUrl'));
    }

    enterFirstName(firstNameValue) {
        cy.get(this.webLocators.firstName).type(firstNameValue);
    }

    enterLastName(lastNameValue) {
        cy.get(this.webLocators.lastName).type(lastNameValue);
    }

    enterEmail(emailValue) {
        cy.get(this.webLocators.email).type(emailValue);
    }

    enterTelephone(telephoneValue) {
        cy.get(this.webLocators.telephone).type(telephoneValue);
    }

    enterPassword(passwordValue) {
        cy.get(this.webLocators.password).type(passwordValue);
        cy.get(this.webLocators.confirmPassword).type(passwordValue)
    }

    enterFirstName(firstNameValue) {
        cy.get(this.webLocators.firstName).type(firstNameValue);
    }

    selectPolicyCheckbox() {
        cy.get(this.webLocators.policyCheckbox).check();
    }

    clickContinueButton() {
        cy.get(this.webLocators.continueButton).click();
    }
}