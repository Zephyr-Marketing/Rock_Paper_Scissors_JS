const selections = ["Rock", "Paper", "Scissors"];
const computerChoice = selections[Math.floor(Math.random() * selections.length)];

function getComputerChoice() {
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    let computerSelection = getComputerChoice().toUpperCase();
    console.log("Best of 5 wins!");

    let playerSelection = prompt("Choose your fighter! Rock, Paper or Scissors?").toUpperCase();
    console.log("Player selects: " + playerSelection);

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You win! Rock beats scissors");
        playerScore++;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("You lose :( Paper beats rock");
        computerScore++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You win! Scissors beats paper");
        playerScore++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("You lose :( Rock beats scissors");
        computerScore++;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You win! Paper beats rock");
        playerScore++;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("You lose :( Scissors beats paper");
        computerScore++;
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("You have beat your computer!");
    } else if (computerScore > playerScore) {
        console.log("You have lost against your computer!");
    } else if (playerScore == computerScore) {
        console.log("The game ended in a tie!");
    }
}

playGame();