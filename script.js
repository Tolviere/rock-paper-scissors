let userScore = 0;
let ties = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        userScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection){
        ties++;
        return "It's a tie!";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;  
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        let userAnswer = prompt("Enter Rock/Paper/Scissors: ");
        let computerAnswer = getComputerChoice();
        console.log(playRound(userAnswer, computerAnswer));
    }

    let scoreDif = Math.abs(userScore*2-5 - ties);
    let pointString = 'point';
    let winnerText = 'The computer beat you';

    if (scoreDif > 1) {
        pointString += "s";
    }

    if (userScore >= 3) {
        winnerText = 'You beat the computer';
    }

    console.log(`${winnerText} by ${scoreDif} ${pointString}!`);
}

game();