const rock = document.querySelector('#rock'),
      paper = document.querySelector('#paper'),
      scissors = document.querySelector('#scissors'),
      lizard = document.querySelector('#lizard'),
      spock = document.querySelector('#spock'),
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

lizard.addEventListener('click', function() {
  playerSelection = 'lizard';
  playGame();
});

spock.addEventListener('click', function() {
  playerSelection = 'spock';
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
  let rng = Math.floor((Math.random() * 5) + 1);  // Gets a random number between 1 and 3
  if (rng === 1) {
    computerSelection = 'rock';
  } else if (rng === 2) {
    computerSelection = 'paper';
  } else if (rng === 3) {
    computerSelection = 'scissors';
  } else if (rng === 4){
    computerSelection = 'lizard';
  } else {
    computerSelection = 'spock';
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {                  // Check for a tie
    return `You both picked ${computerSelection}! It's a tie!`;
  } else if (computerSelection === 'rock') {                    // Start Computer choice as rock
    if (playerSelection ==='paper') {
      addToPlayerScore();
      return 'You win! Paper beats rock!';
    } else if (playerSelection === 'spock') {
        addToPlayerScore();
        return 'You win! Spock beats scissors!';
    } else if (playerSelection === 'lizard') {
        addToComputerScore();
        return 'You lose! Lizard is crushed by rock!';
    } else {
      addToComputerScore();
      return 'You lose! Rock beats scissors!';
    }                                                           // End Computer choice as rock
  } else if (computerSelection === 'paper') {                   // Start Computer Choice as paper
      if (playerSelection === 'rock') {
        addToComputerScore();
        return 'You lose! Paper beats rock!';
    } else if (playerSelection === 'scissors') {
        addToPlayerScore();
        return 'You win! Scissors cut paper!';
    } else if (playerSelection === 'spock') {
        addToComputerScore()
        return 'You lose! Paper disproves Spock!';
    } else if (playerSelection === 'lizard') {
        addToPlayerScore();
        return 'You win! Lizard eats paper!';
    }                                                          // End Computer choice as paper
  } else if (computerSelection === 'scissors') {                // Start computer choice as scissors
      if (playerSelection === 'rock') {
        addToPlayerScore();
        return 'You win! Rock beats scissors!';
    } else if (playerSelection ==='paper') {
        addToComputerScore();
        return 'You lose! Scissors beats paper';
    } else if (playerSelection === 'spock') {
        addToPlayerScore();
        return 'You win! Spock smashes scissors!';
    } else if (playerSelection === 'lizard') {
        addToComputerScore();
        return 'You lose! Lizard is decapitated by scissors!';
    }                                                          // End Computer choice as scissors
  } else if (computerSelection === 'lizard') {                  // Begin Computer choice as lizard
    if (playerSelection === 'spock') {
      addToComputerScore();
      return 'You lose! Spock is poisoned by lizard!';
    } else if (playerSelection === 'paper') {
      addToComputerScore();
      return 'You lose! Lizard eats paper!';
    } else if (playerSelection === 'rock') {
      addToPlayerScore();
      return 'You win! Lizard is crushed by rock!';
    } else if (playerSelection === 'scissors') {
      addToPlayerScore();
      return 'You win! Lizard is decapitated by scissors!';
    }                                                        // End Computer choice as lizard
  } else {                                                      // Begin Computer choice as spock
    if (playerSelection === 'scissors') {
      addToComputerScore();
      return 'You lose! Spock smashes scissors!'
    } else if (playerSelection === 'rock') {
      addToComputerScore();
      return 'You lose! Spock vaporizes rock!'
    } else if (playerSelection === 'lizard') {
      addToPlayerScore();
      return 'You win! Spock is poisoned by lizard!';
    } else if (playerSelection === 'paper') {
      addToPlayerScore();
      return 'You win! Spock is disproven by paper!';
    }
  }                                                             // End Computer choice as spock
}