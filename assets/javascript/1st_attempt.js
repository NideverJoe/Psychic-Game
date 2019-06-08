// define vars for guesses remaining, wins, losses
var guessremain = 9;
wins = 0;
loss = 0;

//game begin

//array of all letters in alphabet. Manually or is there a js for this?
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array to store all userchoice
var userchoicelist = [];
//math random to make computer pick a letter from the array
//define this selection as var computerchoice
var computerchoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var comppicknew = function () {
    var computerchoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerchoice);
}

  
    console.log("computer choice is: "+ computerchoice);


//define keystoke from user as userchoice
document.onkeyup = function (event) {
    var userchoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    // console.log(userchoice);
    userchoicelist.push(userchoice);
    //console.log(userchoicelist);
    document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;
    
    if (userchoice == computerchoice) {
        wins++;
        comppicknew();
        userchoicelist=[];
        guessremain = 9;
        document.getElementById("userguesses").innerHTML = "You have guessed: " + userchoicelist;
    }
    else {
        loss++;
        guessremain--;
    }
}