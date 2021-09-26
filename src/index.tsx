import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { commonStore } from './state';
import Square from './Square';
import Board from './Board';
import Game from './Game';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={commonStore}>
            <div>
                <Game/>
                <Board/>
            {/* <App /> */}
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
