"use strict";
exports.__esModule = true;
exports.expect = void 0;
/**
 *
 * @param actual
 * @returns
 * defines a single check in a test case and is called within an it's callback func.
 * It takes in an arbitrary parameter actual and returns an object with the following
 * three functions that are used to compare actual to other values:
 */
function expect(actual) {
    return {
        /**
         * This function checks that actual is neither null nor undefined.
         */
        toExist: function () {
            if (actual === null || actual === undefined) {
                throw new Error("expected value to exist but got ".concat(JSON.stringify(actual)));
            }
        },
        /**
         *
         * @param expected This function checks that actual is strictly equal to expected.
         */
        toBe: function (expected) {
            if (actual !== expected) {
                throw new Error("expected ".concat(JSON.stringify(actual), " to be ").concat(JSON.stringify(expected)));
            }
        },
        /**
         *
         * @param type This function checks that actual is of the type `type`,
         * which can be any string returned by the typeof operator.
         */
        toBeType: function (type) {
            if (typeof actual !== type) {
                throw new Error("expected ".concat(JSON.stringify(actual), " to be of type ").concat(type, " but got ").concat(typeof actual));
            }
        }
    };
}
exports.expect = expect;
