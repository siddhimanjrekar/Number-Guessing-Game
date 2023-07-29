    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function guessNumber() {
      const generatedNumber = getRandomNumber(1, 100);
      let numberOfAttempts = 0;

      while (true) {
        const userGuessedNumber = prompt("Guess the number between 1 to 100:");

        const userGuess = parseInt(userGuessedNumber);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          alert("Invalid input! Please enter a valid number.");
          continue;
        }

        numberOfAttempts++;

        if (userGuess < generatedNumber) {
          alert("Sorry, Too Low. Enter a higher number:");
        } else if (userGuess > generatedNumber) {
          alert("Sorry, Too High. Enter a lower number:");
        } else {
          alert(`Congratulations! You guessed the number in ${numberOfAttempts} tries. Game over!`);
          const playAgain = confirm("Do you want to play again?");
          if (playAgain) {
            guessNumber();
          } else {
            alert("Thanks for playing!");
          }
          break;
        }
      }
    }

    guessNumber();

