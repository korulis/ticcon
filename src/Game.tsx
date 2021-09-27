import React from 'react';
import { useSelector } from 'react-redux'
import Board from './Board';
import './Game.css';
import { GameInfo } from './GameInfo';
import { RootState } from './state/reducers';


const Game: React.FC = () => {
    // class Game extends React.Component<unknown, GameState> {

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
            <GameInfo history={state.history} jumpTo={(move) => jumpTo(move)} />
        </div>
    );
}


export default Game;
