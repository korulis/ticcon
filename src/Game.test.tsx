import { render, screen, } from '@testing-library/react';
import { Provider } from 'react-redux';
import calculateNewMove from './calculateNewMove';
import Game from './Game';
import Move from './Move';
import { commonStore } from './state';
import { clickSquare } from './state/action-creators';
import { GameActionType } from './state/action-types';
import { GameAction } from './state/actions';

test('renders game status', () => {
    render(<Provider store={commonStore}>
        <div>
            <Game />
        </div>
    </Provider>);

    const linkElement = screen.getByText(/Next player/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders next history element', () => {
    render(<Provider store={commonStore}>
        <div>
            <Game />
        </div>
    </Provider>);
    const oldMove: Move = {
        nextPlayer: 'X',
        previousMove: 'someReference',
        reference: 'someOtherReference',
        stepNumber: 1,
        winner: null,
        board: [null, 'O', null, null, null, null, null, null, null]
    }


    clickSquare(oldMove)(commonStore.dispatch)
    const historyElement = screen.getByText(/Go to move #1/i);
    expect(historyElement).toBeInTheDocument();
});


test('new move calculated correctly', () => {
    const oldMove: Move = {
        nextPlayer: 'X',
        previousMove: 'someReference',
        reference: 'someOtherReference',
        stepNumber: 1,
        winner: null,
        board: [null, 'O', null, null, null, null, null, null, null]
    }

    const newMove: Move = calculateNewMove(4, oldMove)

    console.log(newMove.board)
    console.log(oldMove.board)

    expect(newMove.nextPlayer).toBe('O');
    expect(JSON.stringify(newMove.board))
        .toBe(JSON.stringify([null, 'O', null, null, 'X', null, null, null, null]));
    expect(newMove.previousMove).toBe(oldMove.reference)
});