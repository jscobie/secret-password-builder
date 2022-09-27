// Assignment Code
var generateBtn = document.querySelector("#generate");

// assign constants for possible password characters
const specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
const ucaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lcaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //get user input - password length
  const passwordLength = prompt("Select Password Length (Between 8 and 128)");
  // make sure password is a number value and between 8 and 128
  if (isNaN(passwordLength)) {
    alert("Password length must be a number!");
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128!");
    return;
  } else {
    //remaining user input confirms
    //get user input - lowercase alpha
    const isLowercase = confirm("Include lowercase letters?");
    //get user input - uppercase alpha
    const isUppercase = confirm("Include uppercase letters?");
    //get user input - numeric
    const isNumeric = confirm("Include Numbers?");
    //get user input - special characters
    const isSpecial = confirm("Include Special Characters?");

    // console.log(isLowercase, isUppercase, isNumeric, isSpecial)
    let password = [isLowercase, isUppercase, isNumeric, isSpecial];
    return password;
  }

}


