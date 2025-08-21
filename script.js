function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice >= 2) {
        return "rock";
    } else if (choice >= 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let wins = 0;
let draws = 0;
let loses = 0;

const winText = document.getElementById("winText");
const drawText = document.getElementById("drawText");
const lossText = document.getElementById("lossText");
const messageText = document.getElementById("message");

function updateStuff(message) {
    winText.innerHTML = wins;
    drawText.innerHTML = draws;
    lossText.innerHTML = loses;
    messageText.innerHTML = message;
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    let message = `The computer choose ${computerChoice}. You choose ${humanChoice}.`;
    if (
        computerChoice == "rock" && humanChoice == "paper" || 
        computerChoice == "paper" && humanChoice == "scissor" ||
        computerChoice == "scissors" && humanChoice == "rock"
    ) {
        message = `${message} You won.`;
        wins++;
    } else if (
        computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper"
    ) {
        message = `${message} You lost.`;
        loses++;
    } else {
        message = `${message} It's a draw.`;
        draws++;
    }
    updateStuff(message);
}

let humanChoice;

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', () => {
    humanChoice = "rock";
    playGame(humanChoice);
})

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', () => {
    humanChoice = "paper";
    playGame(humanChoice);
})

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    humanChoice = "scissors";
    playGame(humanChoice);
})