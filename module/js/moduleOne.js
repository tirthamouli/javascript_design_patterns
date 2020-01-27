/**
 * This is a module - To get a number which is one greater than the last number
 */
var moduleOne = (function () {
    // Declare private variables and/or functions
    var num = 0;

    // Declare public variables and/or functions
    return {
        getNumber() {
            return num++
        }
    };
})();