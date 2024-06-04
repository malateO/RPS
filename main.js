const rockHand = document.getElementById("rock");
const paperHand = document.getElementById("paper");
const scissorHand = document.getElementById("scissor");
const yourChoice = document.querySelector(".your__choice");
const computerRes = document.querySelector(".computer__response");
const theDecision = document.querySelector(".result");
const pScore = document.getElementById("pscore");
const cScore = document.getElementById("cscore");
const scoreBoardEl = document.querySelector(".score-board");
const reset = document.getElementById("reset");
const playerWins = document.getElementById("player-wins");
const playerLoses = document.getElementById("player-loses");
const playerTies = document.getElementById("player-ties");
const restore = document.getElementById("restore");

let playerMove = [rockHand, paperHand, scissorHand];
let playerScore = 0;
let computerScore = 0;
// let playerStats = JSON.parse(localStorage.getItem("playerStats"));

const randomHand = () => Math.floor(Math.random() * 3) + 1;

const computerHand = (randomNum) => {
  let machineHand = "";
  if (randomNum === 1) {
    machineHand = "rock";
  } else if (randomNum === 2) {
    machineHand = "paper";
  } else {
    machineHand = "scissor";
  }
  return machineHand;
};

let machineHand = computerHand(randomHand());

const gameResult = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");

  if (playerMove[0].id === "rock") {
    if (machine === "rock") {
      result = "its a tie";
      console.log("tie");
    } else if (machine === "paper") {
      result = "you lose";
      console.log("lose");
      cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
    } else {
      result = "you win";
      console.log("win");
      pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
    }
  } else if (playerMove[1].id === "paper") {
    if (machine === "rock") {
      result = "you win";
      pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
    } else if (machine === "paper") {
      result = "its a tie";
    } else {
      result = "you lose";
      cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
    }
  } else if (playerMove[2].id === "scissor") {
    if (machine === "rock") {
      result = "you lose";
      cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
    } else if (machine === "paper") {
      result = "you win";
      pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
    } else {
      result = "its a tie";
    }
  }

  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.appendChild(computerResP);
  yourChoiceP.textContent = "you pick Rock";
  yourChoice.innerHTML = "";
  yourChoice.appendChild(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;
  return result;
};

const resetAll = () => {
  computerRes.innerHTML = "";
  yourChoice.innerHTML = "";
  theDecision.textContent = "";
  cScore.innerHTML = "Player Score:";
  pScore.innerHTML = "Computer Score:";
  computerScore = 0;
  playerScore = 0;
};

const restoreAll = () => {
  localStorage.removeItem("playerStats");
};

rockHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand);
});

paperHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand);
});

scissorHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand);
});

reset.addEventListener("click", resetAll);

restore.addEventListener("click", restoreAll);
