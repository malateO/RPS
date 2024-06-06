const optionBtn = document.querySelectorAll(".option", "button");
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

let playerScore = 0;
let computerScore = 0;
// let playerStats = {
//   win: 0,
//   lose: 0,
//   tie: 0,
// };
let playerStats = JSON.parse(localStorage.getItem("playerStat")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

playerWins.textContent = `${playerStats.win}`;
playerTies.textContent = `${playerStats.tie}`;
playerLoses.textContent = `${playerStats.lose}`;

// if (!playerStats) {
//   playerStats = {
//     win: 0,
//     lose: 0,
//     tie: 0,
//   };
// }

const randomHand = () => Math.floor(Math.random() * 3) + 1;

const computerHand = (randomNum) => {
  let machineHand = "";
  if (randomNum === 1) {
    machineHand = "rock";
  } else if (randomNum === 2) {
    machineHand = "paper";
  } else {
    machineHand = "scissors";
  }
  return machineHand;
};

let machineHand = computerHand(randomHand());

const gameResult = (machine, playerhand) => {
  let result = "";
  const computerResP = document.createElement("p");
  const yourChoiceP = document.createElement("p");

  if (playerhand === "Rock") {
    if (machine === "rock") {
      result = "its a tie";
      playerTies.textContent = `${(playerStats.tie += 1)}`;
    } else if (machine === "paper") {
      result = "you lose";
      cScore.textContent = `${(computerScore += 1)}`;
      playerLoses.textContent = `${(playerStats.lose += 1)}`;
    } else {
      result = "you win";
      pScore.textContent = `${(playerScore += 1)}`;
      playerWins.textContent = `${(playerStats.win += 1)}`;
    }
  } else if (playerhand === "Paper") {
    if (machine === "rock") {
      result = "you win";
      pScore.textContent = `${(playerScore += 1)}`;
      playerWins.textContent = `${(playerStats.win += 1)}`;
    } else if (machine === "paper") {
      result = "its a tie";
      playerTies.textContent = `${(playerStats.tie += 1)}`;
    } else {
      result = "you lose";
      cScore.textContent = `${(computerScore += 1)}`;
      playerLoses.textContent = `${(playerStats.lose += 1)}`;
    }
  } else if (playerhand === "Scissor") {
    if (machine === "rock") {
      result = "you lose";
      cScore.textContent = `${(computerScore += 1)}`;
      playerLoses.textContent = `${(playerStats.lose += 1)}`;
    } else if (machine === "paper") {
      result = "you win";
      pScore.textContent = `${(playerScore += 1)}`;
      playerWins.textContent = `${(playerStats.win += 1)}`;
    } else {
      result = "its a tie";
      playerTies.textContent = `${(playerStats.tie += 1)}`;
    }
  }

  localStorage.setItem("playerStat", JSON.stringify(playerStats));

  computerResP.innerHTML = `<img class="cmove-icon computer-res" src="assets/${machineHand}-emoji.png" alt="scissor" />`;
  computerRes.innerHTML = "";
  computerRes.appendChild(computerResP);
  yourChoiceP.textContent = `you pick ${playerhand}`;
  yourChoice.innerHTML = "";
  yourChoice.appendChild(yourChoiceP);
  theDecision.innerHTML = `The computer pick ${machineHand}, ${result}`;

  if (result === "you win") {
    theDecision.style.color = "blue";
  } else if (result === "you lose") {
    theDecision.style.color = "red";
  } else {
    theDecision.style.color = "white";
  }
};

const resetAll = () => {
  computerRes.innerHTML = "";
  yourChoice.innerHTML = "";
  theDecision.textContent = "";
  pScore.textContent = `${(computerScore = 0)}`;
  cScore.textContent = `${(playerScore = 0)}`;
  computerScore = 0;
  playerScore = 0;
};

const restoreAll = () => {
  playerStats.win = 0;
  playerStats.lose = 0;
  playerStats.tie = 0;
  playerWins.textContent = `${playerStats.win}`;
  playerTies.textContent = `${playerStats.tie}`;
  playerLoses.textContent = `${playerStats.lose}`;
  localStorage.removeItem("playerStat");
};

rockHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand, "Rock");
});

paperHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand, "Paper");
});

scissorHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  gameResult(machineHand, "Scissor");
});

reset.addEventListener("click", resetAll);

restore.addEventListener("click", restoreAll);
