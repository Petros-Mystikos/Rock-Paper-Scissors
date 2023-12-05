let computerChoices = ['rock', 'paper', 'scissors'];
let randomNumber = Math.floor(Math.random() * 3);

let computerChoice = computerChoices[randomNumber];
console.log(computerChoice);

let userChoice = prompt('Choose your weapon against your opponent (rock, paper, scissors)');
while( userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
    userChoice = prompt('Choose again, write the whole word  (rock, paper, scissors)');
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
}

if (userChoice == 'rock'){
    if (computerChoice == 'scissors'){
        console.log( ' Your Opponent chose scissors. You win, rock beats scissors');
    }
    else if (computerChoice == 'paper'){
        console.log('Your Opponent chose paper. You lose, rock loses to paper');
    }
    else{
        console.log('Your Opponent chose rock. Its a tie, rock vs rock');
    }
}

if (userChoice == 'paper'){
    if (computerChoice == 'rock'){
        console.log( ' Your Opponent chose rock. You win, paper beats rock');
    }
    else if (computerChoice == 'scissors'){
        console.log('Your Opponent chose scissors. You lose, paper loses to scissors ');
    }
    else{
        console.log('Your Opponent chose paper. Its a tie, paper vs paper');
    }
}

if (userChoice == 'scissors'){
    if (computerChoice == 'paper'){
        console.log( ' Your Opponent chose paper. You win, scissors beats paper');
    }
    else if (computerChoice == 'rock'){
        console.log('Your Opponent chose rock. You lose, scissors loses to rock ');
    }
    else{
        console.log('Your Opponent chose scissors. Its a tie, scissors vs scissors');
    }
}