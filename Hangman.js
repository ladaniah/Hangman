let POSSIBLE_WORDS = [
    "Apple", "Jungle", "Castle", "Dolphin", "Banana", "Guitar", "Rocket",
    "Pirate", "Volcano", "Penguin", "Pumpkin", "Wizard", "Lantern", "Thunder",
    "Blanket", "Cactus", "Dragon", "Island", "Jacket", "Kitten", "Lemon",
    "Mountain", "Notebook", "Octopus", "Pickle", "Quilt", "Rainbow", "Sandwich",
    "Tornado", "Unicorn", "Vampire", "Waffle", "Zebra", "Galaxy", "Hamster",
    "Igloo", "Kayak", "Marshmallow", "Necklace", "Orange", "Pajamas", "Robot",
    "Squirrel", "Treasure", "Umbrella", "Violin", "Whistle", "Yogurt",
    "Butterfly", "Chocolate", "Dinosaur", "Elephant", "Firework", "Giraffe",
    "Hedgehog", "Jellyfish", "Keyboard", "Lighthouse", "Moonlight", "Pineapple",
    "Scarecrow", "Snowflake", "Spaghetti", "Sunflower", "Telescope", "Waterfall"
    
];
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
    input.value = "";

    if (letter == "" || guesses.indexOf(letter) != -1) {   
        return;                                            
    }

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

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    if (clueString.indexOf("_") == -1) {
        gameOver = true;
        guessArea.textContent = "YOU WIN";
        guessArea.className = "message";
    } else if (guessCount <= 0) {
        gameOver = true;
        guessArea.textContent = "YOU LOSE! The word was " + word;
        guessArea.className = "message";
    } else {
        guessArea.className = "";
    }

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman" + guessCount + ".gif";
}