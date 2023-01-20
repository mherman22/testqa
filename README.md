## Basic JavaScript testing framework
This is a basic testing framework implemented for the following functions that are to be used;-
- **describe**: This function should take a string testSuiteName and a callback function, and define a group of related test cases.

- **it**: This function defines a single test case in a test suite and is called within a describe's callback func. It takes in a string testCaseName and its own callback func, which makes one or more calls to expect.

- **expect**: This function defines a single check in a test case and is called within an it's callback func. It takes in an arbitrary parameter actual and returns an object with the following three functions that are used to compare actual to other values:-
- **expect(actual).toExist()**: This function checks that actual is neither null nor undefined.
- **expect(actual).toBe(expected)**: This function checks that actual is strictly equal to expected.
- **expect(actual).toBeType(type)**: This function checks that actual is of the type `type`, which can be any string returned by the **typeof** operator.

## How to run this repository
- After cloning this repository, `cd` into the project repository and trigger `npm i` to install all the needed dependencies.

- Then trigger `npm start` to get the application running.