const rockHand = document.getElementById("rock");
const paperHand = document.getElementById("paper");
const scissorHand = document.getElementById("scissor");
const yourChoice = document.querySelector(".your__choice");
const computerRes = document.querySelector(".computer__response");
const theDecision = document.querySelector(".result");
const pScore = document.getElementById("pscore");
const cScore = document.getElementById("cscore");
const scoreBoardEl = document.querySelector(".score-board");

let playerScore = 0;
let computerScore = 0;

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
  } else if (machine === "paper") {
    result = "you lose";
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  } else {
    result = "you win";
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
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

const paperCon = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");

  if (machine === "rock") {
    result = "you win";
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
  } else if (machine === "paper") {
    result = "its a tie";
  } else {
    result = "you lose";
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  }

  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.append(computerResP);
  yourChoiceP.textContent = "you pick Paper";
  yourChoice.innerHTML = "";
  yourChoice.append(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;

  return result;
};

const scissorCon = (machine) => {
  let result = "";
  const yourChoiceP = document.createElement("p");
  const computerResP = document.createElement("p");

  if (machine === "rock") {
    result = "you lose";
    cScore.innerHTML = `Computer Score: ${(computerScore += 1)}`;
  } else if (machine === "paper") {
    result = "you win";
    pScore.innerHTML = `Player Score: ${(playerScore += 1)}`;
  } else {
    result = "its a tie";
  }

  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.append(computerResP);
  yourChoiceP.textContent = "you pick Scissor";
  yourChoice.innerHTML = "";
  yourChoice.append(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;

  return result;
};

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
