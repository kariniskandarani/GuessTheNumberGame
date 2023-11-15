# Guess the Number Game 
## Table of Contents
- [Guess the Number Game](#guess-the-number-game)
  - [Table of Contents](#table-of-contents)
  - [The Motive behind Creating this Game](#the-motive-behind-creating-this-game)
  - [Game Description](#game-description)
  - [Used for this Project ](#used-for-this-project-)
  - [Packages Used ](#packages-used-)
  - [Functions Created](#functions-created)
  - [Logic and Rules for this Game](#logic-and-rules-for-this-game)
  - [Helpful Links](#helpful-links)


## The Motive behind Creating this Game 
* JavaScript warm up
* README File writing 

## Game Description 
<a name='Game Description'></a>
Hello! This is Guess the Number game. You have to guess a number between 1 and 100 inclusively. You have up to 10 turns to guess the correct number. With each guess, you'll have a hint whether number is high or low. Your guesses will be reserved and shown so you could keep track of them. 


## Used for this Project <div id="used-for-this-project-"></div>
To Create the game, I used __HTML__ ,  __bootstrap__ , __CSS__ , and __JavaScript__.

## Packages Used <div id="packages-used-"></div>
**standard** npm local package for this project as a linter tool. 

To install standard locally, for use in a single project:

     npm install standard --save-dev 

To use it: 

     npx standard 

You can check more about it in the [helpful Links](#helpful-links) section.

## Functions Created 
1. checkGuess()
2. setGameOver()
3. resetGame()

## Logic and Rules for this Game
__checkGuess()__
* User have 10 turns to guess the number
* For each guess we have to make sure of the following
  * if the user guess === to the random number then we display congratulations
  * if the user guess > random number then we display that the guess is too high.
  * if the user guess < random number then we display that the guess is too low.
* At the end during checkGuess() we have to:
    *  increment the count of the guesses 
    *  make sure that nothing is displayed
* if the guess count = 10 then we setGameOver()
__Note__ _make sure to display the user's previous guess each time_

__setGameOver()__
when the game is over disable the field input and the submit button and change the result to game over. A new game button should appear. Once this button is clicked we reset the game.

__resetGame()__
* input field will be empty
* the guess count is back to be equal to 1 
* the previous guesses section is empty
* the computer sets a new random number for this round

## Helpful Links 
[JavaScript Quick Recap](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

[HTML and CSS Recap Repo -- by larymak](https://github.com/larymak/Html-Css-Recap/tree/master)

[What is a README file and why write it?](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)