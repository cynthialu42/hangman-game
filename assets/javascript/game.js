//List of hangman words
var availWords = ["cockatiel", "parrot", "duck","penguin"];

// chosen string
var selectedWord = availWords[Math.floor(Math.random() * availWords.length)];

//what shows up on screen
var wordArr = [];

// array of guessed letters
var guessed = [];

// number of guesses
var countDown = selectedWord.length *2;

//set up variables for printing to screen
var displayWord = document.getElementById("display-word");
var guessedWord = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");

//get an array of underscores
for (let i = 0; i < selectedWord.length; i++){ 
    wordArr.push("_ ");
}
//join gets rid of the , in the array
displayWord.innerHTML = wordArr.join(" ");


//Get user input
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {

    userText.textContent = event.key;
    //look for selected letter, if found, put it in wordArr
    for (let i = 0; i < selectedWord.length; i++) {
        if (event.key == selectedWord.charAt(i)){
            wordArr.splice(i,1,event.key);   
        }
    }
    //add the letter to the guessed array
    guessed.push(event.key);

    //decrement the number of guesses left
    countDown--;

    //show the stuff on screen
    displayWord.innerHTML = wordArr.join(" ");
    guessedWord.innerHTML = guessed.join(" ");
    
    //determine if win or lose
    if(countDown>0 && (wordArr.join("")==selectedWord)){
        guessesLeft.innerHTML = "You Win! Press any key to play again";
        countDown = -1;
    }
    else if(countDown>0){
        guessesLeft.innerHTML = countDown;
    }
    else if (countDown === 0)
        guessesLeft.innerHTML = "Game Over! Press any key to play again";
    else
        location.reload();
}




