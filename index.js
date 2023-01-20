"use strict";
exports.__esModule = true;
var expect_1 = require("./src/expect/expect");
var describe_1 = require("./src/describe/describe");
var it_1 = require("./src/it/it");
console.log();
console.log("<----------------------------- First Test----------------------------->");
console.log();
(0, describe_1.describe)('Passing Test Suite', function () {
    (0, it_1.it)('Passing Test Case #1', function () {
        (0, expect_1.expect)('foo').toExist();
        (0, expect_1.expect)(1 + 1).toBe(2);
    });
    (0, it_1.it)('Passing Test Case #2', function () {
        (0, expect_1.expect)({}).toBeType('object');
    });
});
console.log();
console.log("<----------------------------- Second Test----------------------------->");
console.log();
(0, describe_1.describe)('Failing Test Suite', function () {
    (0, it_1.it)('Passing Test Case', function () {
        (0, expect_1.expect)(0).toBe(0);
    });
    (0, it_1.it)('Failing Test Case', function () {
        (0, expect_1.expect)(true).toBe(true);
        (0, expect_1.expect)(true).toBe(false);
    });
    (0, it_1.it)('Unreachable Test Case', function () {
        (0, expect_1.expect)('foo').toBe('bar');
    });
});
console.log();
