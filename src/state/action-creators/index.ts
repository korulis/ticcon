import axios from "axios"
import { Dispatch } from "redux"
import GameState from "../../GameState"
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
    return async (dispatch: Dispatch<GameAction>): Promise<string> => {

        dispatch({
            type: GameActionType.LOAD_STATE, loadedState: null
        })

        const payload = await axios.get<{state:GameState | null}>("http://localhost:5000/game-state")
        console.log(payload.data)
        dispatch({
            type: GameActionType.LOAD_STATE, loadedState: payload.data.state
        })

        return "OK";
    }
}

export const jumpTo = (index: number) => {
    return async (dispatch: Dispatch<GameAction>): Promise<string> => {
        dispatch({
            type: GameActionType.MOVE_CLICK, index: index
        })

        return "OK";
    }
}
