/**
 * 
 * @param actual 
 * @returns 
 * defines a single check in a test case and is called within an it's callback func. 
 * It takes in an arbitrary parameter actual and returns an object with the following 
 * three functions that are used to compare actual to other values:
 */
export function expect(actual:any) {
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
        toBe(expected:any) {
            if (actual !== expected) {
                throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
            }
        },
        /**
         * 
         * @param type This function checks that actual is of the type `type`, 
         * which can be any string returned by the typeof operator.
         */
        toBeType(type:string) {
            if (typeof actual !== type) {
                throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${typeof actual}`);
            }
        },
    };
}