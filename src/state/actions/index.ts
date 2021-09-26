import { BankActionType,SquareActionType } from "../action-types/index"

export type SquareAction = {
    type: SquareActionType.CLICK,
    index: number
};

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