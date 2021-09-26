import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import gameReducer from "./gameReducer";


const reducers = combineReducers({
    bank: bankReducer,
    game: gameReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>