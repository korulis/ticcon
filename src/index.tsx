import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { Provider } from 'react-redux'
import configureStore from './store';
import Game from './Game';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <Game />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
