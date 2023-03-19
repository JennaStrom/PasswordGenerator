// Assignment code here 
var characterLength = ;
var choiceArr = []

var specicalCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '<', '>', '?']
var numericCharacterArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var lowercaseCharacterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseCharacterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function generatePassword() {
  characterLength = parseInt(prompt("Please choose how many characters you want your password to be? Password should be between 8 and 128 characters."))

  if (isNaN(characterLength) || characterLength < 7 || characterLength > 127) {
    alert("The character length has to be a number between 8 - 128. Please try again.")
    return false;
}
  if (confirm("Please click the OK button if you want your password to include special characters.")){
    choiceArr = choiceArr.concat(specicalCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include numeric characters.")) {
    choiceArr = choiceArr.concat(numericCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include lowercase characters.")){
    choiceArr = choiceArr.concat(lowercaseCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include uppercase characters.")){
    choiceArr = choiceArr.concat(uppercaseCharacterArray)
  }
  return true
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
