// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var special = "!@#$%^&*()"

  var password = ""
  var characters = ""
  
  var pwdLength = prompt("Between 8 and 128 how long would you like your password to be?")
  
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Your password must be a number between 8 and 128, try again.")
    pwdLength = prompt("Between 8 and 128 how long would you like your password to be?")
  }
  
  var wantsUpper = confirm("Do you want uppercase letters?")
  var wantsLower = confirm("Do you want lowercase letters?")
  var wantsNum = confirm("Do you want numbers?")
  var wantsSpecial = confirm("Do you want special characters?")

  while(!wantsUpper && !wantsLower && !wantsNum && !wantsSpecial) {
    alert("You must choose at least one character type.")
    wantsUpper = confirm("Do you want uppercase letters?")
    wantsLower = confirm("Do you want lowercase letters?")
    wantsNum = confirm("Do you want numbers?")
    wantsSpecial = confirm("Do you want special characters?")
  }

  if (wantsUpper) {
    characters += upper
  }
  if (wantsLower) {
    characters += lower
  }
  if (wantsNum) {
    characters += numbers
  }
  if (wantsSpecial) {
    characters += special
  }
  
  for (var i = 0; i < pwdLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
