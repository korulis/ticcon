// import { AnyAction, Dispatch } from 'redux';
// import { createStore, applyMiddleware, Store, StoreEnhancer } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
// const configureStore = (initialState = {}): Store<unknown, AnyAction> => {
//     const mid: StoreEnhancer<{ dispatch: Dispatch<AnyAction> }, unknown> = applyMiddleware(thunk);
//     return createStore(
//         rootReducer,
//         initialState,
//         mid
//     );
// }
// export default configureStore

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store



