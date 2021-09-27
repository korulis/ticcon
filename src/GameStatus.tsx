import React from 'react';
import { useSelector } from 'react-redux';
import calculateWinner from './calculateWinner';
import './Game.css';
import Player from './Player';
import { RootState } from './state/reducers';

interface GameStatusProps {
    winner: Player | null;
}

export const GameSatus: React.FC = () => {

    const state = useSelector((state: RootState) => state.game)

    const winner = calculateWinner(state.current.board);

    let statusText;
    if (winner) {
        statusText = 'Winner: ' + winner;
    } else {
        statusText = 'Next player: ' + (state.current.nextPlayer);
    }

    return (
        <div>{statusText}</div>
    );
};
