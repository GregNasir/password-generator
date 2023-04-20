// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

const uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
const lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
const specialChar ="!@#$%^&*()?.<\>|=+:;,[-_]";
const numeric ="0123456789";
// const multiSelect =[];

// const passwordLength = Number(prompt("How many character in password? Must be between 8 and 128)"));

// const passwordCharType = confirm("Do you want to  include lowercase, uppercase, numeric, and/or special characters?");




  // function getRandom(arr) {
  //   var randomIndex = Math.floor(Match.random () * arr.length);
  //   var randomElement = arr(randomeInex)
  // }

// GIVEN I need a new, secure password
// !WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



function generatePassword() {
  console.log("hey! generate password!");

  return "generated password!";

};



// Write password to the #password input
function writePassword() {

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  //   // checking password length
  // if (passwordLength < 8 || passwordLength > 128) {
  //   alert("Your password length is invalid")
  //   const passwordLength = Number(prompt("Password length must be between 8 and 128"));
  
  // } else {
  //   const passwordLength = Number(prompt("Password length must be between 8 and 128"));
  
  // };
  //   //var keyLength = prompt("Password must be between 8 and 128 characters in length.");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
