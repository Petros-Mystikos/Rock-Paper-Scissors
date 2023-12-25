// querySelector
const welcomeName = document.querySelector('.welcome');
const rounds = document.querySelector('.round');
const points = document.querySelector('.points');
const result = document.querySelector('.winOrLose');
const userChoiceToFight = document.querySelector('.user-choice');
const computerChoiceToFight = document.querySelector('.computer-choice');
const reasonOfResult= document.querySelector('.reasonOfOutput');
const userChoice= document.querySelector('.user-choices');
const gamePlay = document.querySelector('.game');
const gameRestart = document.querySelector('#game-restart');
const restartBtn = document.querySelector('.restart')

// variables
let computerPoint = 0;
let userPoint = 0;
let roundCounter = 0;
let userDecision;
const playAgain = document.createElement('p');

//  player's name
let userName = prompt('Choose your arena name:');

 if (userName !== null && userName !== ''){
     welcomeName.textContent = `Welcome ${userName}`;
 }

//user's choice and game start

userChoice.addEventListener('click', (e) =>{
    let userWeapon = e.target.className; // get the class of the element
    userMove(userWeapon);
    let computerWeapon = computerMove();

    let bothPoints = gameResult(userWeapon, computerWeapon, userPoint, computerPoint,roundCounter); // gets function's return array
    userPoint = bothPoints[0];
    computerPoint = bothPoints[1];
    roundCounter = bothPoints[2];
    points.textContent = `${computerPoint} - ${userPoint}`;
    rounds.textContent = `Round ${roundCounter}`;

    gameStop();

})



// computer's choice and picture to enter the arena
function computerMove(){
    const optionsOfComputer = ['paper', 'rock', 'scissors'];
    let computerChoice = optionsOfComputer[Math.floor(Math.random() * 3)];
    computerChoiceToFight.classList.remove('hide');
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
    userChoiceToFight.classList.remove('hide');
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
function gameResult(user, computer, userCounter, computerCounter, counter){
    if((user === 'user-paper' && computer === 'rock') || (user === 'user-rock' && computer === 'scissors') || (user === 'user-scissors' && computer === 'paper')){
        // win
        result.textContent = 'YOU WIN!!!';
        result.style.color ='green';
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
        result.style.color ='red';
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
        result.style.color ='grey';
        reasonOfResult.textContent = 'Smart minds think the same ... or is this refers to stupid ones;';
    }
    counter += 1;
    return [userCounter,computerCounter,counter];
}

// to stop or not hte game
function gameStop(){
    if (userPoint >= 5 || computerPoint >= 5){
        userDecision = prompt('Do you want to stop; (type yes to stop):');
        userDecision = userDecision.toLowerCase();
        if(userDecision !== 'yes'){
            resetScores();
        }
        else{
            gamePlay.classList.add('hide');
            gameRestart.classList.remove('hide');
            

            // restart button
            restartBtn.addEventListener('click',() =>{
                gamePlay.classList.remove('hide');
                gameRestart.classList.add('hide');
                resetScores();
            })
        }
    }
}

// reset scores
function resetScores (){
    computerPoint = 0;
    userPoint = 0;
    roundCounter = 0;
    points.textContent = `${computerPoint} - ${userPoint}`;
    rounds.textContent = `Round ${roundCounter}`;
    result.textContent ='';
    reasonOfResult.textContent='';
    userChoiceToFight.src ='';
    computerChoiceToFight.src ='';
    userChoiceToFight.classList.add('hide');
    computerChoiceToFight.classList.add('hide');
}