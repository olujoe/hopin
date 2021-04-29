const {Selector} = require('testcafe');

exports.elements = {
    
    messageElement: function() {
        return Selector('#root').with({ boundTestRun: testController });
    },
    companyName: function(row) {
        return Selector(`tbody > tr:nth-child(${row}) > td:nth-child(1) > a`).with({ boundTestRun: testController });
    },
    companyDetails: function() {
        return Selector(`#root > div > div > div > div > p:nth-child(1) > b`).with({ boundTestRun: testController });
    },   
    backToTheListBtn: function() {
        return Selector('input[value="Back to the list"]').with({ boundTestRun: testController });
    },
    companyDetailsBroken: function() {
        return Selector(`body > div > div > div:nth-child(3) > div:nth-child(1)`).with({ boundTestRun: testController });
    }
}