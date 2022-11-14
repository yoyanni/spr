// Start Game

game();

function game() {
  //5 round game
  let player = 0;
  let pc = 0;
  let result;
  for (let i = 0; i < 5; i++) {
    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result == "player") {
      ++player;
    } else if (result == "pc") {
      ++pc;
    }
  }
  if (player > pc) {
    console.log(`You won! ${player} vs ${pc}`);
  } else if (pc > player) {
    console.log(`You lost! ${pc} vs ${player}`);
  } else {
    console.log(`It is a draw! ${pc} vs ${player}`);
  }
}

function playRound(playerSelection, computerSelection) {
  //annouce winner (1 round)
  switch (true) {
    case playerSelection == computerSelection:
      console.log("It's a draw!");
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      console.log("You won that one!");
      return "player";
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
      console.log("You lost that one!");
      return "pc";
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      console.log("You won that one!");
      return "player";
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      console.log("You lost that one!");
      return "pc";
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
      console.log("You won that one!");
      return "player";
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      console.log("You lost that one!");
      return "pc";
      break;
    default:
      console.log("Something went wrong.. please try again.");
  }
}

// Player Choice
function getPlayerChoice() {
  let choice = prompt(
    "The choice of your weapon? \n Scissors, Paper or Rock?"
  ).toLowerCase();
  if (choice == "scissors" || choice == "paper" || choice == "rock") {
    return choice;
  } else {
    alert("Please add a valid answer!");
  }
}

// Computer Choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ["Scissors", "Paper", "Rock"];
  return choices[choice].toLowerCase();
}
