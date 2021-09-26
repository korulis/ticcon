import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Game.css';
import SquareValue from './SquareValue';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

const Square: React.FC = () => {

    const state = useSelector((state: RootState) => state.square)
    
    const dispatch = useDispatch();

    const { clickSquare } = bindActionCreators(actionCreators, dispatch)


    return (
        <button
            className="square"
            onClick={()=>clickSquare('X')}
        >
            {state.squareValue}
        </button>
    );
}

export default Square;
