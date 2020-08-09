// Assignment Code
function genPassword() {
  var generateBtn = document.querySelector("#generate");

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var number = "1234567890"
  var specialChar = "!@#$%^&*?="
  var combined = "";
  var finalPassword = "";


  var lengthOfPassword = prompt("How long do you want the password to be");
  
  if (parseInt(lengthOfPassword) >= 8  &&  parseInt(lengthOfPassword) <= 128){

    console.log(typeof (lengthOfPassword))
    var usesUpperCase = confirm("Do you want to use upper case?");
    var usesLowerCase = confirm("Do you want to use lower case?");
    var usesNumber = confirm("Do you want to use numbers?");
    var usesSpecialChar = confirm("Do you want to use special characters?");
  
    if (usesUpperCase){
        combined = combined + upperCase;
        console.log(combined)
    if (usesLowerCase)
          combined = combined + lowerCase;
          console.log(combined)
    if (usesNumber)
            combined = combined + number;
            console.log(combined)
    if (usesSpecialChar)
              combined = combined + specialChar;
              console.log(combined)
    }
    //[upperCase, lowerCase, number, specialChar]
    // Write password to the #password input
    //var
    for (var i = 0; i < parseInt(lengthOfPassword); i++) {
      // pick a random letter from combined
      var item = combined[Math.floor(Math.random() * parseInt(lengthOfPassword))];
      finalPassword = finalPassword + item;
      console.log(item);
    
  
    }
  
  
   var passwordText = document.querySelector("#password");
  
    passwordText.value = finalPassword;

  } else {
    genPassword();
  }

}

    // Add event listener to generate button
    //generateBtn.addEventListener("click", writePassword);
    document.getElementById("generate").addEventListener("click", function(){
     genPassword();
    });
