import Player from './Player';
import SquareValue from './SquareValue';

type Move = {
    board: SquareValue[];
    winner: Player | null;
    nextPlayer: Player;
    stepNumber: number;
};

export default Move
