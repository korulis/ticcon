import React from 'react';
import { useSelector } from 'react-redux'
import Board from './Board';
import './Game.css';
import { GameInfo } from './GameInfo';
import { RootState } from './state/reducers';


const Game: React.FC = () => {
    // class Game extends React.Component<unknown, GameState> {

    const handleClick = (i: number): void => {
        // const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // const current = history[history.length - 1];
        // const squares = current.squares.slice();
        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        // }
        // squares[i] = this.state.xIsNext ? 'X' : 'O';
        // this.setState({
        //     history: history.concat([{
        //         squares: squares,
        //     }]),
        //     stepNumber: history.length,
        //     xIsNext: !this.state.xIsNext,
        // });
    }

    const jumpTo = (step: number): void => {
        // this.setState({
        //     stepNumber: step,
        //     xIsNext: (step % 2) === 0,
        // })
    }

    const state = useSelector((state: RootState) => state.game)


    return (
        <div className="game">
            <Board />
            <GameInfo moves={state.history} jumpTo={(move) => jumpTo(move)} />
        </div>
    );
}


export default Game;
