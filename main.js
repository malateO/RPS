const rockHand = document.getElementById("rock");
const paperHand = document.getElementById("paper");
const scissorHand = document.getElementById("scissor");
const yourChoice = document.querySelector(".your__choice");
const computerRes = document.querySelector(".computer__response");
const theDecision = document.querySelector(".result");

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
  } else {
    result = "you win";
  }
  computerResP.textContent = `${machineHand}`;
  computerRes.innerHTML = "";
  computerRes.appendChild(computerResP);
  yourChoiceP.textContent = "you pick Rock";
  yourChoice.innerHTML = "";
  yourChoice.appendChild(yourChoiceP);
  theDecision.textContent = `The computer pick ${machineHand}, ${result}`;
};

rockHand.addEventListener("click", () => {
  machineHand = computerHand(randomHand());
  rockCon(machineHand);
});
