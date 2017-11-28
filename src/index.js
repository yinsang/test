import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
const store = createStore(counter);

function counter(state = 3, action) {
    switch(action.type) {
        case 'click1 ac':
        return state + 1;
        default:
        return state
    }
    // return 
} 
ReactDOM.render(
    <Provider store={store}>
        <Routes  />
    </Provider>
    , document.getElementById('root'));

