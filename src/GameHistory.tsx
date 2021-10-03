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

    const moves = state.history.map((move, step) => {
        const desc = step ?
            'Go to move #' + step :
            'Go to game start';
        return (
            <li key={step}>
                <button onClick={() => jumpTo(step)}>{desc}</button>
            </li>
        );
    });

    return (
        <ol>{moves}</ol>
    );
};
