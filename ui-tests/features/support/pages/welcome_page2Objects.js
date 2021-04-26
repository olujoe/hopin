const {Selector} = require('testcafe');

/*
Create and export a module with name "elements". This module contains functions.
Each function is returning a Selector for a particular web element and bind to testController.
This module can be imported and called from Step Definitions to access the web elements.
*/

exports.elements = {
    
    messageElement: function() {
        return Selector('#root').with({ boundTestRun: testController });
    }
}