// Assignment code here 
var characterLength = []
var choiceArr = []
//arrays that hold the available characters for the password
var specicalCharacterArray = '!@#$%^&*()=+-_?><'.split ('')
var numericCharacterArray = '1234567890'.split ('')
var lowercaseCharacterArray = 'abcdefghijklmnopqrstuvwxyz'.split ('')
var uppercaseCharacterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split ('')

function getPrompts() {
  choiceArr = []
  characterLength = parseInt(prompt("Please choose how many characters you want your password to be? Password should be between 8 and 128 characters."))
//all the prompts and options you can choose for your password options
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("The character length has to be a number between 8 - 128. Please try again.")
    return false;
  }
  if (confirm("Please click the OK button if you want your password to include special characters.")) {
    choiceArr = choiceArr.concat(specicalCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include numeric characters.")) {
    choiceArr = choiceArr.concat(numericCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include lowercase characters.")) {
    choiceArr = choiceArr.concat(lowercaseCharacterArray)
  }
  if (confirm("Please click the OK button if you want your password to include uppercase characters.")) {
    choiceArr = choiceArr.concat(uppercaseCharacterArray)
  }
  return true
}
//for loop to generate the randomness
function generatePassword() {
  var password = ""
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex]
  }
  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts()

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  else {
    passwordText.value = "Something was entered wrong, please try again."
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
