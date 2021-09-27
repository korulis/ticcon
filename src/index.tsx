import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { commonStore } from './state';
import Game from './Game';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={commonStore}>
            <div>
                <Game />
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
