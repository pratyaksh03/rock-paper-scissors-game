let i = 0;
var playerchoice;
var computerchoice;

function getComputerChoice() {
    if (i == 0) {
        computerchoice = "rock";
        i += 1;
    } else if (i == 1) {
        computerchoice = "paper";
        i += 1;
    } else if (i == 2) {
        computerchoice = "scissors";
        i += 1;
    } else {
        i = 0;
    }
}

function round() {
    if (playerchoice !== "rock" || "scissors" || "paper") {
        alert("Invalid Play");
    }
    else if (playerchoice == "rock" && computerchoice == "scissors") {
        alert("You Won!");
    } else if (playerchoice == "paper" && computerchoice == "rock") {
        alert("You Won!");
    } else if (playerchoice == "scissors" && computerchoice == "paper") {
        alert("You won!");
    } else {
        alert("You lose!");
    }
}

function game() {
    for (let j = 0; j < 5; j++) {
        playerchoice = String(prompt("Your play: "));
        playerchoice = playerchoice.toLowerCase();
        getComputerChoice();
        round();
    }
}

game();
