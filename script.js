let computerSelection
let playerEntry
let playerSelection 
let playerScore = 0
let computerScore = 0
let roundOut
let roundNoti

function getComputerChoice() {
    randomNumber = (Math.floor(Math.random()*3));
    
    if (randomNumber === 0) {
        computerSelection = 'rock';
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
    } else if (randomNumber === 2) {
        computerSelection = 'scissors';
    }
}

function getPlayerChoice() {
    playerEntry = prompt('Rock, paper, or scissors?');
    playerSelection = playerEntry.toLowerCase();
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    playerSelection = playerEntry.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        roundOut = 0;
        //return 'You both chose rock, play again!';//
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        roundOut = 0;
        //return 'You both chose paper, play again!';//
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        roundOut = 0;
        //return 'You both chose scissors, play again!';//
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundOut = 1;
        //return 'Rock loses to paper, you lose!';//
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundOut = 2;
        //return 'Rock beats scissors, you win!';//
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        roundOut = 1
        //return 'Scissors beat paper, you lose!';//
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundOut = 2
        //return 'Paper beats rock, you win!';//
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        roundOut = 1
        //return 'Rock beats scissors, you lose!';//
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        roundOut = 2
        //return 'Scissors beat paper, you win!';//
    } else {
        roundOut = 3
        //return 'Something went wrong!';//
    }

    return roundOut
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();

        if (roundOut === 1) {
            computerScore++;
            roundNoti = 'You lose the round!';
        } else if (roundOut === 2) {
            playerScore++;
            roundNoti = 'You win the round!';
        } else {
            i--;
            roundNoti = 'Replay the round!';
        }
        console.log(roundNoti);
    }

    return playerScore;
}