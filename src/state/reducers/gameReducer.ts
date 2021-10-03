import Move from "../../Move";
import SquareValue from "../../SquareValue";
import { GameActionType } from "../action-types";
import { GameAction } from "../actions";
import GameState from "../../GameState";
import { v4 as uuid } from 'uuid';


const initialMove: Move = {
    board: Array<SquareValue>(9).fill(null),
    nextPlayer: 'X',
    winner: null,
    stepNumber: 0,
    reference: uuid(),
    previousMove: null
};

const initialState: GameState = {
    current: initialMove,
    history: [initialMove],
};

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionType.SQUARE_CLICK:
            {
                const newHistory: Move[] = state.history.slice(0, action.newMove.stepNumber).concat(action.newMove);
                const newState: GameState = {
                    ...state,
                    current: action.newMove,
                    history: newHistory
                };
                return newState;
            }
        case GameActionType.MOVE_CLICK:
            {
                const step = action.index;

                const newState: GameState = {
                    ...state,
                    current: state.history[step]
                };

                return newState;
            }
        case GameActionType.LOAD_STATE:
            {
                if (action.loadedState === null) {
                    return initialState;
                }
                else {
                    return action.loadedState;
                }
            }
        default:
            return state;
    }
}


export default gameReducer


