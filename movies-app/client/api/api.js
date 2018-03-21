import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';
import {post} from "axios/index";

export default {
    listMovies() {
        return axios.get(`${apiPrefix}/movies`);
    },

    createMovie(data) {
        return axios.post(`${apiPrefix}/movies`, data);
    },

    getMovieInformation(movieId) {
        return axios.get(`${apiPrefix}/movies/${movieId}`);
    },

    deleteMovie(movieId) {
        return axios.delete(`${apiPrefix}/movies/${movieId}`);
    },

    searchByName(searchValue) {
        let title = searchValue;
        return axios.post(`${apiPrefix}/getMovies_byName`, {title});
    },

    searchByStar(searchValue) {
        let star = searchValue;
        return axios.post(`${apiPrefix}/getMovies_byStar`, {star});
    },

    fileUpload(file){
        const formData = new FormData();
        formData.append('file',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return  axios.post(`${apiPrefix}/file_import`, formData, config)
    }
}