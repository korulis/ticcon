import calculateWinner from "../../calculateWinner";
import Move from "../../Move";
import Player from "../../Player";
import SquareValue from "../../SquareValue";
import { GameActionType } from "../action-types";
import { GameAction } from "../actions";
import { cloneDeep } from "lodash";

type History = Move[];

interface GameState {
    current: Move;
    history: History;
}

const initialMove: Move = {
    board: Array<SquareValue>(9).fill(null),
    nextPlayer: 'X',
    winner: null,
    stepNumber: 0
};

const initialState: GameState = {
    current: initialMove,
    history: [initialMove],
};

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionType.SQUARE_CLICK:
            const i = action.index;
            const oldBoard = state.current.board;
            const oldWinner = state.current.winner;
            if (oldBoard[i] === null && !oldWinner) {
                const newStepNumber = state.current.stepNumber + 1;
                const newSquare = state.current.nextPlayer;
                const newBoard: SquareValue[] = [...oldBoard.slice(0, i), newSquare, ...oldBoard.slice(i + 1)];
                const newNextPlayer: Player = state.current.nextPlayer == 'X' ? 'O' : 'X'
                const newWinner = calculateWinner(newBoard)
                const newCurrent: Move = { board: newBoard, winner: newWinner, stepNumber: newStepNumber, nextPlayer: newNextPlayer }
                const newHistory: History = cloneDeep(state.history.slice(0, newStepNumber).concat(newCurrent))
                const newState: GameState = {
                    ...state,
                    current: newCurrent,
                    history: newHistory
                };
                return newState
            }
            return state;
        case GameActionType.MOVE_CLICK:
            const step = action.index;

            const newState: GameState = {
                ...state,
                current: state.history[step]
            };

            return newState;
        default:
            return state;
    }
}

export default gameReducer


