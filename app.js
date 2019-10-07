// Steps to take when making a password generator
// there are four categories of charactization that needs to be accounted for 
// types: character lower case, character upper case, numbers, symbols
// we need to ensure every password has at least one from each category with an adjustable length min of 8


// have an opener explaining that default password is length is 8 and has only lower case 
// have check able radio boxes to have the system use upper case letters, numbers, symbols, and adjust length

// NOTES
// 1. to create the default password we would set the array to be only lower case -> random it -> set a length limit
// 2. to create the upper case we would create the array -> mesh with current lower case -> find some thing that ensures at least one 
//    upper case is in the output output
// 3. to create the numbers we would create the array -> mesh with lower case -> find something to ensure at least one char
// 4. to create length we would adjust the "i" parameter inside the if statements and make that a['] variable that can be declared
// shuffle the array there is a shuffle function
// isolated function to only grab one lower case letter

// TO DO LIST
// generate password button generates indefinately after first click; need to build a remove function when building new ones
// authenticators to the prompts to ensure no incorrect values are input

do {
    var passLength = prompt('How long will you password be?',);
}
while (numCheck() === false);


var useUpperCase = confirm('Use Upper Case Y/N?',);
var useSymbols = confirm('Use Symbols Y/N?',);
var useNumbers = confirm('Use Numbers Y/N?',);


function numCheck () {
    if (isNaN(passLength) || passLength > 128 || passLength < 8) {
        alert ("input must be numerical between 8 and 128 in length");
        return false;
    };
}



// generate only one random letter ----------------------------------------------------
function genLowerCase() {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    // generate a random letter from the above string
    var randomLowerCase = lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // output for the random letter
    return randomLowerCase;
    };

// generate only one random letter upper case -------------------------------------------
function genUpperCase() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // generate a random letter from the above string
    var randomUpperCase = upperCase[Math.floor(Math.random()*upperCase.length)];
    // output for the random letter
    return randomUpperCase;
    };

// generate only one random symbol ----------------------------------------------------
function genSymbol() {
    var symbol = "!@#$%^&*()_+}{:".split("");
    // generate a random symbol from the above string
    var randomSymbol = symbol[Math.floor(Math.random()*symbol.length)];
    // output for the symbol letter
    return randomSymbol;
    };

// generate only one random number ------------------------------------------------------
function genNumber() {
    var number = "1234567890".split("");
    // generate a random number from the above string
    var randomNumber = number[Math.floor(Math.random()*number.length)];
    // output for the random number
    return randomNumber;
    };


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
        return a;
    }
// function below determines what unique characters are going to be used ------------------
    function genPassword() {
        var custPassword = [];

    for (i = 0; i < passLength; i++) {
        if (useUpperCase === true && i === 0) {
            custPassword.push(genUpperCase());
        } 
        else if (useSymbols === true && i === 1) {
            custPassword.push(genSymbol());
        }
        else if (useNumbers === true && i === 2) {
            custPassword.push(genNumber());
        } else {
            /* inject a letter into the string */
            custPassword.push(genLowerCase());
        };

    var shuffledPass = shuffle(custPassword);
    var finalPass = shuffledPass.join("");

    document.getElementById('Password').innerHTML = finalPass;
    };
}

document.getElementById("copyPassword").addEventListener("click", copyText());

function copyText() {
    var copyText = document.getElementById("Password");
    var textArea = document.createElement("textArea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}




