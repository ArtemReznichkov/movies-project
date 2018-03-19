import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listMovies() {
        return axios.get(`${apiPrefix}/movies`);
    },

    createMovie(data) {
        return axios.post(`${apiPrefix}/movies`, data);
    },

    deleteMovie(noteId) {
        return axios.delete(`${apiPrefix}/movies/${noteId}`);
    },

    searchByName(searchValue) {
        let title = searchValue;
        return axios.post(`${apiPrefix}/getMovies_byName`, {title});
    },

    searchByStar(searchValue) {
        let star = searchValue;
        return axios.post(`${apiPrefix}/getMovies_byStar`, {star});
    }
}