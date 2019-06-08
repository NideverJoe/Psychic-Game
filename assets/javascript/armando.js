// define vars for guesses remaining, wins, losses
var guessremain = 9;
var wins = 0;
var loss = 0;
var computerchoice;
var userchoice;

//array of all letters in alphabet. Manually or is there a js for this?
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array to store all userchoice
var userchoicelist = [];
var userGuesses =  document.getElementById("userguesses");

//functions
//
//reset aka game begin
var gamereset = function () {
    guessremain = 9;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + loss;
    document.getElementById("guessremaining").innerHTML = "Guesses Remaining: " + guessremain;
    console.log("Game begin or reset.");
    comppicknew();
    while(userGuesses.firstChild) userGuesses.removeChild(userGuesses.firstChild)
    document.getElementById("userguesses").innerHTML =  "You have guessed: " + userchoicelist;
}

// computer pick a letter
var comppicknew = function () {
    computerchoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer choice is: " + computerchoice);
}

// compare user choice to computer choice
var letterchecker = function () {
    if (userchoice == computerchoice) {
        wins++;
        comppicknew();
        userchoicelist = [];
        gamereset();
        // document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist.split(",");
        document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;
        alert("You Win!")
    }
    else {
        guessremain--;
        document.getElementById("guessremaining").innerHTML = "Guesses Remaining: " + guessremain;
    }
    if
        (guessremain == 0) {
        loss++;
        document.getElementById("losses").innerHTML = "Losses: " + loss;
        userchoicelist = [];
        gamereset();
    }
}


//define keystoke from user as userchoice
document.onkeyup = function (event) {
    userchoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userchoice);
    letterchecker();
    userchoicelist.push(userchoice);
    console.log(userchoicelist);
    // document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist.split(",");
    document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;
}

//initialize first computer choice and show scores
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + loss;
document.getElementById("guessremaining").innerHTML = "Guesses Remaining: " + guessremain;

comppicknew();

// conditional to compare userchoice and computerchoice vars
// if correct increase wins var, computer makes new choice, delete all guesses made, reset screen
