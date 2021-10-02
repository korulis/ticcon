import { Dispatch } from "redux"
import { GameActionType } from "../action-types"
import { GameAction,  } from "../actions/index"

export const clickSquare = (index: number) => {
    return (dispatch: Dispatch<GameAction>): void => {
        dispatch({
            type: GameActionType.SQUARE_CLICK, index: index
        })
    }
}

export const jumpTo = (index: number) => {
    return (dispatch: Dispatch<GameAction>): void => {
        dispatch({
            type: GameActionType.MOVE_CLICK, index: index
        })
    }
}
