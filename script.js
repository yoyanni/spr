// Start Game

function startGame(playerSelection, computerSelection) {
  //annouce winner (1 round)
  switch (true) {
    case playerSelection == computerChoice:
      console.log("It's a draw!");
      break;
    case playerSelection == "scissors" && computerChoice == "paper":
      console.log("You win!");
      break;
    case playerSelection == "scissors" && computerChoice == "rock":
      console.log("You lose!");
      break;
    case playerSelection == "paper" && computerChoice == "rock":
      console.log("You win!");
      break;
    case playerSelection == "paper" && computerChoice == "scissors":
      console.log("You lose!");
      break;
    case playerSelection == "rock" && computerChoice == "scissors":
      console.log("You win!");
      break;
    case playerSelection == "rock" && computerChoice == "paper":
      console.log("You lose!");
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

startGame(getPlayerChoice(), getComputerChoice());
