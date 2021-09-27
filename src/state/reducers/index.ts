import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import currentStateReducer from "./currentStateReducer";


const reducers = combineReducers({
    bank: bankReducer,
    game: currentStateReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>