import React from 'react';
import { GameSatus as GameStatus } from './GameStatus';
import { GameHistory } from './GameHistory';

export const GameInfo: React.FC = () => {

    return (
        <div className="game-info">
            <GameStatus />
            <GameHistory />
        </div>
    );
};



