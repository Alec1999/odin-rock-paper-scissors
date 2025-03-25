const log = console.log;

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

function getHumanChoice() {

    // collect human choice for rock, paper, or scissors
    let humanChoice = prompt("Rock, paper or scissors?")
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNum = 1;
    
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice()
        humanChoice = getHumanChoice()

        winner = playRound(humanChoice, computerChoice, humanScore, computerScore, roundNum)

        roundNum++

        if (winner == "human")
            humanScore++
        else if (winner == "computer")
            computerScore++
    }

    log(" ")

    if (humanScore == computerScore)
        log("You tied with the computer!")
    else if(humanScore > computerScore)
        log("Congratulations! You beat the computer " + humanScore + " to " + computerScore)
    else
        log("You lost " + humanScore + " to " + computerScore + " against the computer. Try again?")


    function playRound(humanChoice, computerChoice, humanScore, computerScore, roundNumber) {

        let humanChoiceLower = humanChoice.toLowerCase();
        let winner = ""
    
        log(" ")
        log("The computer chose " + computerChoice)
        log("You chose " + humanChoiceLower)
        log(" ")
    
        // If player chooses rock:
        if (humanChoiceLower == "rock")
            if (computerChoice == "rock")
                log("You tied round " + roundNumber + "!")
            else if (computerChoice == "scissors")
                log("You win in round " + roundNumber + "! Rock beats scissors"),
                winner = "human",
                humanScore++
            else
                log("You lose round " + roundNumber + "! Paper beats rock"),
                winner = "computer",
                computerScore++
    
        // If player chooses scissors:
        else if (humanChoiceLower == "scissors")
            if (computerChoice == "scissors")
                log("You tied in round " + roundNumber + "!")
            else if (computerChoice == "paper")
                log("You win round " + roundNumber + "! scissors beats paper"),
                winner = "human",
                humanScore++
            else
                log("You lose round " + roundNumber + "! rock beats scissors"),
                winner = "computer",
                computerScore++
    
        // If player chooses paper
        else   
            if (computerChoice == "paper")
                log("You tied in round " + roundNumber + "!")
            else if (computerChoice == "rock")
                log("You win round " + roundNumber + "! paper beats rock"),
                winner = "human",
                humanScore++
            else
                log("You lose round " + roundNumber + "! scissors beats paper"),
                winner = "computer",
                computerScore++
        
        log(" ")
        log("Your score is " + humanScore)
        log("The computers score is " + computerScore)
        log(" ")
        log("--------------------------------------")

        return winner;
    } 
}

playGame()
