//Select button 
var generateBtn = document.querySelector("#generate");

// Making Function For Password 
function generatePassword() {
    console.log("Button has been used");



    //Setting Up Vars 

    var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var specChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
    // Empty Arrays
    
    var resultArray = [];
    var userInput = [];

    upperCase [1]

    //Setting up Prompts & confirms
    var userInputQ = prompt("How many Characters would you like you passcode? ");

    var lowerCaseQ = confirm("Do You Want Lower Case Letters?");

    var upperCaseQ = confirm("Would You Like Upper Case Letters?");

    var specCharQ = confirm("Would you like Spec Characters?");

    if (lowerCaseQ){
        resultArray = resultArray.concat(lowerCase);
    }

    if (upperCaseQ){
        resultArray = resultArray.concat(upperCase);
      
    }
      
    if (specCharQ){
        resultArray = resultArray.concat(specChar);
    }
    console.log(resultArray);


    for (var i = 0; i < userInputQ; i++) {
      
        userInput.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
      
    return userInput.join("") ;
}
      

//write password to to the input 
function writePassword(){
    var password = generatePassword ();
    var passwordText = document.querySelector("#password"); 

    passwordText.value = password;

}

// Add event Listener  To display in text box
generateBtn.addEventListener("click" , writePassword);