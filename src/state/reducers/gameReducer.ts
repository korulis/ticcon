import calculateWinner from "../../calculateWinner";
import Move from "../../Move";
import Player from "../../Player";
import SquareValue from "../../SquareValue";
import { GameActionType } from "../action-types";
import { GameAction } from "../actions";

interface GameState {
    winner: Player | null;
    board: SquareValue[],
    currentPlayer: Player,
    history: Move[],
    stepNumber: number,
}

const initialState: GameState = {
    board: Array<SquareValue>(9).fill(null),
    currentPlayer: 'X',
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
                const newHistory = [...state.history.slice(), { squares: state.board.slice() }];
                const newStepNumber = state.stepNumber + 1;
                const newSquare = state.currentPlayer;
                const newSquares: SquareValue[] = [...oldSquares.slice(0, index), newSquare, ...oldSquares.slice(index + 1)];
                const oldPlayer = state.currentPlayer;
                const newPlayer: Player = oldPlayer == 'X' ? 'O' : 'X'
                const newWinner = calculateWinner(newSquares)
                const newState: GameState = {
                    ...state,
                    board: newSquares,
                    currentPlayer: newPlayer,
                    winner: newWinner,
                    stepNumber: newStepNumber,
                    history: newHistory
                };
                return newState
            }
            return state;
        default:
            return state;
    }
}

export default gameReducer


