import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import './Game.css';
import SquareValue from './SquareValue';
import { clickSquare } from './state/action-creators';
import { RootState } from './state/reducers';

interface SquareProps extends PropsFromRedux {
    index: number
}

interface SquareStateProps {
    board: SquareValue[]
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clickSquare: (index: number) => clickSquare(index)(dispatch)
});

const mapStateToProps = (state: RootState): SquareStateProps => { return { board: state.game.current.board } };
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Square: React.FC<SquareProps> = ({ clickSquare, index, board }) => {

    return (
        <button
            className="square"
            onClick={() => clickSquare(index)}>
            {board[index]}
        </button>
    );
}

export default connector(Square);
