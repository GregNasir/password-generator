// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// List of characters available for password
const charChoice = {
  lowercaseChar: 'abcdefghijklmnopqrstuvwxyz',
  uppercaseChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numericChar: '0123456789',
  specialChar: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};



// parameters to generate password
function generatePassword() {

  var passwordLength = prompt("How many character in password? Must be between 8 and 128)");
  var lowercaseChar = confirm("Do you want to  include lowercase characters?");
  var uppercaseChar = confirm("Do you want to  include uppercase characters?");
  var specialChar = confirm("Do you want to  include special characters?");
  var numericChar = confirm("Do you want to  include numeric characters?");

  // empty string to store seclections
  var getChar = "";


  // selection of character options
  if (lowercaseChar) {
    getChar += charChoice.lowercaseChar;
  };

  if (uppercaseChar) {
    getChar += charChoice.uppercaseChar;
  };

  if (specialChar) {
    getChar += charChoice.specialChar;
  };

  if (numericChar) {
    getChar += charChoice.numericChar;
  };

  // checking length of password between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password length is invalid")
    var passwordLength = Number(prompt("Password length must be between 8 and 128"));
  
  };

  // confirming one selection has been made
  if (uppercaseChar + lowercaseChar + numericChar + specialChar === 0) {
    alert("Atleast one character type must be selected");
    return generatePassword();
  };

  // create random password
  var getRandomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    getRandomPassword += getChar[Math.floor(Math.random() * getChar.length)]
  };
  
    return getRandomPassword; 

};


// Write password to the #password input
function writePassword() {

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");


  return passwordText.value = password;

 

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


