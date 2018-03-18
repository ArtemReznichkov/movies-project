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
    }
}