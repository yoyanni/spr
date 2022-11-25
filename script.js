// Global Score
let player = 0;
let pc = 0;

// Button Elements
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");

// Button EventListeners
scissors.addEventListener("click", getPlayerChoice);
paper.addEventListener("click", getPlayerChoice);
rock.addEventListener("click", getPlayerChoice);

// Result Displays
const result = document.getElementById("result");
const result1 = document.getElementById("result1");

// Player Choice
function getPlayerChoice(e) {
  let choice = e.target.value;
  if (choice == "scissors" || choice == "paper" || choice == "rock") {
    return playRound(choice, getComputerChoice());
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

// One Game Round - Decides who has won depending on params
function playRound(playerSelection, computerSelection) {
  switch (gameOver()) {
    case playerSelection == "scissors" && computerSelection == "paper":
    case playerSelection == "paper" && computerSelection == "rock":
    case playerSelection == "rock" && computerSelection == "scissors":
      result.textContent = "You won that one!";
      player++;
      return score("player");
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
    case playerSelection == "paper" && computerSelection == "scissors":
    case playerSelection == "rock" && computerSelection == "paper":
      result.textContent = "You lost that one!";
      pc++;
      return score("pc");
      break;
    case playerSelection == computerSelection:
      result.textContent = "It's a draw!";
      break;
    case "gameover":
      result.textContent = "The game has already finished..";
      break;
    default:
      console.log("Something went wrong.. please try again.");
      break;
  }
}

//5 round game
function score(winner) {
  if (winner == "player") {
    
  } else if (winner == "pc") {
    
  }

  if (player > pc) {
    if (player >= 5) {
      result1.textContent = "You've won!";
    } else {
      result1.textContent = `You are winning! ${player} vs ${pc}`;
    }
  } else if (pc > player) {
    if (pc >= 5) {
      result1.textContent = "You've lost!";
    } else {
      result1.textContent = `You are losing! ${player} vs ${pc}`;
    }
  } else {
    result1.textContent = `It is a draw so far! ${player} vs ${pc}`;
  }
}

function gameOver() {
  if (player >= 5 || pc >= 5) {
    return "gameover";
  } else {
    return true;
  }
}
