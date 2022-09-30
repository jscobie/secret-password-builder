// Assignment Code
var generateBtn = document.querySelector("#generate");

// assign constants for possible password characters
const specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
const ucaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lcaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
    //NaN or not a number check, and alert of input not being a number at all
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
    
    if (isLowercase && isUppercase && isNumeric && isSpecial) {
    // 4 selected build possible character from all 4 lists
      var passwordCharacters = lcaseLetters.concat(ucaseLetters, numbers, specialCharacters);
    // 3 selected build possible character from 3 selected lists
    } else if (isLowercase && isUppercase && isNumeric) {
      var passwordCharacters = lcaseLetters.concat(ucaseLetters, numbers);
    } else if (isLowercase && isUppercase && isSpecial) {
      var passwordCharacters = lcaseLetters.concat(ucaseLetters, specialCharacters);
    } else if (isLowercase && isNumeric && isSpecial) {
      var passwordCharacters = lcaseLetters.concat(numbers, specialCharacters);
    } else if (isUppercase && isNumeric && isSpecial) {
      var passwordCharacters =ucaseLetters.concat(numbers, specialCharacters);
    // 2 selected - build possible character from 2 selected lists
    } else if (isLowercase && isUppercase) {
      var passwordCharacters = lcaseLetters.concat(ucaseLetters);
    } else if (isLowercase && isNumeric) {
      var passwordCharacters = lcaseLetters.concat(numbers);
    } else if (isLowercase && isSpecial) {
      var passwordCharacters = lcaseLetters.concat(specialCharacters);
    } else if (isUppercase && isNumeric) {
      var passwordCharacters = ucaseLetters.concat(numbers);
    } else if (isUppercase && isSpecial) {
      var passwordCharacters = ucaseLetters.concat(specialCharacters);
    } else if (isNumeric && isSpecial) {
      var passwordCharacters = numbers.concat(specialCharacters);
      // 1 selected - build possible characters from only the selected list
    } else if (isLowercase) {
      var passwordCharacters = lcaseLetters;
    } else if (isUppercase) {
      var passwordCharacters = ucaseLetters;
    } else if (isNumeric) {
      var passwordCharacters = numbers;
    } else if (isSpecial) {
    var passwordCharacters = specialCharacters;
    // 0 selected - show error
    } else {
      alert("You Selected all Cancel/No  Action Aborted")
      let password = "ERROR - NO PASSWORD GENERATED"
      return password;
    }
    // randomly select characters above built passwordCharacters which houses confirmed 4 type options
    for (var i = 0; i < passwordLength; i++) {
      if (i === 0) {
        // first run through we need to declare and then fill with the first random value passwordCharacters (built from the confirm of 4 types). 
        // we use Math.Floor/Math.Random and then multiply Math.random by total length of passwordCharacters (built from the confirm of 4 types)
        var buildPassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      } else {
        // since this else handles all of the for until complete we need to add to buildPassword created above to build the output buildPassword
        buildPassword = buildPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
    };
    
    // Now we have to set the value buildPassword (our built password) and return the password so it can be output on the screen in the box
    let password = buildPassword
    return password;
  }

}


 