// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const charChoice = {
  lowercaseChar: 'abcdefghijklmnopqrstuvwxyz',
  uppercaseChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numericChar: '0123456789',
  specialChar: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// const charChoice = {
//    uppercaseChar: "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z",
//    lowercaseChar: "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//    specialChar: "!","@","#","$","%","^","&","*","()","?",".","<","\",">","|",'=',"+",':',';',",",'[',"-",'_",
//    numericChar: "0","1","2","3","4","5","6","7","8","9";


  
// };
// const multiSelect =[];


// function generatePasswordOptions () { 
//   uppercaseChar || lowercaseChar || specialChar || numericChar;
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

// function getRandomPassword() {
//   const randomIndex = Math.floor(Math.random() * Arr.length);
//   const randomChoice = arr[randomIndex];

//   return randomChoice;
// }



function generatePassword() {

  var passwordLength = prompt("How many character in password? Must be between 8 and 128)");
  
  
  
  

  var getChar = "";

  


  // var options = generatePasswordOptions();
  // let result = [];
  
  // var altChar = [];
  
  var lowercaseChar = confirm("Do you want to  include lowercase characters?");
  if (lowercaseChar) {
    // charChoice.push(charChoice(lowercaseChar));
    getChar += charChoice.lowercaseChar;
  };

  var uppercaseChar = confirm("Do you want to  include uppercase characters?");
  if (uppercaseChar) {
    getChar += charChoice.uppercaseChar;
    // altChar = altChar.concat(uppercaseChar);
    // console.log(randomChar);
    // console.log(altChar);
  };

  var specialChar = confirm("Do you want to  include special characters?");
  if (specialChar) {
    getChar += charChoice.specialChar;
    // altChar = altChar.concat(specialChar);
  };

  var numericChar = confirm("Do you want to  include numeric characters?");
  if (numericChar) {
    getChar += charChoice.numericChar;
    // altChar = altChar.concat(numericChar);
  };

  // checking password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password length is invalid")
    var passwordLength = Number(prompt("Password length must be between 8 and 128"));
  
  };

  if (uppercaseChar + lowercaseChar + numericChar + specialChar === 0) {
    alert("Atleast one character type must be selected");
    return generatePassword();
  };

  // function getRandomPassword(getChar){
  //   return getChar[Math.floor(Math.random() * getChar.length)];
  // }

  // var password = "";
  // let getRandomPassword = "";

  // for (let i = 0; i < passwordLength; i++) {
  //   getRandomPassword.concat(getChar[Math.floor(Math.random() * getChar.length)])
  //  };

  //  return getRandomPassword;

  //  // while there aren't enough characters
  //  while(getRandomPassword.length < passwordLength) {
  //   // choose a random char from charInfo
  //   getRandomPassword.push(getChar(passInfo));
  // };

  // function getRandomPassword(fromString){
  //   return fromString[Math.floor(Math.random() * fromString.length)];
  // }

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getChar[Math.floor(Math.random() * getChar.length)]
  };
  

  // for(var i = 0; i < options.length; i++) {
  //   var altChar = getRandomPassword(altChar);
  // }

  // for (var i = 0; i < options.length; i++) {
  //   result [i] = randomChar[i];
  // }
  
    return password;

   
    
   
    
    // return getChar.join("");

};

// console.log(generatePassword());

// Write password to the #password input
function writePassword() {

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");


  return passwordText.value = password;

 

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


