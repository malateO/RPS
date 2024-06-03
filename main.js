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
let playerStats = JSON.parse(localStorage.getItem("score"));

playerWins.textContent = `${playerStats.wins}`;
playerLoses.textContent = `${playerStats.lose}`;
playerTies.textContent = `${playerStats.tie}`;

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

const rockCon = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");
  if (machine === "rock") {
    result = "its a tie";
    playerTies.textContent = `${(playerStats.tie += 1)}`;
  } else if (machine === "paper") {
    result = "you lose";
    playerLoses.textContent = `${(playerStats.lose += 1)}`;
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  } else {
    result = "you win";
    playerWins.textContent = `${(playerStats.wins += 1)}`;
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
  }
  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.appendChild(computerResP);
  yourChoiceP.textContent = "you pick Rock";
  yourChoice.innerHTML = "";
  yourChoice.appendChild(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;

  localStorage.setItem("score", JSON.stringify(playerStats));

  console.log(playerStats.wins);

  return result;
};

const paperCon = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");

  if (machine === "rock") {
    result = "you win";
    playerWins.textContent = `${(playerStats.wins += 1)}`;
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
  } else if (machine === "paper") {
    result = "its a tie";
    playerTies.textContent = `${(playerStats.tie += 1)}`;
  } else {
    result = "you lose";
    playerLoses.textContent = `${(playerStats.lose += 1)}`;
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  }

  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.append(computerResP);
  yourChoiceP.textContent = "you pick Paper";
  yourChoice.innerHTML = "";
  yourChoice.append(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;
  console.log(playerStats.wins);

  return result;
};

const scissorCon = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");

  if (machine === "rock") {
    result = "you lose";
    playerLoses.textContent = `${(playerStats.lose += 1)}`;
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  } else if (machine === "paper") {
    result = "you win";
    playerWins.textContent = `${(playerStats.wins += 1)}`;
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
  } else {
    result = "its a tie";
    playerTies.textContent = `${(playerStats.tie += 1)}`;
  }

  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.append(computerResP);
  yourChoiceP.textContent = "you pick Scissor";
  yourChoice.innerHTML = "";
  yourChoice.append(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;
  console.log(playerStats.wins);

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

/*Pending*/
/*
const restoreAll = () => {
  localStorage.removeItem("playerStats");
  if (!playerStats) {
    playerStats = {
      wins: 0,
      lose: 0,
      tie: 0,
    };
  }
};
*/

rockHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  rockCon(machineHand);
});

paperHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  paperCon(machineHand);
});

scissorHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  scissorCon(machineHand);
});

reset.addEventListener("click", resetAll);

restore.addEventListener("click", restoreAll);
