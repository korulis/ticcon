import { Dispatch } from 'react';
import { createStore, applyMiddleware, Action, Store, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = (initialState = {}): Store<unknown, Action> => {
    const mid: StoreEnhancer<{ dispatch: Dispatch<Action> }, unknown> = applyMiddleware(thunk);
    return createStore(
        rootReducer,
        initialState,
        mid
    );
}

export default configureStore