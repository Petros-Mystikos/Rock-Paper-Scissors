let computerChoices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let ComputerPoints = 0;
let start = true;

game(start)


// below this line are the functions that we use //

function game(startGame){
    while (startGame){
        while (userPoints != 5 && ComputerPoints != 5) {
            let createBothChoices = choices();
            let computerChoice = createBothChoices[0]
            let userInput = createBothChoices[1]
            let points = choicesComparison(userInput,computerChoice, userPoints, ComputerPoints);
            userPoints = points[0];
            ComputerPoints = points[1];
        }

        if (userPoints == 5){
            console.log('Congratulations you won');
        }
        else {
            
            console.log('You lost against the computer');
        }
        console.log('GAME OVER')

        let userDecision = prompt('type yes if you want to stop or anything to continue playing');
        userDecision = userDecision.toLowerCase();
        if(userDecision == 'yes'){
            startGame = false;
        }
        else{
            userPoints = 0;s
            ComputerPoints = 0;
        }
    }   
}

function choices(pc, user){
    pc = computerChoices[Math.floor(Math.random() * 3)];
    user = prompt('Choose your weapon against your opponent (rock, paper, scissors)');
    while( user != 'rock' && user != 'paper' && user != 'scissors'){
    user = prompt('Choose again, write the whole word  (rock, paper, scissors)');
    user = user.toLowerCase();
    }
    return [pc, user];
}

function choicesComparison(userChoice, computerChoice, userCounter, ComputerCounter){

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
    return [userCounter, ComputerCounter];
}