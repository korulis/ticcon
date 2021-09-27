import React from 'react';
import { useSelector } from 'react-redux';
import './Game.css';
import { RootState } from './state/reducers';

export const GameSatus: React.FC = () => {

    const state = useSelector((state: RootState) => state.game)
    
    let statusText;
    if (state.winner) {
        statusText = 'Winner: ' + state.winner;
    } else {
        statusText = 'Next player: ' + (state.currentPlayer === 'O' ? 'X' : 'O');
    }

    return (
        <div>{statusText}</div>
    );
};
