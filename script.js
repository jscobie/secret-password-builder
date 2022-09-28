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
      var passwordCharacters = [lcaseLetters] + [ucaseLetters];
    } else if (isLowercase && isNumeric) {
      var passwordCharacters = [lcaseLetters] + [numbers];
    } else if (isLowercase && isSpecial) {
      var passwordCharacters = [lcaseLetters] + [specialCharacters];
    } else if (isUppercase && isNumeric) {
      var passwordCharacters = [ucaseLetters] + [numbers];
    } else if (isUppercase && isSpecial) {
      var passwordCharacters = [ucaseLetters] + [specialCharacters];
    } else if (isLowercase && isUppercase && isNumeric && isSpecial) {
      var passwordCharacters = [lcaseLetters] + [ucaseLetters] + [numbers] + [specialCharacters];
    } else if (isNumeric && isSpecial) {
      var passwordCharacters = [numbers] + [specialCharacters];
      // 1 selected - build possible characters from only the selected list
    } else if (isLowercase) {
      var passwordCharacters =[lcaseLetters];
    } else if (isUppercase) {
      var passwordCharacters =[ucaseLetters];
    } else if (isNumeric) {
      var passwordCharacters =[numbers];
    } else if (isSpecial) {
    var passwordCharacters =[specialCharacters];
    // 0 selected - show error
    } else {
      alert("You Selected all Cancel/No  Action Aborted")
      let password = "ERROR - NO PASSWORD GENERATED"
      return password;
    }


    // shuffle array using Fisher-Yates aka Knuth Shuffle CREDIT: https://bost.ocks.org/mike/shuffle/
    // function shuffle(array) {
    //   let currentIndex = array.length,  randomIndex;
    
    //   // While there remain elements to shuffle.
    //   while (currentIndex != 0) {
    
    //     // Pick a remaining element.
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex--;
    
    //     // And swap it with the current element.
    //     [array[currentIndex], array[randomIndex]] = [
    //       array[randomIndex], array[currentIndex]];
    //   }
    
    //   return array;
    // }
    
    // Used like so
    // var arr = [2, 11, 37, 42];
    // shuffle(arr);
    // console.log(arr);

    // TODO:
    // randomly select characters from password characters
    
    let password = passwordCharacters
    return password;
  }

}


 