// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var pwdLength = prompt("Between 8 and 128 how long would you like your password to be?")

  while (pwdLength < 8 || pwdLength > 128) {
    alert("Your password must be a number between 8 and 128, try again.")
    pwdLength = prompt("Between 8 and 128 how long would you like your password to be?")
  }

  console.log(pwdLength)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
