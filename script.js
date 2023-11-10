// Secure Password Generator Script - Luis Llamas

// Function to prompt user for password criteria and generate password
function generatePassword() {
    // Initialize password variables
    var password = "";
    var passwordArray = [];

    // Prompt user for password length and validate input
    var passwordLength = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8 and 128 characters.");
        passwordLength = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
    }

    // Confirm password criteria with the user
    var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
    var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
    var includeNumbers = confirm("Would you like to include numbers in your password?");
    var includeSymbols = confirm("Would you like to include symbols in your password?");

    // Validate that at least one character type has been selected
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        alert("You must select at least one character type.");
        return "";
    }

    // Concatenate possible characters into passwordArray based on user's criteria
    if (includeLowercase) passwordArray.push("abcdefghijklmnopqrstuvwxyz");
    if (includeUppercase) passwordArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeNumbers) passwordArray.push("0123456789");
    if (includeSymbols) passwordArray.push("!@#$%^&*()_+-=[]{}");

    // Flatten the passwordArray and remove commas
    var possibleCharacters = passwordArray.join("");

    // Generate password with the specified length and criteria
    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    // Return the generated password
    return password;
}

// Event listener for the Generate Password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});
