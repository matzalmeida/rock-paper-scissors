function getComputerChoice() {
    let choice = Math.random();
    console.log(choice);
    if (choice >= 0.66) {
        return "rock";
    } else if (choice >= 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

let round = 1;
let wins = 0;
let draws = 0;
let loses = 0;
let score_computer = 0;
let score_player = 0;

const game = document.getElementById("game");
const challenge = document.getElementById("challenge");
const endScreen = document.getElementById("endScreen");
const choices = document.getElementById("choices");
const question = document.getElementById("question");

function startGame() {
    round = 1;
    score_computer = 0;
    score_player = 0;
    challenge.style.display = "none";
    game.style.display = "flex";
    roundText.innerHTML = round;
    messageText.innerHTML = "You accepted the Bo5 Rock-Paper-Scissors battle!";
    scorePlayer.innerHTML = score_player;
    scoreEnemy.innerHTML = score_computer;
}

const playButton = document.getElementById("playButton");
playButton.addEventListener('click', startGame);

const playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener('click', () => {
    game.style.display = "none";
    challenge.style.display = "flex";
    endScreen.style.display = "none";
    choices.style.display = "flex";
    question.style.display = "block";
});

const winText = document.getElementById("winText");
const drawText = document.getElementById("drawText");
const lossText = document.getElementById("lossText");
const endScreenText = document.getElementById("endScreenText");

function endGame() {
    let endGameText;
    if (score_computer > score_player) {
        endGameText = "You lost the battle against The Computer! :("
        loses++;
    } else if (score_computer < score_player) {
        endGameText = "You won the battle against The Computer! :D"
        wins++;
    } else {
        endGameText = "The battle against The Computer turns out to be a draw!"
        draws++;
    }
    winText.innerHTML = wins;
    drawText.innerHTML = draws;
    lossText.innerHTML = loses;
    roundText.innerHTML = round;
    endScreen.style.display = "flex";
    endScreenText.innerHTML = endGameText;
    choices.style.display = "none";
    question.style.display = "none";
}

const messageText = document.getElementById("message");
const scorePlayer = document.getElementById("scorePlayer");
const scoreEnemy = document.getElementById("scoreEnemy");
const roundText = document.getElementById("round");

function updateStuff(message) {
    messageText.innerHTML = message;
    scorePlayer.innerHTML = score_player;
    scoreEnemy.innerHTML = score_computer;
    roundText.innerHTML = round;
    if (round == 5) {
        endGame();
    }
    round++;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let message = `The computer chose ${computerChoice}.<br> You chose ${humanChoice}.<br>`;
    if (
        computerChoice == "rock" && humanChoice == "paper" || 
        computerChoice == "paper" && humanChoice == "scissors" ||
        computerChoice == "scissors" && humanChoice == "rock"
    ) {
        message = `${message} <span class="won-text">You won the round! :D</span>`;
        score_player++;
    } else if (
        computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper"
    ) {
        message = `${message} <span class="lost-text">You lost the round! :(</span>`;
        score_computer++;
    } else {
        message = `${message} The round is a draw.`;
    }
    updateStuff(message);
}

let humanChoice;

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', () => {
    humanChoice = "rock";
    playRound(humanChoice);
})

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', () => {
    humanChoice = "paper";
    playRound(humanChoice);
})

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    humanChoice = "scissors";
    playRound(humanChoice);
})