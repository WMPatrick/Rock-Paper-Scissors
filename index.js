function getComputerChoice() {
  const compChoices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * compChoices.length);
  return compChoices[randomIndex];
}

function getHumanChoice() {
  let myChoice = prompt(
    "Enter your choice: (rock | paper | scissors)"
  ).toLowerCase();
  while (!["rock", "paper", "scissors"].includes(myChoice)) {
    myChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    myChoice = myChoice.toLowerCase();
  }
  return myChoice;
}

function playRound(humanChoice, computerChoice) {
  const results = {
    rock: { scissors: 1, paper: -1 },
    paper: { rock: 1, scissors: -1 },
    scissors: { rock: -1, paper: 1 },
  };

  const result = results[humanChoice][computerChoice];

  if (result === 1) {
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else if (result === -1) {
    return "You lose! " + computerChoice + " beats " + humanChoice;
  } else {
    return "It's a tie!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result.includes("win")) {
      humanScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
