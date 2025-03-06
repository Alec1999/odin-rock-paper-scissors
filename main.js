const log = console.log;

function getComputerChoice() {

    let randNumber = Math.random()

    // Make variable equal to either rock paper or scissors depending on number
    if (randNumber <= 0.33)
        outcome = "rock"
    else if (randNumber > 0.33 && randNumber <= 0.66)
        outcome = "paper"
    else
        outcome = "scissors"

    log(outcome)
    return outcome;
}

getComputerChoice();