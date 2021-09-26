import { AnyAction } from "redux";
import Player from "../Player";
import SquareValue from "../SquareValue";

type SquareAction = AnyAction & { index: number, player: Player };

// const squareAction1: AnyAction = { type: "SQUARE_CLICK", index: 0 };

const initialState: SquareValue = null;

const squareActionReducer = (state: SquareValue = initialState, action: AnyAction): SquareValue => {
    switch (action.type) {
        case "SQUARE_CLICK":
            return state === null ? action.player : state;
        default:
            return state;
    }
}

export default squareActionReducer