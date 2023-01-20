"use strict";
exports.__esModule = true;
exports.it = void 0;
var testSuiteName;
/**
 *
 * @param testCaseName
 * @param callBackFunction
 * defines a single test case in a test suite and is called within a describe's callback func.
 * It takes in a string testCaseName and its own callback func, which makes one or more
 *  calls to expect.
 */
function it(testCaseName, callBackFunction) {
    try {
        console.log("beginning test case ".concat(testCaseName));
        callBackFunction();
        console.log("successfully completed test case ".concat(testCaseName));
    }
    catch (error) {
        console.error("failed running test suite ".concat(testSuiteName, " on test case ").concat(testCaseName, " with error message ").concat(error.message));
        throw error;
    }
}
exports.it = it;
