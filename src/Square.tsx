import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Game.css';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

interface SquareProps {
    index: number
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {

    const state = useSelector((state: RootState) => state.game)

    const dispatch = useDispatch();

    const { clickSquare } = bindActionCreators(actionCreators, dispatch)

    return (
        <button
            className="square"
            onClick={() => clickSquare(props.index)}>
            {state.squareValues[props.index]}
        </button>
    );
}

export default Square;
