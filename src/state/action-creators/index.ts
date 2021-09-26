import { Dispatch } from "redux"
import { BankActionType, SquareActionType } from "../action-types"
import { BankAction, SquareAction } from "../actions/index"
import Player from "../../Player";

export const clickSquare = (player: Player) => {
    return (dispatch: Dispatch<SquareAction>): void => {
        dispatch({
            type: SquareActionType.CLICK, player: player, index: 0
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