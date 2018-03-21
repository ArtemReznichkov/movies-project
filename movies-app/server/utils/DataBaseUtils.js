import mongoose from "mongoose";

import '../models/Movie';

import config from '../../etc/config.json';

const Movie = mongoose.model('Movie');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
}

export function listMovies() {
    return Movie.find().sort({ title: 'asc' });
}

export function getOneMovie(id) {
    return Movie.findById(id);
}

export function createMovie(data) {
    const movie = new Movie({
        title: data.title,
        releaseYear: data.releaseYear,
        format: data.format,
        stars: data.stars
    });
    return movie.save();
}

export function deleteMovie(id) {
    return Movie.findById(id).remove();
}

export function searchMovieByName(name) {
    return Movie.find({title: {"$regex": name, "$options": "i"}}).sort({ title: 'asc' });
}

export function searchMovieByStar(name) {
    return Movie.find({stars: {"$regex": name, "$options": "i"}}).sort({ title: 'asc' });
}

export function importFile(array) {
    for( var i = 0; i < array.length; i++ ) {
        const movie = new Movie({
            title: array[i].title,
            releaseYear: array[i].releaseYear,
            format: array[i].format,
            stars: array[i].stars
        });
        movie.save();
    };
}