import { enable } from "colors";
enable();

/**
 * 
 * @param testSuiteName 
 * @param func 
 * should take a string testSuiteName and a callback function, 
 * and define a group of related test cases.
 */
export function describe(testSuiteName: string, func: () => void) {
    console.log(`${` OK `.bgGreen.black} beginning test suite ${testSuiteName}`);
    try {
        func();
        console.log(`${` OK `.bgGreen.black} successfully completed test suite ${testSuiteName}`);
    } catch (error: any) {
        const errorMessage: string = error.message;
        console.error(`${` FAILED `.bgRed.black} failed running test suite ${testSuiteName} on test case ${error.testCaseName} with error message ${errorMessage}`);
        console.error(error.stack.red);
    }
}

/**
 * 
 * @param testCaseName 
 * @param func 
 * defines a single test case in a test suite and is called within a describe's callback func. 
 * It takes in a string testCaseName and its own callback func, which makes one or more
 *  calls to expect.
 */
export function it(testCaseName: string, func: () => void) {
    try {
        console.log(`${` OK `.bgGreen.black} beginning test case ${testCaseName}`);
        func();
        console.log(`${` OK `.bgGreen.black} successfully completed test case ${testCaseName}`);
    } catch (error: any) {
        // const errorMessage: string = error.message;
        error.testCaseName = testCaseName;
        // console.error(error.stack);
        throw error;
    }
}

/**
 * 
 * @param actual 
 * @returns 
 * defines a single check in a test case and is called within an it's callback func. 
 * It takes in an arbitrary parameter actual and returns an object with the following 
 * three functions that are used to compare actual to other values:
 */
export function expect(actual: any) {
    return {
        /**
         * This function checks that actual is neither null nor undefined.
         */
        toExist() {
            if (actual === null || actual === undefined) {
                throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`);
            }
        },
        /**
         * 
         * @param expected This function checks that actual is strictly equal to expected.
         */
        toBe(expected: any) {
            if (actual !== expected) {
                throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
            }
        },
        /**
         * 
         * @param type This function checks that actual is of the type `type`, 
         * which can be any string returned by the typeof operator.
         */
        toBeType(type: string) {
            if (typeof actual !== type) {
                throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${typeof actual}`);
            }
        },
    };
}