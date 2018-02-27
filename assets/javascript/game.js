
var availWords = ["cockatiel", "parrot", "duck","penguin"];

// Get a random word from the list
var selectedWord = availWords[Math.floor(Math.random() * availWords.length)];
console.log(selectedWord);

// Game should start out with selectedWord.length;
console.log(selectedWord.length);
var wordArr = [];

var word = document.getElementById("displayWord");
for (let i = 0; i < selectedWord.length; i++){ 
    wordArr.push("_ ");
    console.log(wordArr);
    
}
console.log(wordArr);
word.innerHTML = wordArr;


//user enters
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
    console.log(event);
    userText.textContent = event.key;
    //look for selected letter
    for (let i = 0; i < selectedWord.length; i++) {
        if (event.key == selectedWord.charAt(i)){
            wordArr.splice(i,1,event.key);
        }
    }
    word.innerHTML = wordArr;
}
//look for the selected letter



