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
    
    return comChoice;
}

console.log(`The computer has chosen: ${getComputerChoice()}`);


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

console.log(`User has chosen: ${getHumanChoice()}`);

//3. Use variables to keep track of scores

//4. Write a logice that allows the game to be played in rounds. 
//   Increment score for winner of round

//5. Game will play 5 rounds and check for a winner