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

    let numOfGames = 5;

    for (let i = 0; i < numOfGames; i++) {
        let userAnswer = prompt("Enter Rock/Paper/Scissors: ");
        let computerAnswer = getComputerChoice();
        console.log(playRound(userAnswer, computerAnswer));
    }

    let scoreDif = Math.abs(userScore - computerScore);
    let pointString = 'point';
    let winnerText = 'The computer beat you';

    if (scoreDif > 1) {
        pointString += "s";
    }

    if (userScore > computerScore) {
        winnerText = 'You beat the computer';
    }

    if (scoreDif === 0) {
        console.log("Looks like neither of you win in the end! It's a tie!");
    }
    else {
        console.log(`${winnerText} by ${scoreDif} ${pointString}!`);
    }
}

game();