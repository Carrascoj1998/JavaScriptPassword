// Assignment Of Vars 
var  specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '/', ';', ':', '.', '<', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~'];

var  numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var  upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userInput =[];




//Making Function for on Click 
document.getElementById("generate").onclick = function () {
     var userInput = prompt("How many Characters would you like you passcode? ");
        if (userInput < 8 || userInput > 120){
            alert("must be longer than 8 and less than 120 characters");
            
        }



    

     var specChar = confirm(" Would You Like Special Charcaters?");
        if (specChar){
            
       }


     
     var lowerCase = confirm("Do You Want Lower Case Letters?");
        if (lowerCase){
           document.append

      }




     var upperCase = confirm("Would You Like Upper Case Letters?");
        if (upperCase){

      }


      return 
}


