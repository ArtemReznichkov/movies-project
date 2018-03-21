import { combineReducers } from 'redux';

import searchBy from './searchBy';
import moviesList from './moviesList';
import actorsList from './actorsList';
import modalIsOpen from './modalIsOpen';
import selectedMovie from './selectedMovie';
import showErrorMessage from './showErrorMessage';
import selectedFile from './selectedFile';

export default combineReducers({
    searchBy,
    moviesList,
    actorsList,
    modalIsOpen,
    selectedMovie,
    showErrorMessage,
    selectedFile
});