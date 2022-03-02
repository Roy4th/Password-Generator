// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // prompt questions to create password
  var length = prompt("How long would you like your password? (must be 8-128 characters)");
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var symbol = confirm("Would you like to include symbols?");
  var result = "";

  // add letters per criteria
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*()_+";
  var possibleTypes ="";

  if ((length >=8 && length <=128) && (lowerCase || upperCase || numeric || special)) {

    if (lowerCase) {
      possibleTypes = possibleTypes + lowerCaseLetters;
    }
    if (upperCase) {
      possibleTypes = possibleTypes + upperCaseLetters;
    }
    if (numeric) {
      possibleTypes = possibleTypes + numbers;
    }
    if (symbol) {
      possibleTypes = possibleTypes + symbol;
    }
    for (var i=0; i < length; i++){
      var random = Math.floor(Math.random() * possibleTypes.length)
      result = result + possibleTypes.charAt(random);
    }
    return result;
  }
  else{
    alert("You must include length between 8-128 and select one criteria at least.")
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
