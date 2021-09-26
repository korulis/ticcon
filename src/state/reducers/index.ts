import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import squareReducer from "./squareReducer";


const reducers = combineReducers({
    bank: bankReducer,
    square: squareReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>