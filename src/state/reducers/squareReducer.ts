import SquareValue from "../../SquareValue";
import { SquareActionType } from "../action-types";
import { SquareAction } from "../actions";

interface SquareState {
    squareValue: SquareValue
}

const initialState: SquareState = { squareValue: null };

const squareReducer = (state: SquareState = initialState, action: SquareAction): SquareState => {
    switch (action.type) {
        case SquareActionType.CLICK:
            return state.squareValue === null ? { ...state, squareValue: action.player } : state;
        default:
            return state;
    }
}

export default squareReducer