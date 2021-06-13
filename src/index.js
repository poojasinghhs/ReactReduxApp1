import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import App from './components/app';
import myreducer from './reducers/index';
import {mymiddleware} from './actions/middleware';

ReactDOM.render(
    <Provider store={createStore(myreducer,applyMiddleware(mymiddleware))}>
        <App/>
    </Provider>,document.getElementById("root")
)