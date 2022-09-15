let computerSelection
let playerEntry
let playerSelection 
let playerScore = 0
let computerScore = 0

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
    }
}

function getComputerChoice() {
    const randomNumber = Math.random()*100;

    if (randomNumber <= 33) {
        computerSelection = 'rock';
            //*rock*//
    } else if (randomNumber >= 67) {
        computerSelection = 'paper';
            //*paper*//
    } else {
        computerSelection = 'scissors';
            //*scissors*//
    }

    return(computerSelection);
}

function getPlayerChoice() {
    playerEntry = prompt('Rock, paper, or scissors?');
    playerSelection = playerEntry.toLowerCase();
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'You both chose rock, play again!';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'You both chose paper, play again!';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'You both chose scissors, play again!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Rock loses to paper, you lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats scissors, you win!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Scissors beat paper, you lose!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Paper beats rock, you win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Rock beats scissors, you lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Scissors beat paper, you win!';
    } else {
        return 'Something went wrong!';
    }
}



