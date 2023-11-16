// Secure Password Generator Script - Luis Llamas

// Function to prompt user for password criteria and generate password
function generatePassword() {
    var password = "";
    var passwordArray = [];

    // Get password length from promptInput and validate input
    var passwordLength = parseInt(document.querySelector("#promptInput").value);
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        displayErrorMessage("Password length must be between 8 and 128 characters.");
        return "";
    }

    // Confirm password criteria with the user
    var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
    var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
    var includeNumbers = confirm("Would you like to include numbers in your password?");
    var includeSymbols = confirm("Would you like to include symbols in your password?");

    // Validate that at least one character type has been selected
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        displayErrorMessage("You must select at least one character type.");
        return "";
    }

    // Concatenate possible characters into passwordArray based on user's criteria
    if (includeLowercase) passwordArray.push("abcdefghijklmnopqrstuvwxyz");
    if (includeUppercase) passwordArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeNumbers) passwordArray.push("0123456789");
    if (includeSymbols) passwordArray.push("!@#$%^&*()_+-=[]{}");

    var possibleCharacters = passwordArray.join("");

    // Generate password
    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    // Display the password length message
    displayPasswordLengthMsg(passwordLength);

    return password;
}

// Function to display error messages on the webpage
function displayErrorMessage(message) {
    alert(message); // Placeholder for your implementation
}

// Function to display password length message
function displayPasswordLengthMsg(length) {
    var message = length > 0 ? "A " + length + "-character password has been generated." : "";
    document.querySelector("#passwordLengthMsg").textContent = message;
}

// Function to copy password to clipboard
function copyToClipboard() {
    var password = document.querySelector("#password").value;
    if (password) {
        var passwordField = document.querySelector("#password");
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy."); // Message when there is no password
    }
}


// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener for the Generate Password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});

// Event listener for the Copy Password button
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyToClipboard);

// Event listener for the Dark Mode Toggle button
var darkModeBtn = document.querySelector("#darkModeToggle");
darkModeBtn.addEventListener("click", toggleDarkMode);

// Function to reset the application
function resetApplication() {
    // Clear the password input field
    document.querySelector("#promptInput").value = '';

    // Clear the generated password field
    var passwordText = document.querySelector("#password");
    passwordText.value = '';

    // Clear any displayed messages
    document.querySelector("#passwordLengthMsg").textContent = '';
}

// Event listener for the Reset button
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetApplication);

// Function to reset the application and provide feedback
function resetApplication() {
    var passwordInput = document.querySelector("#promptInput");
    var passwordText = document.querySelector("#password");
    var messageBox = document.querySelector("#passwordLengthMsg");

    // Check if there's anything to reset
    if (passwordInput.value === '' && passwordText.value === '') {
        alert("Nothing to reset. Please input your password length and generate a password first.");
    } else {
        // Clear the password input field
        passwordInput.value = '';

        // Clear the generated password field
        passwordText.value = '';

        // Clear any displayed messages and show reset confirmation
        messageBox.textContent = 'The application has been reset.';

        // Optional: Clear the reset confirmation message after a delay
        setTimeout(function () {
            messageBox.textContent = '';
        }, 3000); // Clears the message after 3 seconds
    }
}


