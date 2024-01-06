// let randomnumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector("#subt");
// const userinput = document.querySelector("#guessfield");

// const guessSlot = document.querySelector(".Guesses");

// const remaining = document.querySelector(".lastresult");
// const loworHi = document.querySelector(".loworHi");
// const startover = document.querySelector(".resultpass");

// const p = document.createElement("p");
// let prevguess = [];
// let numguess = 1;

// let playgame = true;

// if (playgame) {
//   submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     const pass = parseInt(userinput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert("please enter a valid number");
//   } else if (guess < 1) {
//     alert("Please enter a  number more than 1 ");
//   } else if (guess > 100) {
//     alert("Please enter a  number less than 100");
//   } else {
//     prevguess.push(guess);
//     if (numguess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game over. Random number is ${randomnumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomnumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomnumber) {
//     displayMessage(`Number is Tooo Low`);
//   } else if (guess > randomnumber) {
//     displayMessage(`Number is Tooo High`);
//   }
// }
// function displayGuess(guess) {
//   userinput.value = " ";
//   guessSlot.innerHTML += `${guess} `;
//   numguess++;
//   remaining.innerHTML = `${10 - numguess}`;
// }
// function displayMessage(message) {
//   loworHi.innerHTML = `<h2>${message}</h2>`;
// }
// function newGame() {
//   const newgamebutton = document.querySelector("#newgame");
//   newgamebutton.addEventListener("click", function (e) {
//     randomnumber = parseInt(Math.random() * 100 + 1);
//     prevguess = [];
//     numguess = 1;
//     guessSlot.innerHTML = "";
//     remaining.innerHTML = `${10 - numguess}`;
//     userinput.removeAttribute("disabled");
//     startover.removeChild(p);
//     playgame = true;
//   });
// }

// function endGame() {
//   userinput.value = " ";
//   userinput.setAttribute("disabled", " ");
//   p.classList.add("button");
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startover.appendChild(p);
//   playgame = false;
//   newGame();
// }

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
