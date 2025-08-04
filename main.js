const log = console.log;
let humanScore = 0;
let computerScore = 0;
let roundNum = 1;
let gameCount = 1;

function getComputerChoice() {

    let randNumber = Math.random()

    // Make variable equal to either rock, paper or scissors depending on number
    if (randNumber <= 0.33)
        outcome = "rock"
    else if (randNumber > 0.33 && randNumber <= 0.66)
        outcome = "paper"
    else
        outcome = "scissors"

    // log(outcome)
    return outcome;
}

function playRound(humanChoice) {
    winner = "";
    computerChoice = getComputerChoice();

    if (humanChoice == "rock")
        if (computerChoice == "rock")
            results.textContent = "You tied round " + roundNum + "!"
        else if (computerChoice == "scissors")
            results.textContent = "You win in round " + roundNum + "! Rock beats scissors",
            winner = "human";
        else
        results.textContent = "You lose round " + roundNum + "! Paper beats rock",
            winner = "computer";

    // If player chooses scissors:
    else if (humanChoice == "scissors")
        if (computerChoice == "scissors")
            results.textContent = "You tied in round " + roundNum + "!";
        else if (computerChoice == "paper")
            results.textContent = "You win round " + roundNum + "! scissors beats paper",
            winner = "human";
        else
            results.textContent = "You lose round " + roundNum + "! rock beats scissors",
            winner = "computer";

    // If player chooses paper
    else if (humanChoice == "paper")  
        if (computerChoice == "paper")
            results.textContent = "You tied in round " + roundNum + "!";
        else if (computerChoice == "rock")
            results.textContent = "You win round " + roundNum + "! paper beats rock",
            winner = "human";
        else
            results.textContent = "You lose round " + roundNum + "! scissors beats paper",
            winner = "computer";

    if (winner == "human")
        humanScore++;
    else if (winner == "computer")
        computerScore++;

    roundNum++;
    currentScore.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;

    if (roundNum > 5) {
        if (humanScore == computerScore)
            results.textContent = "You tied with the computer in game " + gameCount + "!";
        else if(humanScore > computerScore)
            results.textContent = "Congratulations! You beat the computer " + humanScore + " to " + computerScore + " in game " + gameCount + "!";
        else
            results.textContent = "You lost " + humanScore + " to " + computerScore + " in game " + gameCount + " against the computer. Try again?";

    gameCount++;
    roundNum = 1;
    humanScore = 0;
    computerScore = 0;
    };
};  


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});
paperBtn.addEventListener("click", () => {
    playRound("paper");
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

const resultsDisplay = document.querySelector("#results-display");
const results = document.createElement("div");
const currentScore = document.querySelector("#current-score");
resultsDisplay.appendChild(results);

