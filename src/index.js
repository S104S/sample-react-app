import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as initialState from "./initial-state.json";
import Store from './store.js';

ReactDOM.render(
    <Store.Provider initialState={initialState}>
        <App />
    </Store.Provider>, document.getElementById("main"));