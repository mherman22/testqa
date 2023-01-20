/**
 * 
 * @param testSuiteName 
 * @param callBackFunction 
 * should take a string testSuiteName and a callback function, 
 * and define a group of related test cases.
 */
export function describe(testSuiteName:string, callBackFunction: () => void) {
    console.log(`beginning test suite ${testSuiteName}`);
    try {
        callBackFunction();
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch (error:any) {
        console.error(`failed running test suite ${testSuiteName} on test case ${error.testCaseName} with error message ${error.message}`);
    }
}
