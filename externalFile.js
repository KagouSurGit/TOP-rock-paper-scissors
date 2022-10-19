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
