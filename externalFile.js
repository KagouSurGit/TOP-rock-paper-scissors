function getComputerChoice () {
    if (Math.floor(Math.random() * 3) + 1 === 1){
        return "Rock";
    } else if (Math.floor(Math.random() * 3) + 1 === 2) {
        return "Paper";
    } else if (Math.floor(Math.random() * 3) + 1 === 3) {
        return "Scissors";
    }
}
console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "No one wins, it's a tie";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win, the machine loses";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win, the machine loses";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win, the machine loses";
    } else {
        return "You have lost against the machine, Skynet will rise";
    }
}
/* const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));