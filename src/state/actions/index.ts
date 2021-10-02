import { GameActionType } from "../action-types/index"

type SquareAction = {
    type: GameActionType.SQUARE_CLICK,
    squareIndex: number
};

type MoveHistoryAction = {
    type: GameActionType.MOVE_CLICK,
    index: number
}

type LoadStateAction = {
    type: GameActionType.LOAD_STATE,
}

export type GameAction = SquareAction | MoveHistoryAction | LoadStateAction