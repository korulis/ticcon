import { BankActionType,GameActionType } from "../action-types/index"

type SquareAction = {
    type: GameActionType.SQUARE_CLICK,
    index: number
};

type MoveHistoryAction = {
    type: GameActionType.MOVE_CLICK,
    index: number
}

export type GameAction = SquareAction | MoveHistoryAction

interface DepositAction {
    type: BankActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: BankActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: BankActionType.BANKRUPT
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction;