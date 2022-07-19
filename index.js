//Select button 
var generateBtn = document.querySelector("#generate");

var  numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var  upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userInput = [];


function generatePassword() {
    console.log("Button has been used");

    //Setting up Prompts & confirms
    var userInputQ = prompt("How many Characters would you like you passcode? ");
    if (userInputQ < 8 || userInputQ > 120){
        alert("Must be longer than 8 and less than 120 characters");
        return null;
        
    }
    else {
        (userInputQ)
    }

    var specCharQ = confirm(" Would You Like Special Charcaters?");
    if (specCharQ){
        (specCharQ);
    }
    else {
        return null;
    }

    var lowerCaseQ = confirm("Do You Want Lower Case Letters?");
    if (lowerCaseQ){
        (lowerCaseQ);
    }
    else {
        return null;
    }


    var upperCaseQ = confirm("Would You Like Upper Case Letters?");
    if (upperCaseQ){
        (upperCaseQ);
    }
    else {
        return null;
    }
    
    var generatedPassword = [];

    
      



 return "Generated paasword will go hur";

}


//write password to to the input 
function writePassword(){
    var password = generatePassword ();
    var passwordText = document.querySelector("#password"); 

    passwordText.value = password;

}

// Add event Listener  To display in text box
generateBtn.addEventListener("click" , writePassword);