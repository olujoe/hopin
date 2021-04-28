/*
1. Import module from newly created page object file.
2. Import the required keywords from Cucumber.
3. Import the Selector from TestCafe.
*/
const testPlanPage1       = require('../support/pages/welcome_page1Objects.js');
const testPlanPage2       = require('../support/pages/welcome_page2Objects.js');
const {Given, When, Then} = require('cucumber');
const { Selector }        = require('testcafe');
const expect              = require('chai').expect;
const assert              = require('assert');
const fs                  = require('fs');



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

// Then('A pop up window appears with {string} message', function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });

// Then('I display any errors in the tables', function() {
//     const table         = Selector('table');
//     const dataRows      = table.find('tbody > tr');
//     const dataRowCount  = dataRows.count;

//     for (let i = 0; i < dataRowCount; i++) {
//         const currentRow   = dataRows.nth(i);
//         const fullNameCell1 = currentRow.child('td').nth(0);
//         const fullNameCell2 = currentRow.child('td').nth(1);
//         const fullNameCell3 = currentRow.child('td').nth(2);
        
//         if (  expect(parseInt(fullNameCell2.textContent)) <= 100 )
//             try {
//                  expect(fullNameCell3.textContent).contains('Small');
//                 throw err
//             } catch (err) {
//                 console.log(err)
//             } 
//         else if (  expect(parseInt(fullNameCell2.textContent)) > 10 && expect(parseInt(fullNameCell2.textContent)) < 1000 )
//             try {
//                  expect(fullNameCell3.textContent).contains('Medium');
//                 throw err
//             } catch (err) {
//                 console.log(err)
//             }
//         else (  expect(parseInt(fullNameCell2.textContent)) > 1000 )
//             try {
//                  expect(fullNameCell3.textContent).contains('Big');
//                 throw err
//             } catch (err) {
//                 console.log(err)
//             }  
//     } 
// });

Then('I display any errors in the tables', async function() {
    const table         = Selector('table').with({ boundTestRun: testController });
    const dataRows      = table.find('tbody > tr');
    const dataRowCount  = await dataRows.count;
 
    for (let i = 0; i < dataRowCount; i++) {
        const currentRow   = dataRows.nth(i);
        // const fullNameCell1 = currentRow.child('td').nth(0);
        const fullNameCell2 = currentRow.child('td').nth(1);
        const fullNameCell3 = currentRow.child('td').nth(2);
        
        if ( (parseInt(await fullNameCell2.textContent)) <= 100 )
            try {
                    console.log("Test1 Small! "+"check "+ i);
                    console.log("fullname2: "+parseInt(await fullNameCell2)); 
                    console.log("fullname3: "+(await fullNameCell3.textContent)); 
                    expect(await fullNameCell3.textContent).equals('Small');
                    throw err
                } catch (err) {
                    console.log(err)
            } 
        
        else if ( (parseInt(await fullNameCell2.textContent)) > 10 && (parseInt(await fullNameCell2.textContent)) < 1000 )
            try {
                    console.log("Test2 Medium! "+"check "+ i);
                    console.log("fullname2: "+parseInt(await fullNameCell2)); 
                    console.log("fullname3: "+(await fullNameCell3.textContent)); 
                    expect(await fullNameCell3.textContent).equals('Medium');
                    throw err
                } catch (err) {
                    console.log(err)
            }
        
        else ( (parseInt(await fullNameCell2.textContent)) > 1000 )
            try {
                console.log("Test3 Big! "+"check "+ i);
                console.log("fullname2: "+parseInt(await fullNameCell2)); 
                console.log("fullname3: "+(await fullNameCell3.textContent)); 
                expect(await fullNameCell3.textContent).equals('Big');
                throw err
            } catch (err) {
                console.log(err)
        }  
            
    } 
});



Then('I can view Customer Details from the list', function () {
    console.log("\nWrite code here for - I can view Customer Details from the list");
    return;
});

Then('I can return to the list page', function () {
    console.log("\nWrite code here for - I can return to the list page");
    return;
});