import calculateWinner from './calculateWinner';
import './Game.css';
import Move from './Move';
import Player from './Player';
import SquareValue from './SquareValue';
import { v4 as uuid } from 'uuid';

export default function calculateNewMove(i: number, oldMove: Move): Move {

    const oldBoard = oldMove.board;
    const oldWinner = oldMove.winner;
    if (oldBoard[i] === null && !oldWinner) {
        const newBoard: SquareValue[] = [...oldBoard.slice(0, i), oldMove.nextPlayer, ...oldBoard.slice(i + 1)];
        const newStepNumber = oldMove.stepNumber + 1;
        const newNextPlayer: Player = oldMove.nextPlayer == 'X' ? 'O' : 'X'
        const newWinner = calculateWinner(newBoard)

        const newMove: Move = {
            board: newBoard,
            winner: newWinner,
            stepNumber: newStepNumber,
            nextPlayer: newNextPlayer,
            reference: uuid(),
            previousMove: oldMove.reference
        }
        return newMove
    }
    return oldMove
}