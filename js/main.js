const rock = document.querySelector('#rock'),
      paper = document.querySelector('#paper'),
      scissors = document.querySelector('#scissors'),
      results = document.querySelector('#results'),
      playerScoreDisplay = document.querySelector('#player-score'),
      computerScoreDisplay = document.querySelector('#computer-score');

let computerSelection,
    playerSelection,
    computerScore = 0,
    playerScore = 0;

rock.addEventListener('click', function() {
  playerSelection = 'rock';
  playGame();
});

paper.addEventListener('click', function() {
  playerSelection = 'paper';
  playGame();
});

scissors.addEventListener('click', function() {
  playerSelection = 'scissors';
  playGame();
});

function playGame() {
  computerSelection = computerPlay();
  results.innerText = playRound(playerSelection, computerSelection);
}

function checkWin() {
  if (computerScore === 5) {
    alert(`The computer has won, it has scored 5 points and you have scored only ${playerScore} points`);
  } else if (playerScore === 5) {
    alert(`You have won, you have scored 5 points and the computer only scored ${computerScore} points`);
  }
}

function addToPlayerScore() {
  playerScore +=1;
  playerScoreDisplay.innerText = playerScore;
  checkWin();
}

function addToComputerScore() {
  computerScore +=1;
  computerScoreDisplay.innerText = computerScore;
  checkWin();
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
      addToPlayerScore();
      return 'You win! Paper beats rock!';
    } else {
      addToComputerScore();
      return 'You lose! Rock beats scissors!';
    }
  } else if (computerSelection === 'paper') {
      if (playerSelection === 'rock') {
        addToComputerScore();
        return 'You lose! Paper beats rock!';
    } else {
        addToPlayerScore();
        return 'You win! Scissors beat paper!';
    }
  } else {
      if (playerSelection === 'rock') {
        addToPlayerScore();
        return 'You win! Rock beats scissors!';
    } else if (playerSelection ==='paper') {
        addToComputerScore();
        return 'You lose! Scissors beats paper';
    }
  }
}