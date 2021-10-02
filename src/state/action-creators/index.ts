import axios from "axios"
import { Dispatch } from "redux"
import { GameActionType } from "../action-types"
import { GameAction, } from "../actions/index"

export const clickSquare = (squareIndex: number) => {
    return (dispatch: Dispatch<GameAction>): void => {
        dispatch({
            type: GameActionType.SQUARE_CLICK, squareIndex: squareIndex
        })
    }
}

export const loadState = () => {
    return (dispatch: Dispatch<GameAction>): void => {
        console.log("AAAAAAAAAAAAAAAA");
        dispatch({
            type: GameActionType.LOAD_STATE
        })
    }
}

export const jumpTo = (index: number) => {
    return async (dispatch: Dispatch<GameAction>): Promise<string> => {
        dispatch({
            type: GameActionType.MOVE_CLICK, index: index
        })
        // const payload = await axios.get("http://localhost:5000/game-state")
        // console.log(payload.data);
        return "OK";
    }
}
