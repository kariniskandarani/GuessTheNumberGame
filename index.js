let randomNumber = Math.floor(Math.random() * 100) + 1
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')
const button = document.querySelector('.button-div')
let resetButton
let guessCount = 1

function checkGuess () {
  const userGuess = parseInt(guessField.value)
  console.log(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = 'Previous Guesses: '
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations!! You got this right!'
    lastResult.className = 'lastResult text-bg-success p-3'
    lowOrHigh.textContent = ''
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = 'GAME OVER !!'
    lowOrHigh.textContent = ''
    setGameOver()
  } else {
    lastResult.textContent = 'Wrong Guess!!'
    lastResult.className = ' lastResult text-bg-danger p-3'
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = 'Last Guess was too low'
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = 'Last Guess was too high'
    }
  }
  guessCount++
  guessField.value = null
  guessField.focus()
}
guessSubmit.addEventListener('click', checkGuess)
function setGameOver () {
  guessField.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.innerText = 'New Game'
  button.append(resetButton)
  resetButton.className = 'btn btn-dark'
  resetButton.addEventListener('click', resetGame)
}

function resetGame () {
  guessCount = 1
  lastResult.textContent = ''
  guesses.textContent = ''
  resetButton.parentNode.removeChild(resetButton)
  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = null
  guessField.focus()
  lastResult.className = 'lastResult'
  randomNumber = Math.floor(Math.random() * 100) + 1
}
