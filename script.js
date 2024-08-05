

let humanScore = 0;
let computerScore = 0;

// EFFECT: returns randomized choice between rock paper and scissors
function getComputerChoice() {
    // SET variable to math.random to get a value between 0-1
    let random = Math.random();
    let computerChoice;
    const THIRD = 1/3;
    const TWO_THIRDS = 2/3;
    // IF value is 0-0.333 rock

    if (random >= 0 && random <= THIRD) {
        computerChoice = "rock";
    } else if (random > THIRD && random <= TWO_THIRDS) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
    // IF value is 0.3333-0.66667 return paper 

    // ELSE return scissors

    // ENDIF
    // END IF
}

// EFFECTS: returns the choice of user
function getHumanChoice() {
    let userChoice = prompt("Please Choose one of rock, paper, or scissors", "");

    switch(userChoice) {
        case "rock":
            return userChoice;
            break;
        case "paper":
            return userChoice;
            break;
        case "scissors":
            return userChoice;
            break;
        default:
            console.log("this is not a valid input!Try Again!");
        } 
}

// EFFECTS: runs one round of rock paper scissors
function playRound(humanChoice,computerChoice) {
    
}