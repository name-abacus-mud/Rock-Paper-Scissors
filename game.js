let humanScore = 0;
let computerScore = 0;
//  this is for keeping the score for two players

function getComputerChoice(no) {
    num = Math.floor(Math.random()*no);

    switch(num) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}
// this will get the choice from the computer

function getHumanChoice() {
    choice = prompt('please enter your choice!!');

    return choice
}
// this will take input from the human and return it 

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase(); 
    // making the input case-insensitive

    if (humanChoice=='rock' && computerChoice=='paper') {
        console.log('You lose! Paper beats Rock')
        ++computerScore
    } else if (humanChoice=='paper' && computerChoice=='rock') {
        console.log('You win! Paper beats Rock')
        ++humanScore
    } else if (humanChoice=='rock' && computerChoice=='scissors') {
        console.log('You win! Rock beats Scissors')
        ++humanScore
    } else if (humanChoice=='scissors' && computerChoice=='rock') {
        console.log('You lose! Rock beats Scissors')
        ++computerScore
    } else if (humanChoice=='paper' && computerChoice=='scissors') {
        console.log('You lose! Scissors beats Paper')
        ++computerScore
    } else if (humanChoice=='scissors' && computerChoice=='paper') {
        console.log('You win! Scissors beats Paper')
        ++humanScore
    }
    // lots of if else lol
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);
// i don't know why const is used here /sob

playRound(humanSelection, computerSelection);