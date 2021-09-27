import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Game.css';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

interface GameStatusProps {
    status: string;
}
export const GameSatus: React.FC<GameStatusProps> = (props: GameStatusProps) => {


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
