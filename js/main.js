let computerSelection,
    playerSelection;

function game() {
  let round = 1;
  while (round < 6) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, or scissors?");
    console.log(playRound(playerSelection, computerSelection));
    round += 1;
  }
}

function computerPlay() {
  let rng = Math.floor((Math.random() * 3) + 1);  // Gets a random number between 1 and 3
  if (rng === 1) {
    computerSelection = 'rock';
  } else if (rng === 2) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return `You both picked ${computerSelection}! It's a tie!`;
  } else if (computerSelection === 'rock') {
    if (playerSelection ==='paper') {
      return 'You win! Paper beats rock!';
    } else {
      return 'You lose! Rock beats scissors!';
    }
  } else if (computerSelection === 'paper') {
      if (playerSelection === 'rock') {
        return 'You lose! Paper beats rock!';
    } else {
        return 'You win! Scissors beat paper!';
    }
  } else {
      if (playerSelection === 'rock') {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection ==='paper') {
        return 'You lose! Scissors beats paper';
    }
  }
}