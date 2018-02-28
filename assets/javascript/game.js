//List of hangman words
var availWords = ["cockatiel", "parrot", "duck","penguin"];
var jokeQ = ["cockatiel","parrot","duck","penguin"];

// chosen string
var chosenIndex = Math.floor(Math.random() * availWords.length);
var selectedWord = availWords[chosenIndex];
var selectedQuestion = jokeQ[chosenIndex];

var wordArr = [];
var guessed = [];
var countDown = selectedWord.length *2;

//set up variables for printing to screen
var displayWord = document.getElementById("display-word");
var lettersGuessed = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");
var userText = document.getElementById("user-text");
var jokeQuestion = document.getElementById("joke-question");

//get an array of underscores
for (let i = 0; i < selectedWord.length; i++){ 
    wordArr.push("_ ");
}
//join gets rid of the , in the array
displayWord.innerHTML = wordArr.join(" ");

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function changeImage() {
const key = document.querySelector(".left-image");

key.classList.add('playing');
}

//const keys = Array.from(document.querySelectorAll('.key'));
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//window.addEventListener('keydown', playSound);

//Get user input
document.onkeyup = function(event) {
    jokeQuestion.innerHTML = selectedQuestion;
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
    lettersGuessed.innerHTML = guessed.join(" ");
    
    //determine if win or lose
    if(countDown>0 && (wordArr.join("")==selectedWord)){
        guessesLeft.innerHTML = "You Win! Press any key to play again";
        countDown = -1;
    }
    else if(countDown>0){
        guessesLeft.innerHTML = countDown;
    }
    else if (countDown === 0){
        guessesLeft.innerHTML = "Game Over! Press any key to play again";
        changeImage();
    }  
    else{
        location.reload();
    }
        
}




