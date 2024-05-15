console.log("Script Loaded");

//1. Generate computer choice using math.floor and math.random
function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (comChoice){
        case 1:
            comChoice = "rock";
            break;
        case 2:
            comChoice = "paper";
            break;
        case 3:
            comChoice = "scissors";
            break;
    }
    console.log(comChoice);
    return comChoice;
}

//2. Use prompt to get user choice
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();

    while (humanChoice != "rock" && humanChoice != "paper" && 
    humanChoice != "scissors" ){
        humanChoice = prompt("That was not an valid input. Try again: rock, paper or scissors");
    }

    return(humanChoice);
}

//3. Declare a winner and use variables to keep track of scores

//4. Write a logic that allows the game to be played in rounds. 
//   Increment score for winner of round
let computerScore = 0;
let humanScore = 0;
let matchRound = 0;
function gameRound(getComputerChoice, getHumanChoice){
    let winnerFound = false;
    let computerChoice;
    let humanChoice;

    while (!winnerFound){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        if( computerChoice == humanChoice){
            alert("Game was a tie");
        }
        else if(computerChoice == "rock" && humanChoice == "scissors"){
            computerScore++;
            winnerFound = true;
        }
        else if(computerChoice == "paper" && humanChoice == "rock"){
            computerScore++;
            winnerFound = true;
        }
        else if(computerChoice == "scissors" && humanChoice == "paper"){
            computerScore++;
            winnerFound = true;
        }
        else{
            humanScore++
            winnerFound = true;
        }
    }
    matchRound++
    alert(`Round ${matchRound} \n
    You chose ${humanChoice} and the computer chose ${computerChoice} \n
    Computer score: ${computerScore} Human score: ${humanScore}`);
}


//5. Game will play 5 rounds and check for a winner at the end (for loop)
for (let i = 0; i < 5; i++) {
    gameRound(getComputerChoice, getHumanChoice);
  }

switch (true){
    case computerScore > humanScore:
        alert(`Computer score: ${computerScore} Human score: ${humanScore}\n
        Computer Wins!`);
        break;
    case computerScore < humanScore:
        alert(`Computer score: ${computerScore} Human score: ${humanScore}\n
        Human Wins!`);
        break;
}