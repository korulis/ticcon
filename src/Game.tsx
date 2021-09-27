import React from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner';
import './Game.css';
import { GameInfo } from './GameInfo';
import Move from './Move';
import SquareValue from './SquareValue';

interface GameState {
    history: Move[],
    stepNumber: number,
    xIsNext: boolean,
}

class Game extends React.Component<unknown, GameState> {
    constructor(props: unknown) {
        super(props);
        const secondBoard = { squares: Array<SquareValue>(9).fill(null) };
        secondBoard.squares[0] = 'X';
        this.state = {

            history: [{ squares: Array<SquareValue>(9).fill(null) }, secondBoard],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick = (i: number): void => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo = (step: number): void => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render = (): JSX.Element => {
        const history: Move[] = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <Board />
                <GameInfo status={status} moves={history} jumpTo={(move) => this.jumpTo(move)} />
            </div>
        );
    }
}

export default Game;
