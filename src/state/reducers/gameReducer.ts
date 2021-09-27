import calculateWinner from "../../calculateWinner";
import Move from "../../Move";
import Player from "../../Player";
import SquareValue from "../../SquareValue";
import { GameActionType } from "../action-types";
import { GameAction } from "../actions";

interface GameState {
    winner: Player | null;
    board: SquareValue[];
    nextPlayer: Player;
    history: Move[];
    stepNumber: number;
}

const initialState: GameState = {
    board: Array<SquareValue>(9).fill(null),
    nextPlayer: 'X',
    winner: null,
    history: [],
    stepNumber: 0
};

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionType.SQUARE_CLICK:
            const oldSquares = state.board;
            const index = action.index;
            if (oldSquares[index] === null && !state.winner) {
                const newHistory =  [...state.history.slice(), { board: state.board.slice() }] ;
                const newStepNumber = history.length;
                const newSquare = state.nextPlayer;
                const newSquares: SquareValue[] = [...oldSquares.slice(0, index), newSquare, ...oldSquares.slice(index + 1)];
                const oldNextPlayer = state.nextPlayer;
                const newNextPlayer: Player = oldNextPlayer == 'X' ? 'O' : 'X'
                const newWinner = calculateWinner(newSquares)
                const newState: GameState = {
                    ...state,
                    board: newSquares,
                    nextPlayer: newNextPlayer,
                    winner: newWinner,
                    stepNumber: newStepNumber,
                    history: newHistory
                };
                return newState
            }
            return state;
        case GameActionType.MOVE_CLICK:
            const step = action.index;
            const currentPlayer = (step % 2) === 0 ? 'X' : 'O';

            const newState: GameState = {
                ...state,
                nextPlayer: currentPlayer,
                stepNumber: step,
            };

            return newState;
        default:
            return state;
    }
}

export default gameReducer


