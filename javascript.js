let computerChoices = ['rock', 'paper', 'scissors'];

let userCounter = 0;
let ComputerCounter = 0;

while( userCounter != 5 && ComputerCounter != 5){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomNumber];
    console.log(computerChoice);
    let userChoice = prompt('Choose your weapon against your opponent (rock, paper, scissors)');
    
    while( userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
    userChoice = prompt('Choose again, write the whole word  (rock, paper, scissors)');
    userChoice = userChoice.toLowerCase();
    }

    if (userChoice == 'rock'){
        if (computerChoice == 'scissors'){
            console.log( ' Your Opponent chose scissors. You win, rock beats scissors');
            userCounter++;
        }
        else if (computerChoice == 'paper'){
            console.log('Your Opponent chose paper. You lose, rock loses to paper');
            ComputerCounter++;
        }
        else{
            console.log('Your Opponent chose rock. Its a tie, rock vs rock');
        }
    }

    if (userChoice == 'paper'){
        if (computerChoice == 'rock'){
            console.log( ' Your Opponent chose rock. You win, paper beats rock');
            userCounter++;
        }
        else if (computerChoice == 'scissors'){
            console.log('Your Opponent chose scissors. You lose, paper loses to scissors ');
            ComputerCounter++;
        }
        else{
            console.log('Your Opponent chose paper. Its a tie, paper vs paper');
        }
    }

    if (userChoice == 'scissors'){
        if (computerChoice == 'paper'){
            console.log( ' Your Opponent chose paper. You win, scissors beats paper');
            userCounter++;
        }
        else if (computerChoice == 'rock'){
            console.log('Your Opponent chose rock. You lose, scissors loses to rock ');
            ComputerCounter++;
        }
        else{
            console.log('Your Opponent chose scissors. Its a tie, scissors vs scissors');
        }
    }
}

if (userCounter == 5){
    console.log('Congratulations you won');
}
else {
    console.log('You lost again the computer');
}