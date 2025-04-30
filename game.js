let random = 0;
let userAns = 0;
let userResult = ""
let botAns = 0;
let botResult = "";
let computerLoses = 0;
let userLoses = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.onclick = () => playGame(1);
paper.onclick = () => playGame(2);
scissors.onclick = () => playGame(3);

const letsPlay = document.getElementById("result");
letsPlay.textContent = "Let's play a game";

function getComputerChoice() {
    random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if(random === 1){
        botAns = 1;
        botResult = "Rock";
    } else if (random === 2) {
        botAns = 2;
        botResult = "Paper";
    } else {
        botAns = 3;
        botResult = "Scissors";
    }
}    

function winner() {

    const resultBox = document.getElementById("result");
    
    if(botAns === userAns) {
        resultBox.textContent = "Tie!!! The bot had " + botResult + " and you had " + userResult;
    } else if((botAns === 1 && userAns === 2) || (botAns === 2 && userAns === 3) || (botAns === 3 && userAns === 1)) {
        resultBox.textContent = "Congrats you won with " + userResult + " vs " + botResult;
        computerLoses++;

        if (computerLoses >= 5) {
            triggerRobotDeath();
        }

    } else {
        resultBox.textContent = "You lose the bot had " + botResult + " and you had " + userResult;
        userLoses++;

        if (userLoses >= 5) {
            triggerYouDied();
        }
    } 
}

function triggerRobotDeath() {
    document.body.innerHTML = `
        <div class="victoryScreen">
            <h1>🎉 YOU WIN 🎉</h1>
            <p>The robot has peacefully shut down, acknowledging your superior skill.</p>
        </div>
    `;
    document.body.classList.add("victoryMode");
}

function triggerYouDied() {
    document.body.innerHTML = `
        <div class="youDiedScreen">
            YOU DIED
        </div>
    `;
    document.body.classList.add("youDiedMode");
}

function playGame(userChoice) {
    
        if (userChoice === 1) {
            userAns = 1;
            userResult = "Rock";
        } else if (userChoice === 2) {
            userAns = 2;
            userResult = "Paper";
        } else {
            userAns = 3;
            userResult = "Scissors";
        }
        getComputerChoice();
        winner();
}

