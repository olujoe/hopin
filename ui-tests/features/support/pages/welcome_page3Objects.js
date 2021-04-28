const {Selector} = require('testcafe');

exports.elements = {
    
    messageElement: function() {
        return Selector('#root').with({ boundTestRun: testController });
    },
    backToTheListBtn: function() {
        return Selector('input[value="Back to the list"]').with({ boundTestRun: testController });
    }
}