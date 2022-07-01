import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("result-text");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".fa-regular");

const ROCK_VALUE = 0;
const PAPER_VALUE = 1;
const SCISSORS_VALUE = 2;
const LIZARD_VALUE = 3;
const SPOCK_VALUE = 4;

const ROCK_NAME = "rock";
const PAPER_NAME = "paper";
const SCISSORS_NAME = "scissors";
const LIZARD_NAME = "lizard";
const SPOCK_NAME = "spock";

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

// Reset all 'Selected' icons
function resetSelected() {
  stopConfetti();
  removeConfetti();
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Reset Score & player/computer Choice
function resetAll() {
  playerScore = 0;
  computerScore = 0;
  resetSelected();

  playerChoiceEl.textContent = " --- Choice";
  computerChoiceEl.textContent = " --- Choice";
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultText.textContent = "";
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor((Math.random() * 10) % 5);

  switch (computerChoiceNumber) {
    case ROCK_VALUE:
      computerChoice = ROCK_NAME;
      break;
    case PAPER_VALUE:
      computerChoice = PAPER_NAME;
      break;
    case SCISSORS_VALUE:
      computerChoice = SCISSORS_NAME;
      break;
    case LIZARD_VALUE:
      computerChoice = LIZARD_NAME;
      break;
    case SPOCK_VALUE:
      computerChoice = SPOCK_NAME;
      break;
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case ROCK_NAME:
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case PAPER_NAME:
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case SCISSORS_NAME:
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case LIZARD_NAME:
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case SPOCK_NAME:
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
  }
}

// Check result, updates score
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choiceObj = choices[playerChoice];

    if (choiceObj.defeats.indexOf(computerChoice) >= 0) {
      resultText.textContent = "You won!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
      startConfetti();
    } else {
      resultText.textContent = "Computer won!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}

// Call functions to process turn
function checkResult(playerSelection) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerSelection);
}

// Passing player selection value and styling icons
function select(playerSelection) {
  checkResult(playerSelection);
  // Add 'selected' styling & playerChoice
  switch (playerSelection) {
    case ROCK_NAME:
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case PAPER_NAME:
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case SCISSORS_NAME:
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case LIZARD_NAME:
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case SPOCK_NAME:
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
  }
}
window.select = select;
