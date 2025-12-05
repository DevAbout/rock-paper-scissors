// default export, named export

export const loosingMessage = 'You loose!!!'
export const winningMessage = 'You win!!!!!!'

export const drawMessage = 'It is a draw'

export function getGameResult(playerMove, computerMove) {
    // check if player move is rock and computer move is scissors
    // then return winning message

    if (playerMove === 'rock' && computerMove === 'paper') {
        return loosingMessage
    }
    if (playerMove === 'paper' && computerMove === 'scissors') {
        return loosingMessage
    }
    if (playerMove === 'scissors' && computerMove === 'rock') {
        return loosingMessage
    }

    if (playerMove === 'rock' && computerMove === 'scissors') {
        return winningMessage
    }

    if (playerMove === 'paper' && computerMove === 'rock') {
        return winningMessage
    }

    if (playerMove === 'scissors' && computerMove === 'paper') {
        return winningMessage
    }

    return drawMessage
}
