// this will get the choice from the computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// connecting score and result divs to js file here
const displayScore = document.querySelector('#score');
const displayResult = document.querySelector('#result');

//  this is for keeping the score for two players
let humanScore = 0;
let computerScore = 0;

// this is the function for to play the game round
function playRound(humanChoice, computerChoice) { 
    if (humanChoice=='rock' && computerChoice=='paper') {
        displayScore.textContent = 'You lose! Paper beats Rock'
        ++computerScore;
    } else if (humanChoice=='paper' && computerChoice=='rock') {
        displayScore.textContent = 'You win! Paper beats Rock'
        ++humanScore;
    } else if (humanChoice=='rock' && computerChoice=='scissors') {
        displayScore.textContent = 'You win! Rock beats Scissors'
        ++humanScore;
    } else if (humanChoice=='scissors' && computerChoice=='rock') {
        displayScore.textContent = 'You lose! Rock beats Scissors'
        ++computerScore;
    } else if (humanChoice=='paper' && computerChoice=='scissors') {
        displayScore.textContent = 'You lose! Scissors beats Paper'
        ++computerScore;
    } else if (humanChoice=='scissors' && computerChoice=='paper') {
        displayScore.textContent = 'You win! Scissors beats Paper'
        ++humanScore;
    } else {
        displayScore.textContent = 'you both chose the same thing! try again!';
    }

    displayResult.textContent = `computer: ${computerScore}     you: ${humanScore}`;

    if (humanScore==5) {
        displayResult.textContent = 'you won the game!!';
    } else if(computerScore==5) {
        displayResult.textContent = 'you lost and the computer won!!';
    }
}


// adding event listener to the buttons using event delegation
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target

    switch (target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
})