import Move from "./Move";

interface GameState {
    current: Move;
    history: Move[];
}

export default GameState

