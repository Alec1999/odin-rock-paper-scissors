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
    let humanChoice = prompt("What is your choice?")
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice()
        humanChoice = getHumanChoice()

        winner = playRound(humanChoice, computerChoice, humanScore, computerScore)

        if (winner == "human")
            humanScore++
        else if (winner == "computer")
            computerScore++
    }

    function playRound(humanChoice, computerChoice, humanScore, computerScore) {

        let humanChoiceLower = humanChoice.toLowerCase();
        let winner = ""
    
        log("computer choice is now " + computerChoice)
        log("human choice is now " + humanChoiceLower)
    
        // If player chooses rock:
        if (humanChoiceLower == "rock")
            if (computerChoice == "rock")
                log("You tied!")
            else if (computerChoice == "scissors")
                log("You win! Rock beats scissors"),
                winner = "human",
                humanScore++
            else
                log("You lose! Paper beats rock"),
                winner = "computer",
                computerScore++
    
        // If player chooses scissors:
        else if (humanChoiceLower == "scissors")
            if (computerChoice == "scissors")
                log("You tied!")
            else if (computerChoice == "paper")
                log("You win! scissors beats paper"),
                winner = "human",
                humanScore++
            else
                log("You lose! rock beats scissors"),
                winner = "computer",
                computerScore++
    
        // If player chooses paper
        else   
            if (computerChoice == "paper")
                log("You tied!")
            else if (computerChoice == "rock")
                log("You win! paper beats rock"),
                winner = "human",
                humanScore++
            else
                log("You lose! scissors beats paper"),
                winner = "computer",
                computerScore++
        
        log("Human score is " + humanScore)
        log("Computer score is " + computerScore)
        log("--------------------------------------")

        return winner;
    } 
}

playGame()
