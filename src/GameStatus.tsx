import React from 'react';

interface GameStatusProps {
    status: string;
}
export const GameSatus: React.FC<GameStatusProps> = (props: GameStatusProps) => {
    return (
        <div>{props.status}</div>
    );
};
