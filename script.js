// Computer Choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ["Scissors", "Paper", "Rock"];
  console.log(choices[choice]);
}

getComputerChoice();
