import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './Board';
import './Game.css';
import { GameInfo } from './GameInfo';
import { actionCreators } from './state';

const Game: React.FC = () => {

    //todo kb: try loading initial state on createStore instead.
    const dispatch = useDispatch();
    const { loadState } = bindActionCreators(actionCreators, dispatch)
    loadState()

    return (
        <div className="game">
            <Board />
            <GameInfo />
        </div>
    );
}

export default Game;
