let computerChoices = ['rock', 'paper', 'scissors'];
let randomNumber = Math.floor(Math.random() * 3);

let computerChoice = computerChoices[randomNumber];

let userChoice = prompt('Choose your weapon against your opponent (rock, paper, scissors)');
while( userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
    userChoice = prompt('Choose again, write the whole word  (rock, paper, scissors)');
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
}
console.log('done');