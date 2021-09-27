import Player from './Player';
import SquareValue from './SquareValue';
type Move = {
    board: SquareValue[],  
    // winner: Player | null, 
    // nextPlayer: Player,
    // stepNumber: number,
};


// interface GameState {
//     winner: Player | null;
//     board: SquareValue[],
//     nextPlayer: Player,
//     history: { moves: Move[] },
//     stepNumber: number,
// }
export default Move
