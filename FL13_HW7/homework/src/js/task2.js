let startGame = confirm(`Do you want to play a game?`);
let numOfPocket;
let amountOfTries = 6;
let attempts = 0;
let maxAttempts = 2;
let randomNum = Math.floor(Math.random() * amountOfTries);

if (startGame) {
  for(numOfPocket; numOfPocket !== randomNum; attempts++) {
    numOfPocket = prompt(`Please enter a number of pocket`, ``);

    if(+numOfPocket === +randomNum ) {
      alert(`Your prize is:100$`)
    } else if (attempts >= maxAttempts) {
      confirm(`Do you want to play again?`)
      break 
    }
  }
} else if(!startGame) {
 alert(`You did not become a billionaire, but can.`)
}


