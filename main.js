const log = console.log;
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {

    let humanChoiceLower = humanChoice.toLowerCase();

    log("computer choice is now " + computerChoice)
    log("human choice is now " + humanChoiceLower)

    // If player chooses rock:
    if (humanChoiceLower == "rock")
        if (computerChoice == "rock")
            log("You tied!")
        else if (computerChoice == "scissors")
            log("You win! Rock beats scissors"),
            humanScore++
        else
            log("You lose! Paper beats rock"),
            computerScore++

    // If player chooses scissors:
    else if (humanChoiceLower == "scissors")
        if (computerChoice == "scissors")
            log("You tied!")
        else if (computerChoice == "paper")
            log("You win! scissors beats paper"),
            humanScore++
        else
            log("You lose! rock beats scissors"),
            computerScore++

    // If player chooses paper
    else   
        if (computerChoice == "paper")
            log("You tied!")
        else if (computerChoice == "rock")
            log("You win! paper beats rock"),
            humanScore++
        else
            log("You lose! scissors beats paper"),
            computerScore++
    
    log("Human score is " + humanScore)
    log("Computer score is " + computerScore)
} 

computerChoice = getComputerChoice()
humanChoice = getHumanChoice()
playRound(humanChoice, computerChoice)
