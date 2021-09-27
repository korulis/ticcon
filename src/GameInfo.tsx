import React from 'react';
import { GameSatus } from './GameStatus';
import Move from "./Move";
import { GameHistory } from './GameHistory';

interface GameInfoProps {
    moves: Move[];
    jumpTo: (move: number) => void;
}

export const GameInfo: React.FC<GameInfoProps> = (props: GameInfoProps) => {

    return (
        <div className="game-info">
            <GameSatus/>
            <GameHistory jumpTo = {props.jumpTo} moves={props.moves} />
        </div>
    );
};



