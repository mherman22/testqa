let testSuiteName:string;

/**
 * 
 * @param testCaseName 
 * @param callBackFunction 
 * defines a single test case in a test suite and is called within a describe's callback func. 
 * It takes in a string testCaseName and its own callback func, which makes one or more
 *  calls to expect.
 */
export function it(testCaseName: string, callBackFunction:Function) {
    try {
        console.log(`beginning test case ${testCaseName}`);
        callBackFunction();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch (error:any) {
        console.error(`failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${error.message}`);
        throw error;
    }
}
