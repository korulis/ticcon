import calculateWinner from "../../calculateWinner";
import Move from "../../Move";
import Player from "../../Player";
import SquareValue from "../../SquareValue";
import { GameActionType } from "../action-types";
import { GameAction } from "../actions";

interface CurrentGameState {
    winner: Player | null;
    squareValues: SquareValue[],
    currentPlayer: Player,
}

const initialState: CurrentGameState = {
    squareValues: Array<SquareValue>(9).fill(null),
    currentPlayer: 'X',
    winner: null
};

const currentStateReducer = (state: CurrentGameState = initialState, action: GameAction): CurrentGameState => {
    switch (action.type) {
        case GameActionType.SQUARE_CLICK:
            const oldSquares = state.squareValues;
            const index = action.index;
            if (oldSquares[index] === null) {
                const newSquare = state.currentPlayer;
                const newSquares: SquareValue[] = [...oldSquares.slice(0, index), newSquare, ...oldSquares.slice(index + 1)];
                const oldPlayer = state.currentPlayer;
                const newPlayer: Player = oldPlayer == 'X' ? 'O' : 'X'
                const newWinner = calculateWinner(newSquares)
                const newState: CurrentGameState = { ...state, squareValues: newSquares, currentPlayer: newPlayer, winner: newWinner };
                return newState
            }
            return state;
        default:
            return state;
    }
}

export default currentStateReducer


