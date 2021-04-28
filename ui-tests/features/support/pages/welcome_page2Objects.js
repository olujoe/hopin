const {Selector} = require('testcafe');

exports.elements = {
    
    messageElement: function() {
        return Selector('#root').with({ boundTestRun: testController });
    }
}