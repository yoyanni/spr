### Scissors Paper Rock project for the "The Odin Project"

I will be making a "Scissors Paper Rock" game, it will initially run only in the console but I will be creating a GUI so its easier to use.

## Console Version

# "Create computer choice" commit

I was able to create the function **getComputerChoice** by using the **Math** functions, **floor** and **random**. That helped me get the "random" numbers that would be the choice of the computer and also the array index that would bring back "Scissors", "Paper" or "Rock".

Lastly it console.logs the result for now to confirm the result is a valid option.

# A couple commits later..

The **getPlayerChoice** was added and also **startGame**. The **getPlayerChoice** method would prompt for the choice of "weapon" and then parse the option to be compared in lower case. The **startGame** would get both choices, compare and annouce if the player won or lost.

Then another commit would add the 5 round game logic and would annouce the ULTIMATE winner.

## User Interface Version

# "Refactor game code for UI" commit (spr-ui branch)

A branch was used to refactor the code.

The whole code got altered pretty much, mainly JS side also a bit of HTML to add buttons. EventListeners were added to the buttons to listen for any "click" events. Since the game timeline depends on the user's decision on choosing an option, the buttons they would choose would start the whole process. Calling **getPlayerChoice** would trigger everything, since its called via an event listener the event was passed through. **Player and PC** scores were added globally to track the process and were checked everytime the player made a choice to determine whether the game has been won or lost.
