/**
 * All the elemets that are required
 */
var allElements = {
    registerForm: document.getElementById("registerForm"), // The full registration from
    firstName: this.registerForm.firstName, // First name
    lastName: this.registerForm.lastName, // Last name
    email: this.registerForm.email, // Email
    password: this.registerForm.password, // Password
    repeatPassword: this.registerForm.repeatPassword, // Repeat password
    allInputs: [this.firstName, this.lastName, this.email, this.password, this.repeatPassword] // All the inputs
};