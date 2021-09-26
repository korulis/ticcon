import Player from "../../Player";
import Square from "../../Square";
import SquareValue from "../../SquareValue";
import { SquareActionType } from "../action-types";
import { SquareAction } from "../actions";

interface GameState {
    squareValues: SquareValue[],
    currentPlayer: Player
}

const initialState: GameState = { squareValues: Array<SquareValue>(9).fill(null), currentPlayer: 'X' };

const gameReducer = (state: GameState = initialState, action: SquareAction): GameState => {
    switch (action.type) {
        case SquareActionType.CLICK:
            const oldSquares = state.squareValues;
            const index = action.index;
            const newSquare = state.currentPlayer;
            const newSquares: SquareValue[] = [...oldSquares.slice(0, index), newSquare, ...oldSquares.slice(index + 1)];
            const newState: GameState = { ...state, squareValues: newSquares };
            return oldSquares[index] === null ? newState : state;
        default:
            return state;
    }
}

export default gameReducer