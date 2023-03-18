// Assignment code here 
function generatePassword() {
  prompt("Please choose how many characters you want your password to be? Password should be between 8 and 128 characters.")
  confirm("Please click the OK button if you want your password to include special characters.")
  confirm("Please click the OK button if you want your password to include numeric characters.")
  confirm("Please click the OK button if you want your password to include lowercase characters.")
  confirm("Please click the OK button if you want your password to include uppercase characters.")
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
