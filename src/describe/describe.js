"use strict";
exports.__esModule = true;
exports.describe = void 0;
/**
 *
 * @param testSuiteName
 * @param callBackFunction
 * should take a string testSuiteName and a callback function,
 * and define a group of related test cases.
 */
function describe(testSuiteName, callBackFunction) {
    console.log("beginning test suite ".concat(testSuiteName));
    try {
        callBackFunction();
        console.log("successfully completed test suite ".concat(testSuiteName));
    }
    catch (error) {
        console.error("failed running test suite ".concat(testSuiteName, " on test case ").concat(error.testCaseName, " with error message ").concat(error.message));
    }
}
exports.describe = describe;
