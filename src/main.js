import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const results = ['You won!', 'You lost...', 'It is a draw']

function random() {
    return Math.floor(Math.random() * 3)
}

function makeChoice() {
    const choice = this.dataset.choice
    console.log(choice)
    result.innerText = results[random()]
}

const choices = document.querySelectorAll('.choice')
const result = document.querySelector('#result')

choices.forEach((button) => {
    button.addEventListener('click', makeChoice)
})
