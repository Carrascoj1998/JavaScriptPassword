let specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '/', ';', ':', '.', '<', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~'];
console.log(specChar);
let numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(numberChar);
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upperCase);
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(lowerCase);


let userInput = []
document.getElementById("generate").onclick = function () {
    prompt("How many Characters would you like you passcode? ");
    if (userInput < 8){
        alert('must be over 8 Characters');
    }

    else if (userInput < 120){
        alert("must be under 120 Characters");
    }
    else{

    }
}
