import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";

export const commonStore = createStore(
    reducers,
    {bank:0},
    applyMiddleware(thunk)
)