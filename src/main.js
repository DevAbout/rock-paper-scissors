import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const results = ['You won!', 'You lost...', 'It is a draw']

const computerChoices = ['rock', 'paper', 'scissors']

// returns a random number from 0 to 2 (0, 1, 2)
function random() {
    return Math.floor(Math.random() * 3)
}

function makeChoice() {
    const choice = this.dataset.choice
    const computerMove = computerChoices[random()]
    // pick a random computer choice
    console.log(choice, computerMove)

    const gameResult = 'TODO' // getResult(choice, computerMove)

    result.innerText = gameResult
}

const choices = document.querySelectorAll('.choice')
const result = document.querySelector('#result')

choices.forEach((button) => {
    button.addEventListener('click', makeChoice)
})
