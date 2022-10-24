let computerSelection
let playerEntry
let playerSelection 
let playerScore = 0
let computerScore = 0
let roundOut
let roundNoti
const roundOutput = document.querySelector('#roundOutput')
const computerScoreOut = document.querySelector('#computerScoreOut')
const playerScoreOut = document.querySelector('#playerScoreOut')
const gameOutput = document.querySelector('#gameOutput')

function alertFunction() {
    alert("Yeah this works");
}

const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', function(e){
    playRound('rock');
    editScores(playerScore,computerScore);
    winCheck(playerScore,computerScore);
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', function(e){
    playRound('paper');
    editScores(playerScore,computerScore);
    winCheck(playerScore,computerScore);
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', function(e){
    playRound('scissors');
    editScores(playerScore,computerScore);
    winCheck(playerScore,computerScore);
});

function roundOutcome(roundOut){
    if (roundOut === 1) {
        roundOutput.textContent = 'You lose the round!';
        computerScore++;
    } else if (roundOut === 2) {
        roundOutput.textContent = 'You win the round!';
        playerScore++;
    } else {
        i--;
        roundOutput.textContent = 'Replay the round!';
    };


}

function editScores(playerScore, computerScore){
    computerScoreOut.textContent = "Computer Score: " + computerScore;
    playerScoreOut.textContent = "Player Score: " + playerScore;
}

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

function playRound(playerSelection) {
    getComputerChoice();
    /* getPlayerChoice();
    playerSelection = playerEntry.toLowerCase(); */

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

    roundOutcome(roundOut);
}

function winCheck(playerScore,computerScore){
    if (playerScore === 5) {
        gameOutput.textContent = "You've won 5 rounds. You win!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameOutput.textContent = "The computer has won 5 rounds. You lose!";
        playerScore = 0;
        computerScore = 0;
    }
}


/* function playGame() {
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

    if (playerScore >= 3) {
        return "You won with a score of " + playerScore + " to " + computerScore +"!";
    } else {
        return "You lost with a score of " + computerScore + " to " + playerScore +"!";
    }
} */