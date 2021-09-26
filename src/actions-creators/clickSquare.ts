import { Dispatch } from "react";
import { AnyAction } from "redux";
import Player from "../Player";

const clickSquare = (player: Player) => {
    return (dispatch: Dispatch<AnyAction>): void => {
        dispatch({
            type: "SQUARE_CLICK", player: player
        })
    }
}

export default clickSquare