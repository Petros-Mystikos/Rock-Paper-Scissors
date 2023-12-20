// querySelector
const welcomeName = document.querySelector('.welcome');
const rounds = document.querySelector('.round');
const points = document.querySelector('.points');
const result = document.querySelector('.winOrLose');
const userChoiceToFight = document.querySelector('.user-choice');
const computerChoiceToFight = document.querySelector('.computer-choice');
const reasonOfResult= document.querySelector('.reasonOfOutput');
const userChoice= document.querySelector('.user-choices');

// variables
let computerPoint = 0;
let userPoint = 0;
let roundCounter = 0; 


// // player's name
// let userName = prompt('Choose your arena name:');

// if (userName !== null && userName !== ''){
//     welcomeName.textContent = `Welcome ${userName}`;
// }



//user's choice
userChoice.addEventListener('click', (e) =>{
    let userWeapon = e.target.className; // get the class of the element
    userMove(userWeapon);
    let computerWeapon = computerMove();
    let bothPoints = gameResult(userWeapon, computerWeapon, userPoint, computerPoint); // gets function's return array
    userPoint = bothPoints[0];
    computerPoint = bothPoints[1];
    points.textContent = `${computerPoint} - ${userPoint}`;
    roundCounter =+ 1;
    rounds.textContent = `Round ${roundCounter}`;
})

// computer's choice and picture to enter the arena
function computerMove(){
    const optionsOfComputer = ['paper', 'rock', 'scissors'];
    let computerChoice = optionsOfComputer[Math.floor(Math.random() * 3)];

    switch (computerChoice) {
        case 'paper':
            computerChoiceToFight.src ="./public/1F4DC_color.png";
            break;
        case 'rock':
            computerChoiceToFight.src ="./public/1FAA8_color.png";
            break;           
        default:
            computerChoiceToFight.src ="./public/2702_color.png";
            break;
    }
    return computerChoice;
}
 
// user's picture to enter the arena
function userMove(weapon){
    switch (weapon){
        case 'user-paper':
            userChoiceToFight.src = "./public/1F4DC_color.png";
            break;
        case 'user-rock':
            userChoiceToFight.src = "./public/1FAA8_color.png";
            break;
        default:
            userChoiceToFight.src ="./public/2702_color.png";
            break;
        
    }
}

// comparison of the user's and computer's choice
function gameResult(user, computer, userCounter, computerCounter){
    if((user === 'user-paper' && computer === 'rock') || (user === 'user-rock' && computer === 'scissors') || (user === 'user-scissors' && computer === 'paper')){
        // win
        result.textContent = 'YOU WIN!!!';
        userCounter += 1;

        if (computer === 'rock'){
            reasonOfResult.textContent='Paper beats rock';
        }
        else if(computer === 'paper'){
            reasonOfResult.textContent='Scissors beat paper';
        }
        else{
            reasonOfResult.textContent='Rock beats scissors';
        }
    }
    else if((user === 'user-paper' && computer === 'scissors') || (user === 'user-rock' && computer === 'paper') || (user === 'user-scissors' && computer === 'rock')){
        // lose
        result.textContent = 'YOU LOSE!!!';
        computerCounter += 1;

        if (computer === 'rock'){
            reasonOfResult.textContent='Scissors loses to rock';
        }
        else if(computer === 'paper'){
            reasonOfResult.textContent='Rock loses to paper';
        }
        else{
            reasonOfResult.textContent='Paper loses to scissors' ;
        }
    }
    else{
        // tie
        result.textContent= "IT'S A TIE!!!";
        reasonOfResult.textContent = 'Smart minds think the same ... or is this refers to stupid ones;';
    }
    return [userCounter,computerCounter];
}





// let computerChoices = ['rock', 'paper', 'scissors'];
// let userPoints = 0;
// let ComputerPoints = 0;
// let start = true;

// game(start)


// // below this line are the functions that we use //

// // this function starts the game, plays along and at the end gives the player the option to stop playing
// function game(startGame){
//     while (startGame){
//         while (userPoints != 5 && ComputerPoints != 5) {
//             let createBothChoices = choices();
//             let computerChoice = createBothChoices[0]
//             let userInput = createBothChoices[1]
//             let points = choicesComparison(userInput,computerChoice, userPoints, ComputerPoints);
//             userPoints = points[0];
//             ComputerPoints = points[1];
//         }

//         if (userPoints == 5){
//             console.log('Congratulations you won');
//         }
//         else {
            
//             console.log('You lost against the computer');
//         }
//         console.log('GAME OVER')

//         let userDecision = prompt('type yes if you want to stop or anything to continue playing');
//         userDecision = userDecision.toLowerCase();
//         if(userDecision == 'yes'){
//             startGame = false;
//         }
//         else{
//             userPoints = 0;s
//             ComputerPoints = 0;
//         }
//     }   
// }

// // this function creates a random choice for the computer and asks the user his weapon of choice
// function choices(pc, user){
//     pc = computerChoices[Math.floor(Math.random() * 3)];
//     user = prompt('Choose your weapon against your opponent (rock, paper, scissors)');
//     while( user != 'rock' && user != 'paper' && user != 'scissors'){
//     user = prompt('Choose again, write the whole word  (rock, paper, scissors)');
//     user = user.toLowerCase();
//     }
//     return [pc, user];
// }

// // this function compares the choices that the computer and user have and add a point to the winner
// function choicesComparison(userChoice, computerChoice, userCounter, ComputerCounter){

//     if (userChoice == 'rock'){
//         if (computerChoice == 'scissors'){
//             console.log( ' Your Opponent chose scissors. You win, rock beats scissors');
//             userCounter++;
//         }
//         else if (computerChoice == 'paper'){
//             console.log('Your Opponent chose paper. You lose, rock loses to paper');
//             ComputerCounter++;
//         }
//         else{
//             console.log('Your Opponent chose rock. Its a tie, rock vs rock');
//         }
//     }

//     if (userChoice == 'paper'){
//         if (computerChoice == 'rock'){
//             console.log( ' Your Opponent chose rock. You win, paper beats rock');
//             userCounter++;
//         }
//         else if (computerChoice == 'scissors'){
//             console.log('Your Opponent chose scissors. You lose, paper loses to scissors ');
//             ComputerCounter++;
//         }
//         else{
//             console.log('Your Opponent chose paper. Its a tie, paper vs paper');
//         }
//     }

//     if (userChoice == 'scissors'){
//         if (computerChoice == 'paper'){
//             console.log( ' Your Opponent chose paper. You win, scissors beats paper');
//             userCounter++;
//         }
//         else if (computerChoice == 'rock'){
//             console.log('Your Opponent chose rock. You lose, scissors loses to rock ');
//             ComputerCounter++;
//         }
//         else{
//             console.log('Your Opponent chose scissors. Its a tie, scissors vs scissors');
//         }
//     }
//     return [userCounter, ComputerCounter];
// }