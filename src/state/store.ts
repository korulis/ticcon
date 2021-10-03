import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";

// todo kb: try loading initial state from webapi here.
export const commonStore = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)