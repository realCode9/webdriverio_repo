const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const commonFunctions = require('../../common/commonUtilities');
const loginData = require('../../resources/login-data.json')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(loginData.username, loginData.password);
        expect(await commonFunctions.isElementDisplayed(LoginPage.dashboard));
    })
})

