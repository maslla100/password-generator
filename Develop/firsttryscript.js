/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+-=[]{}";
var password = "";
var passwordArray = [];
var passwordLength = 0;
var passwordLengthInt = 0;
var passwordLowercase = false;
var passwordUppercase = false;
var passwordNumbers = false;
var passwordSymbols = false;
var passwordText = document.querySelector("#password");


function generatePassword() {
    passwordLength = prompt("How long would you like your password to be? (8-128)");
    passwordLengthInt = parseInt(passwordLength);
    if (passwordLengthInt < 8 || passwordLengthInt > 128) {
        alert("You're not paying attention!!!  Password length must be between 8 and 128 characters.");
        return;
    }
    passwordLowercase = confirm("Would you like lowercase letters in your password?");
    passwordUppercase = confirm("Would you like uppercase letters in your password?");
    passwordNumbers = confirm("Would you like numbers in your password?");
    passwordSymbols = confirm("Would you like symbols in your password?");
    if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSymbols) {
        alert("You must select at least one character type.");
        return;
    }
    if (passwordLowercase) {
        passwordArray = passwordArray.concat(lowercase.split(""));
    }
    if (passwordUppercase) {
        passwordArray = passwordArray.concat(uppercase.split(""));
    }
    if (passwordNumbers) {
        passwordArray = passwordArray.concat(numbers.split(""));
    }

    if (passwordSymbols) {
        passwordArray = passwordArray.concat(symbols.split(""));
    }
    for (var i = 0; i < passwordLengthInt; i++) {
        password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }
    return password;

}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// var passwordLength = prompt("How long would you like your password to be? (8-128)");

// var passwordLengthInt = parseInt(passwordLength);

// var passwordLowercase = confirm("Would you like lowercase letters in your password?");










