import React from 'react';
import { GameSatus } from './GameStatus';
import { Move } from './Game';
import { GameHistory } from './GameHistory';

interface GameInfoProps {
    status: string;
    moves: Move[];
    jumpTo: (move: number) => void;
}

export const GameInfo: React.FC<GameInfoProps> = (props: GameInfoProps) => {

    return (
        <div className="game-info">
            <GameSatus status={props.status} />
            <GameHistory jumpTo = {props.jumpTo} moves={props.moves} />
        </div>
    );
};



