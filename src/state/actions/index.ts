import GameState from "../../GameState";
import Move from "../../Move";
import { GameActionType } from "../action-types/index"

type SquareAction = {
    type: GameActionType.SQUARE_CLICK,
    newMove: Move
};

type MoveHistoryAction = {
    type: GameActionType.MOVE_CLICK,
    index: number
}

type LoadStateAction = {
    type: GameActionType.LOAD_STATE,
    loadedState: GameState | null
}

export type GameAction = SquareAction | MoveHistoryAction | LoadStateAction