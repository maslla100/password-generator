// Secure Password Generator Script - Luis Llamas

// Function to prompt user for password criteria and generate password
function generatePassword() {
    var passwordInput = document.querySelector("#promptInput");
    var currentLength = passwordInput.value;
    var passwordLength;

    // Check if the user has inputted the password length
    if (!currentLength) {
        alert("Please input the password length to get started.");
        return "";
    } else {
        // Ask if the user wants to reuse the existing length
        var reuseLength = confirm("Do you want to reuse the current password length (" + currentLength + " characters)?");

        if (reuseLength) {
            passwordLength = parseInt(currentLength);
        } else {
            passwordLength = parseInt(prompt("Enter the new password length (8-128 characters):"));
            if (!isValidLength(passwordLength)) {
                displayErrorMessage("Password length must be between 8 and 128 characters.");
                return "";
            }
        }
    }

    var password = "";
    var passwordArray = [];

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

// Helper function to validate password length
function isValidLength(length) {
    return !isNaN(length) && length >= 8 && length <= 128;
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
        alert("No password to copy.");
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyToClipboard);

var darkModeBtn = document.querySelector("#darkModeToggle");
darkModeBtn.addEventListener("click", toggleDarkMode);

var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetApplication);

// Function to reset the application and provide feedback
function resetApplication() {
    var passwordInput = document.querySelector("#promptInput");
    var passwordText = document.querySelector("#password");
    var messageBox = document.querySelector("#passwordLengthMsg");

    if (passwordInput.value === '' && passwordText.value === '') {
        alert("Nothing to reset. Please input your password length and generate a password first.");
    } else {
        passwordInput.value = '';
        passwordText.value = '';
        messageBox.textContent = 'The application has been reset.';
        setTimeout(function () { messageBox.textContent = ''; }, 3000);
    }
}
