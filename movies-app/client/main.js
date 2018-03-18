import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import api from './api/api';


function moviesList (state = [], action) {
    if (action.type === "ADD_MOVIE") {
        return [
            ...state,
            action.movies
        ];
    } else if (action.type === "GET_LIST") {
        return action.movies;
    }
    return state;
}
const store = createStore(moviesList);
//
//
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })
//
// store.dispatch({ type: 'ADD_MOVIE', movie: {title: 'first', stars: ['sdfsdf', 'sdfsdfs']}});
// store.dispatch({ type: 'ADD_MOVIE', movie: {title: 'second', stars: ['sdfsdf', 'sdfsdfs']}});



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
);