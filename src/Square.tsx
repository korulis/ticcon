import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import calculateWinner from './calculateWinner';
import './Game.css';
import Move from './Move';
import Player from './Player';
import SquareValue from './SquareValue';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

interface SquareProps {
    index: number
}


const calculateNewMove = (i: number, oldMove: Move): Move =>{
    
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
            nextPlayer: newNextPlayer
        }
        return newMove
    }
    return oldMove
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {

    const state = useSelector((state: RootState) => state.game.current)

    const dispatch = useDispatch();
    const { clickSquare } = bindActionCreators(actionCreators, dispatch)

    return (
        <button
            className="square"
            onClick={() => clickSquare(calculateNewMove(props.index, state))}>
            {state.board[props.index]}
        </button>
    );
}

export default Square;
