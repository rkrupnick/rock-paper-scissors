let computerSelection,
    playerSelection;

function computerPlay() {
  let rng = Math.floor((Math.random() * 3) + 1);  // Gets a random number between 1 and 3
  if (rng === 1) {
    computerSelection = "rock";
  } else if (rng === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if ()
}