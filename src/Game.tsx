import React from 'react';
import Board from './Board';
import './Game.css';
import { GameInfo } from './GameInfo';

const Game: React.FC = () => {
    return (
        <div className="game">
            <Board />
            <GameInfo />
        </div>
    );
}

export default Game;
