//List of hangman words
//var jokeQ = ["What do you give a sick bird?","What kind of math do birds do?","What do you call an uncomfortable situation?","How many birds can play at this game?"];
//var availWords = ["tweetment", "owlgebra", "hawkward","toucan"];

var wordArr;;
var guessed;;
var countDown;
var selectedWord;
var selectedQuestion;
var wins = 0;

//set up variables for printing to screen
var displayWord = document.getElementById("display-word");
var lettersGuessed = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");
var userText = document.getElementById("user-text");
var jokeQuestion = document.getElementById("joke-question");
var totalWins = document.getElementById("total-wins");

function reset(){
    wordArr = [];
    guessed = [];
    lettersGuessed.innerHTML = guessed;
}

function initGame(){
    reset();
    var jokeQ = [
        "What do you give a sick bird?",
        "What kind of math do birds do?",
        "What do you call an uncomfortable situation?",
        "How many birds can play at this game?",
        "What do birds use instead of zippers?",
        "Largest bird in the world",
        "Hoot hoot!",
        "Coo coo~",
        "Waddle waddle sliiiide!",
        "What kind of bird is this guy over here?"

    ];
    var availWords = [
        "tweetment", 
        "owlgebra", 
        "hawkward",
        "toucan",
        "velcrow",
        "ostrich",
        "owl",
        "pigeon",
        "penguin",
        "kakapo"

    ];
    var chosenIndex = Math.floor(Math.random() * availWords.length);

    selectedWord = availWords[chosenIndex];
    selectedQuestion = jokeQ[chosenIndex];
    countDown = selectedWord.length *2;

    for (let i = 0; i < selectedWord.length; i++){ 
        wordArr.push("_ ");
    }
    jokeQuestion.innerHTML = selectedQuestion;
    displayWord.innerHTML = wordArr.join(" ");
    guessesLeft.innerHTML = countDown;

    changeImage(countDown);
}

function changeImage(countDown) {

    const start = document.querySelector(".start-image");
    const win = document.querySelector(".win-image");
    const fail = document.querySelector(".fail-image");
    const bonus = document.querySelector(".bonus-image");
    const dark = document.querySelector(".background-img");
    const tweed = document.querySelector(".background-img");
    var pinkWords = document.querySelectorAll(".words,.title");
    const pinkBorder = document.querySelector(".right-column");

    if(countDown === -1){
        if (wins%5 === 0){
            start.classList.add('hide');
            bonus.classList.add('show');
            dark.classList.add('background-dark');
            for(let i = 0; i < pinkWords.length; i++){
                pinkWords[i].style.color = "rgb(135, 255, 133)";
            }
            pinkBorder.classList.add('pink-border');
        }
        else{
            start.classList.add('hide');
            win.classList.add('show');
            dark.classList.add('background-dark');
            for(let i = 0; i < pinkWords.length; i++){
                pinkWords[i].style.color = "rgb(255, 0, 221)";
            }
            pinkBorder.classList.add('pink-border');
        }
        
    }
    else if (countDown === 0){
        start.classList.add('hide');
        fail.classList.add('show');
        tweed.classList.add('background-grey');
        for(let i = 0; i < pinkWords.length; i++){
            pinkWords[i].style.color = "black";
        }
    }
    else{
        start.classList.remove('hide');
        win.classList.remove('show');
        fail.classList.remove('show');
        bonus.classList.remove('show');
        dark.classList.remove('background-dark');
        tweed.classList.remove('background-grey');
        for(let i = 0; i < pinkWords.length; i++){
            pinkWords[i].style.color = "black";
        }
        pinkBorder.classList.remove('pink-border');
    }
}

//Get user input
function runGame(selectedKey){

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedKey == selectedWord.charAt(i)){
            wordArr.splice(i, 1, selectedKey);
        }
    }

    guessed.push(selectedKey);
    lettersGuessed.innerHTML = guessed.join(" ");

    displayWord.innerHTML = wordArr.join(" ");
    
    countDown--;
    
    if(countDown>0 && (wordArr.join("")==selectedWord)){
        guessesLeft.innerHTML = "You Win! Press any key to play again";
        countDown = -1;
        wins++;
        totalWins.innerHTML = wins;
        changeImage(countDown);
    }
    else if(countDown>0){
        guessesLeft.innerHTML = countDown;
    }
    else if (countDown === 0){
        displayWord.innerHTML = selectedWord;
        guessesLeft.innerHTML = "Game Over! Press any key to play again";
        changeImage(countDown);
    }  
    else{
        initGame();
    }
}

document.onkeyup = function(event) {   
    var keyPress = event.key;  
    runGame(keyPress);    
}

function reload(){
    location.reload();
}


initGame();









