import { Dispatch } from "redux"
import { BankActionType, SquareActionType } from "../action-types"
import { BankAction, SquareAction } from "../actions/index"

export const clickSquare = (index: number) => {
    return (dispatch: Dispatch<SquareAction>): void => {
        dispatch({
            type: SquareActionType.CLICK, index: index
        })
    }
}

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.BANKRUPT
        })
    }
}