let i = 0;
let playerchoice;
let computerchoice;

function getComputerChoice() {
    if (i === 0) {
        computerchoice = "rock";
        i += 1;
    } else if (i === 1) {
        computerchoice = "paper";
        i += 1;
    } else if (i === 2) {
        computerchoice = "scissors";
        i += 1;
    } else {
        i = 0;
    }
}

var rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
  playerchoice = 'rock';
  if (j < 5 && k < 5) {
    game();
  } else if (j == 5) {
    alert("Player Won! Score " + j + "-" + k);
  } else {
    alert("Computer Won! Score " + j + "-" + k);
  }
});

var paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
  playerchoice = 'paper';
  if (j < 5 && k < 5) {
    game();
  } else if (j == 5) {
    alert("Player Won! Score " + j + "-" + k);
  } else {
    alert("Computer Won! Score " + j + "-" + k);
  }
});

var scissor = document.querySelector('#scissor');
scissor.addEventListener('click', function() {
  playerchoice = 'scissor';
  if (j < 5 && k < 5) {
    game();
  } else if (j == 5) {
    alert("Player Won! Score " + j + "-" + k);
  } else {
    alert("Computer Won! Score " + j + "-" + k);
  }
});


let j = 1;
let k = 1;

function game() {
    getComputerChoice();

    if (playerchoice === "rock" && computerchoice === "scissors") {
        alert("Player +1");
        j++;
    } else if (playerchoice === "paper" && computerchoice === "rock") {
        alert("Player +1");
        j++;
    } else if (playerchoice === "scissors" && computerchoice === "paper") {
        alert("Player +1");
        j++;
    } else {
        alert("Computer +1");
        k++;
    }
}

var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
  // Reset scores and game state
  j = 1;
  k = 1;
  i = 0;
  playerchoice = null;
  computerchoice = null;
});
