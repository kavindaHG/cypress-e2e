import { registerPage } from "../../pages/registerPage"
const registerObject = new registerPage();
import newUserTestData from "../../fixtures/newUserTestData.JSON";

describe('Test Automation', () => { 
    it('register page automation', () => {
        registerObject.openURL()
        registerObject.enterFirstName(newUserTestData.firstName)
        registerObject.enterLastName(newUserTestData.lastName)
        registerObject.enterEmail(newUserTestData.email)
        registerObject.enterTelephone(newUserTestData.telephone)
        registerObject.enterPassword(newUserTestData.password)
        registerObject.selectPolicyCheckbox()
        registerObject.clickContinueButton()
    })
})