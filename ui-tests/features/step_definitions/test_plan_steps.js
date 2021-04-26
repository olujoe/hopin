/*
1. Import module from newly created page object file.
2. Import the required keywords from Cucumber.
3. Import the Selector from TestCafe.
*/
const testPlanPage1 = require('../support/pages/welcome_page1Objects.js');
const testPlanPage2 = require('../support/pages/welcome_page2Objects.js');
const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

Given('user navigates to the Customer App page', async function () {
    await testController.navigateTo('http://localhost:3000');
});

When('user enters {string} in the name field', async function (string) {
    const nameField = testPlanPage1.elements.nameTxtBox();
    await testController.typeText(nameField, string);
});

When('user clicks on Submit button', async function () {
    const submitButton = testPlanPage1.elements.submitBtn();  
    await testController.click(submitButton);
});

Then('Welcome to Customer App page with customer {string} appears', async function (string) {
    const messageElement = testPlanPage2.elements.messageElement();
    await testController.expect(messageElement.innerText).contains(string);
});