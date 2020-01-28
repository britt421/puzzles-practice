var numberGuess = prompt("Guess a Number between 1 and 30!");

var myNumber = 24;

if (numberGuess == myNumber) {
    alert("You guessed it!");
} else if (numberGuess < myNumber) {
    alert("Too low, guess something higher");
} else {
    alert("Too high, guess something lower");
}
