// Array containing the selections: Rock, Paper, Scissors
const selections = ["Rock", "Paper", "Scissors"];

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Get the results div element from the HTML
let resultsDiv = document.getElementById("results");

// Function to get the computer's choice (randomly)
function getComputerChoice() {
    return selections[Math.floor(Math.random() * selections.length)].toUpperCase();
}

// Function to play a round
function playRound(playerSelection) {
    // Get computer's selection
    let computerSelection = getComputerChoice();
    
    // Clear the results div
    resultsDiv.innerHTML = "";
    
    // Check the outcome of the round and update scores accordingly
    if (playerSelection === computerSelection) {
        resultsDiv.innerHTML += "It's a tie this round!<br><br>";
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        resultsDiv.innerHTML += "You win this round!<br><br>";
        playerScore++;
    } else {
        resultsDiv.innerHTML += "You lose this round :(<br><br>";
        computerScore++;
    }
    
    // Update scores and check if game ended
    score();
    endGame();
}

// Function to display player and computer scores
function score() {
    resultsDiv.innerHTML += "Player: " + playerScore + "<br><br>";
    resultsDiv.innerHTML += "Computer: " + computerScore + "<br><br>";
}

// Function to check if the game has ended
function endGame() {
    if (playerScore >= 5 || computerScore >= 5) {
        // Display the game result
        if (playerScore > computerScore) {
            resultsDiv.innerHTML += "You have beaten your computer!<br><br>";
        } else if (computerScore > playerScore) {
            resultsDiv.innerHTML += "You have lost against your computer!<br><br>";
        } else {
            resultsDiv.innerHTML += "The game ended in a tie!<br><br>";
        }
        // Reset scores for the next game
        playerScore = 0;
        computerScore = 0;
    }
}

// Function to display the message indicating the start of a best-of-5 game
function bestOf5() {
    resultsDiv.innerHTML = "Best of 5 wins!<br><br>";
}

// Function to attach event listeners to the buttons (rock, paper, scissors)
function attachEventListeners() {
    document.getElementById("rock").addEventListener("click", () => {
        playRound("ROCK");
    });

    document.getElementById("paper").addEventListener("click", () => {
        playRound("PAPER");
    });

    document.getElementById("scissors").addEventListener("click", () => {
        playRound("SCISSORS");
    });
}

// Function to start the game
function playGame() {
    bestOf5();
    attachEventListeners();
}

// Call the playGame function to start the game
playGame();