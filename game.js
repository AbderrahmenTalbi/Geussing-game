let randomNumber = Math.floor(Math.random() * 30) + 1;
let attemptsLeft = 5;

let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");
let resultText = document.getElementById("result");
let attemptsText = document.getElementById("attempts");
let playAgainButton = document.getElementById("play-again");

attemptsText.textContent = `You have ${attemptsLeft} attempts left.`;

submitButton.addEventListener("click", submitGuess);

guessInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitGuess();
    }
});

function submitGuess() {
    // Check if the submit button is disabled, which would mean the game has finished
    if (submitButton.disabled) {
        return;
    }

    let guess = guessInput.value;

    if (guess === "") {
        resultText.innerHTML = "<span style='color:red;'>Please enter a number.</span>";
        return;
    }

    guess = parseInt(guess);

    if (guess > 30 || guess < 1) {
        resultText.innerHTML = "<span style='color:red;'>Please enter a number between 1 and 30.</span>";
        return;
    }

    attemptsLeft--;

    if (guess === randomNumber) {
        resultText.innerHTML = "You guessed the correct number! Congratulations!";
        submitButton.disabled = true;
        guessInput.disabled = true;
        playAgainButton.style.display = "inline-block";
    } else if (guess < randomNumber) {
        resultText.textContent = "Too low, try again.";
    } else {
        resultText.textContent = "Too high, try again.";
    }

    attemptsText.textContent = `You have ${attemptsLeft} attempts left.`;

    if (attemptsLeft === 0) {
        resultText.innerHTML = `You ran out of attempts. The number was ${randomNumber}.`;
        submitButton.disabled = true;
        guessInput.disabled = true;
        playAgainButton.style.display = "inline-block";
    }
}



playAgainButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 30) + 1;
    attemptsLeft = 5;
    guessInput.value = "";
    resultText.textContent = "";
    attemptsText.textContent = `You have ${attemptsLeft} attempts left.`;
    submitButton.disabled = false;
    guessInput.disabled = false;
    playAgainButton.style.display = "none";
});