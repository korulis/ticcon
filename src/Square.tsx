import React from 'react';
import './Game.css';
import SquareValue from './SquareValue';

interface SquareProps {
    // onClick: React.MouseEventHandler<HTMLButtonElement>;
    onClick: () => void;
    value: SquareValue;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
    return (
        <button
            className="square"
            onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    );
}

export default Square;
