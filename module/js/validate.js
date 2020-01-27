/**
 * This is a revealing module
 */
var validateModule = (function () {
    // Declare private variables and/or functions
    var patterns = {
        name: /^[a-z]{3,}$/i,
        email: /^([a-z0-9\.-_%+]+)@([a-z0-9-]+)\.([a-z]{2,10})(\.[a-z]{2,5})?$/i,
        password: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/
    }

    /**
     * Validates the given element
     * @param {Object} element 
     * @param {Boolean} warnOrError 
     */
    var validate = function (element, warnOrError) {
        // Custom check for different elements
        if (element.name === "firstName" || element.name === "lastName") {
            // For firstName and lastName match with patterns name
            var match = patterns.name.test(element.value);
        } else if (element.name !== "repeatPassword") {
            // For email and password match with corresponding pattern
            var match = patterns[element.name].test(element.value);
        } else {
            // For repeat password check if the repeat password matches the original password
            var origPassword = allElements.password.value;
            var match = origPassword === element.value;
        }

        // If match is not found, warn the user or report error when submitting
        element.parentElement.classList.remove("error");
        element.parentElement.classList.remove("warn");
        if (!match) {
            element.parentElement.classList.add(warnOrError);
        };

        // Returns true if everything is matched and false if something doesn't match
        return match === true ? 1 : 0;
    }

    // Declare public variables and/or functions
    return {
        validate: validate
    }
})();