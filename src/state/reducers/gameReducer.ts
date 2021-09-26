import Player from "../../Player";
import SquareValue from "../../SquareValue";
import { SquareActionType } from "../action-types";
import { SquareAction } from "../actions";

interface GameState {
    squareValue: SquareValue,
    currentPlayer: Player
}

const initialState: GameState = { squareValue: null , currentPlayer: 'X'};

const gameReducer = (state: GameState = initialState, action: SquareAction): GameState => {
    switch (action.type) {
        case SquareActionType.CLICK:
            return state.squareValue === null ? { ...state, squareValue: state.currentPlayer } : state;
        default:
            return state;
    }
}

export default gameReducer