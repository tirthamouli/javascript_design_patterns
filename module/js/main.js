(function () {
    // Blur event listener for all the inputs
    allElements.allInputs.forEach(function (input) {
        input.addEventListener("blur", function (event) {
            validateModule.validate(event.target, "warn");
        });
    });

    // Registration form event listener
    allElements.registerForm.addEventListener("submit", function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // Matched default
        var matched = 1;

        // Validate all the fields again
        allElements.allInputs.forEach(function (input) {
            matched *= validateModule.validate(input, "error");
        });

        // If it is valid, submit the form
        if (matched) {
            event.target.submit();
        }
    });
})()