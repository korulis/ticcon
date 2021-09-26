import React from 'react';
import { Move } from './Game';

interface GameHistoryProps {
    moves: Move[];
    jumpTo: (move: number) => void;
}
export const GameHistory: React.FC<GameHistoryProps> = (props: GameHistoryProps) => {
    const moves = props.moves.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => props.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <ol>{moves}</ol>
    );
};
