let POSSIBLE_WORDS = ["Apple", "Jungle", "Castle", "Dolphin"];
let word = "";
let guesses = "";
let guessCount = 6;
let gameOver = true;                      

function newGame() {
    let randomIndex = Math.floor(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guessCount = 6;
    gameOver = false;                     
    updateScreen();
}

function guess() {
    if (gameOver) {                     
        return;
    }
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();
    if (word.toLowerCase().indexOf(letter) < 0) {
        guessCount--;
    }
    guesses += letter;
    updateScreen();
}

function updateScreen() {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (guesses.indexOf(letter.toLowerCase()) != -1) {
            clueString += letter + " ";
        } else {
            clueString += "_ ";
        }
    }


    if (clueString.indexOf("_") == -1 || guessCount <= 0) {
        gameOver = true;
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman" + guessCount + ".gif";
}