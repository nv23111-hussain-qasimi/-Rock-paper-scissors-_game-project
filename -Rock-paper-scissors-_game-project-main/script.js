// Global score variables (as before)
let humanScore = 0;
let computerScore = 0;
let gameEnded = false; // Flag to check if the game has ended
// Function to get computer's choice (remains the same)
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// DOM Element References
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');
// Function to update the score display in the DOM
function updateScoreDisplay() {
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}
// Function to disable buttons after game ends
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
// Function to check for a winner
function checkWinner() {
    if (humanScore >= 5) {
        resultsDiv.innerHTML += `<br><strong>Congratulations! You won the game!</strong>`; // Use innerHTML to add a line break
        gameEnded = true;
        disableButtons();
    } else if (computerScore >= 5) {
        resultsDiv.innerHTML += `<br><strong>Sorry! The computer won the game!</strong>`;
        gameEnded = true;
        disableButtons();
    }
}
// Modified playRound function
function playRound(humanChoice) {
    if (gameEnded) return; // Don't play if game has already ended

    const computerChoice = getComputerChoice();
    let roundMessage = "";
    if (humanChoice === computerChoice) {
        roundMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        roundMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
    resultsDiv.textContent = roundMessage; // Display round result
    updateScoreDisplay(); // Update and display the current score
    checkWinner(); // Check if there's a game winner after this round
}
// Event Listeners for buttons
rockButton.addEventListener('click', () => {
    playRound("rock");
});
paperButton.addEventListener('click', () => {
    playRound("paper");
});
scissorsButton.addEventListener('click', () => {
    playRound("scissors");
});
// Initial score display
updateScoreDisplay();
// --- Removed original getHumanChoice() and playGame() ---
// The game flow is now driven by button clicks and the playRound function.
// The original playGame() which looped 5 times and used prompts is no longer needed in this UI version.