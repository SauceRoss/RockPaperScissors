let random = 0;
let userAns = 0;
let botAns = 0;
let botResult = "";

function getHumanChoice() {
    let play = prompt("Rock, Paper or Scissors?");

    if (!(play === "r" || play === "p" || play === "s")) {
        console.log("Invalid input. Use r-rock p-paper s-scissors");
    }
    
    if(play === "r"){
        userAns = 1;
        userResult = "Rock";
    } else if (play === "p") {
        userAns = 2;
        userResult = "Paper"
    } else  (play === "s")
        userAns = 3;
        userResult = "Scissors";
    
}

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
    if(botAns === userAns) {
        console.log("Tie!!!")
    }

    if((botAns === 1 && userAns === 2) || (botAns === 2 && userAns === 3) || (botAns === 3 && userAns === 1)) {
        console.log("Congrats you won with " + userAns + " vs " + botAns)
    }else{
        console.log("LMAO the bot had " + botResult + " and you had " + userResult)
    } 

}

getComputerChoice();
getHumanChoice();
winner();