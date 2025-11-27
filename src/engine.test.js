import { expect, describe, it } from 'vitest'

const loosingMessage = 'You loose!!!'
const drawMessage = 'It is a draw'

const moves = ['rock', 'paper', 'scissors', 'rock']

function getGameResult(playerMove, computerMove) {
    const playerMoveIndex = moves.indexOf(playerMove)
    const computerMoveIndex = moves.lastIndexOf(computerMove)

    if (playerMoveIndex + 1 === computerMoveIndex) {
        return loosingMessage
    }

    return drawMessage
}

// write a failing test, make it pass, refactor (clean up)
describe('game result', () => {
    it('should be player looses when the player chooses rock and the computer chooses paper', () => {
        const playerMove = 'rock'
        const computerMove = 'paper'
        const actual = getGameResult(playerMove, computerMove)
        expect(actual).toBe(loosingMessage)
    })

    it('should be player looses when the player chooses paper and the computer chooses scissors', () => {
        const playerMove = 'paper'
        const computerMove = 'scissors'
        const actual = getGameResult(playerMove, computerMove)
        expect(actual).toBe(loosingMessage)
    })

    it('should be player looses when the player chooses scissors and the computer chooses rock', () => {
        const playerMove = 'scissors'
        const computerMove = 'rock'
        const actual = getGameResult(playerMove, computerMove)
        expect(actual).toBe(loosingMessage)
    })

    it('should be a draw when the player the computer choose the same move', () => {
        const moves = ['rock', 'paper', 'scissors']
        moves.forEach((move) => {
            const playerMove = move
            const computerMove = move
            const actual = getGameResult(playerMove, computerMove)
            expect(actual).toBe(drawMessage)
        })
    })
})
