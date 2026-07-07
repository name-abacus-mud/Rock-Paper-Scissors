// this will get the choice from the computer
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

// this will take input from the human and return it 
function getHumanChoice() {
    choice = prompt('please enter your choice!!');
    lowercaseChoice = choice.toLowerCase();
    // making the input case sensitive

    return lowercaseChoice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //  this is for keeping the score for two players

    function playRound(humanChoice, computerChoice) { 

        if (humanChoice=='rock' && computerChoice=='paper') {
            console.log('You lose! Paper beats Rock')
            ++computerScore;
        } else if (humanChoice=='paper' && computerChoice=='rock') {
            console.log('You win! Paper beats Rock')
            ++humanScore;
        } else if (humanChoice=='rock' && computerChoice=='scissors') {
            console.log('You win! Rock beats Scissors')
            ++humanScore;
        } else if (humanChoice=='scissors' && computerChoice=='rock') {
            console.log('You lose! Rock beats Scissors')
            ++computerScore;
        } else if (humanChoice=='paper' && computerChoice=='scissors') {
            console.log('You lose! Scissors beats Paper')
            ++computerScore;
        } else if (humanChoice=='scissors' && computerChoice=='paper') {
            console.log('You win! Scissors beats Paper')
            ++humanScore;
        } else {
            console.log('you both chose the same thing! try again!')
        }
    }
}

playGame();