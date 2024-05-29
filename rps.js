console.log("Script Loaded");

const container = document.querySelector(".container")

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", () => {
    console.log("Player Rock");
    currentScore.textContent = "";
    gameRound("rock");
});

const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", () => {
    console.log("Player Paper");
    currentScore.textContent = "";
    gameRound("paper");
});

const scissorsBtn = document.querySelector(".scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    console.log("Player Scissors");
    currentScore.textContent = "";
    gameRound("scissors");
});

const scoreBoard = document.querySelector(".scoreBoard");
scoreBoard.textContent = "Game Loaded";

const currentScore = document.querySelector(".currentScore");


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


let computerScore = 0;
let humanScore = 0;
let matchRound = 0;
function gameRound(humanChoice){
    const computerChoice = getComputerChoice();

   if(computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper"
    ){
        computerScore++;
        
    }
    else if (computerChoice !== humanChoice){
        humanScore++
    }

    matchRound++
    currentScore.textContent = `Round ${matchRound} \n
    You chose ${humanChoice} and the computer chose ${computerChoice}`;

    scoreBoard.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
    checkWinner(humanScore, computerScore);
}


function checkWinner(humanscore, computerScore){
   if (humanScore === 5 || computerScore === 5) {
        const finalScore = document.createElement("div");
        finalScore.textContent = humanScore === 5 ? "Congrats, you've won" : "Tough luck... Computer won";
        container.appendChild(finalScore);

        // Disable buttons after the game ends
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}