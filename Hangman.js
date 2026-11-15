let POSSIBLE_WORDS = ["Apple", "Jungle", "Castle", "Dolphin"];
let word = "";
let guesses = "";

function newGame() {
    let randomIndex = Math.floor(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updateScreen();
}

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();
    guesses += letter;
    input.value = "";
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
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
   
}