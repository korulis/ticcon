import { GameActionType } from "../action-types/index"

type SquareAction = {
    type: GameActionType.SQUARE_CLICK,
    index: number
};

type MoveHistoryAction = {
    type: GameActionType.MOVE_CLICK,
    index: number
}

export type GameAction = SquareAction | MoveHistoryAction