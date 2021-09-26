import { combineReducers } from 'redux';
import squareActionReducer from './squareActionReducer';

export default combineReducers({
    squareActionReducer: squareActionReducer
});