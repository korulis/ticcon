import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Game.css';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

export const GameHistory: React.FC = () => {

    const state = useSelector((state: RootState) => state.game)

    const dispatch = useDispatch();

    const { jumpTo } = bindActionCreators(actionCreators, dispatch)

    const moves = state.history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <ol>{moves}</ol>
    );
};
