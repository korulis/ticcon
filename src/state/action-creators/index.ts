import axios, { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import GameState from "../../GameState"
import Move from "../../Move"
import { GameActionType } from "../action-types"
import { GameAction, } from "../actions/index"

export const clickSquare = (newMove: Move) => {
    return async (dispatch: Dispatch<GameAction>): Promise<string> => {
        dispatch({
            type: GameActionType.SQUARE_CLICK, newMove: newMove
        })

        try {
            const payload = await axios.post<{ move: Move },AxiosResponse<{ state: GameState | null }>>("http://localhost:5000/game-state", { move: newMove })

            // console.log("New state:")
            // console.log(payload)
            if(payload.data != null){
                dispatch({
                    type: GameActionType.LOAD_STATE, loadedState: payload.data.state
                })
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // show widget
                return "OK";
            }
            throw error;
        }
        return "OK";
    }
}

export const loadState = () => {
    return async (dispatch: Dispatch<GameAction>): Promise<string> => {

        dispatch({
            type: GameActionType.LOAD_STATE, loadedState: null
        })

        try {
            const payload = await axios.get<{ state: GameState | null }>("http://localhost:5000/game-state")
            console.log(payload.data)
            dispatch({
                type: GameActionType.LOAD_STATE, loadedState: payload.data.state
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // show widget
                return "OK";
            }
            throw error;
        }

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
