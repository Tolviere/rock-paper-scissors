let userScore = 0;
let computerScore = 0;
let userMatchScore = 0;
let computerMatchScore = 0;
let displayingResults = 0;

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
        return `You win the round! ${playerSelection} beats ${computerSelection}`;

    } 
    else if (playerSelection === computerSelection){

        return "It's a tie!";

    } 
    else {
        computerScore++;
        return `You lose the round! ${computerSelection} beats ${playerSelection}`; 
    }
}

function getMatchText() {

    if (userScore === 5 || computerScore === 5) {
        let scoreDif = Math.abs(userScore - computerScore);
        let pointString = 'point';
        let winnerText = ', and you lost the match! The computer beat you';
    
        if (scoreDif > 1) {
            pointString += "s";
        }
        
        if (userScore > computerScore) {
            winnerText = ', and you won the match! You beat the computer';
            userMatchScore++;    
        } else {
            computerMatchScore++;
        }

        userScore = 0;
        computerScore = 0;

        console.log('gaming?');

        return `${winnerText} by ${scoreDif} ${pointString}!`;
    }

    return '';
}

function game() {
    const playerChoices = document.querySelectorAll('.player-choice');
    const results = document.querySelector('.results'); 
    const playerScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    const matchScoreTexts = document.querySelectorAll('.match-scores h1');
    
    playerChoices.forEach(choice => choice.addEventListener('click', () => {

        displayText(playRound(choice.textContent, getComputerChoice()) + getMatchText(), results, 0);
        displayingResults++;
    
        playerScoreText.textContent = `Player Score: ${userScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        matchScoreTexts[0].textContent = `Player: ${userMatchScore}`;
        matchScoreTexts[1].textContent = `Computer: ${computerMatchScore}`;
    }));    
}

function displayText(text, element, i) {
    if (displayingResults > 1) {
        displayingResults--;
        return;
    }
    if (i < text.length) {
        let timeBetween = 10;
        element.textContent = text.slice(0, i+1);
        setTimeout(function(){displayText(text, element, i+1);}, timeBetween);
    } else {
        displayingResults--;
    }
}

game();