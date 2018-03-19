import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import App from './components/App';


const initialState = {
    searchBy: 'name',
    moviesList: []
};

function moviesList (state = initialState, action) {
    if (action.type === "ADD_MOVIE") {
        return {
            ...state,
            moviesList: [...state.moviesList, action.movies]
        };
    } else if (action.type === "GET_LIST") {
        return {
            ...state,
            moviesList: action.movies
        };
    } else if (action.type === "SEARCH_MOVIES") {
        return {
            ...state,
            moviesList: action.movies
        };
    } else if (action.type === "CHANGE_SEARCH") {
        return {
            ...state,
            searchBy: action.value
        };
    } else if (action.type === "DELETE_MOVIE") {
        return {
            ...state,
            moviesList: action.movies
        };
    }
    return state;
}

const store = createStore(moviesList, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
);