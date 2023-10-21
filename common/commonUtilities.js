class CommonUtilities {
    async isElementDisplayed(element) {
        try {
            return await element.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new CommonUtilities();