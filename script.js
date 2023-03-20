let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' || 
    playerSelection === 'Scissors' && computerSelection === 'Paper') {

        userScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } 
    else if (playerSelection === computerSelection){

        return "It's a tie!";

    } 
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

function game() {

    if (userScore === 5 || computerScore === 5) {
        let scoreDif = Math.abs(userScore - computerScore);
        let pointString = 'point';
        let winnerText = 'You lost the match! The computer beat you';
    
        if (scoreDif > 1) {
            pointString += "s";
        }
    
        if (userScore > computerScore) {
            winnerText = 'You won the match! You beat the computer';
        }

        results.textContent = `${winnerText} by ${scoreDif} ${pointString}!`;

        userScore = 0;
        computerScore = 0;
    }
}

const playerChoices = document.querySelectorAll('.player-choice');
const results = document.querySelector('div'); 
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');


playerChoices.forEach(choice => choice.addEventListener('click', () => {
    results.textContent = playRound(choice.textContent, getComputerChoice());
    playerScoreText.textContent = `Player Score: ${userScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    game();
}));