let computerSelection

function getComputerChoice() {
    const randomNumber = Math.random()*100;

    if (randomNumber <= 33) {
        computerSelection = 'rock';
    } else if (randomNumber >= 67) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
}

