
var availWords = ["cockatiel", "parrot", "duck","penguin"];

// Get a random word from the list
var selectedWord = availWords[Math.floor(Math.random() * availWords.length)];

// Game should start out with selectedWord.length;
var wordArr = [];

// array of guessed letters
var guessed = [];

// number of guesses
var countDown = selectedWord.length *2;

var displayWord = document.getElementById("display-word");
var guessedWord = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");

for (let i = 0; i < selectedWord.length; i++){ 
    wordArr.push("_ ");
 
}

displayWord.innerHTML = wordArr.join(" ");


//user enters
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {

    userText.textContent = event.key;
    //look for selected letter
    for (let i = 0; i < selectedWord.length; i++) {
        if (event.key == selectedWord.charAt(i)){
            wordArr.splice(i,1,event.key);   
        }
    }
    guessed.push(event.key);
    countDown--;
    displayWord.innerHTML = wordArr.join(" ");
    guessedWord.innerHTML = guessed.join(" ");
    
    if(countDown>0 && (wordArr.join("")==selectedWord)){
        guessesLeft.innerHTML = "You Win!";
        countDown = -1;
    }
    else if(countDown>0){
        guessesLeft.innerHTML = countDown;
    }
    else if (countDown === 0)
        guessesLeft.innerHTML = "Game Over";
    else
        location.reload();
}




