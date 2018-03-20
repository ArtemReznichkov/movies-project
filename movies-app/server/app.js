import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { serverPort } from '../etc/config.json'

import * as db from './utils/DataBaseUtils';

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.use( cors({ origin: '*' }) );

//Get all movies
app.get('/movies', (req, res) => {
    db.listMovies().then(data => res.send(data));
});

//Add movie to collection
app.post('/movies', (req, res) => {
    db.createMovie(req.body).then(data => res.send(data));
});

//Get movie by id
app.get('/movies/:id', (req, res) => {
    db.getOneMovie(req.params.id).then(data => res.send(data));
});

//Delete movie
app.delete('/movies/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(data => res.send(data));
});

//Search movies by name
app.post('/getMovies_byName', (req, res) => {
    db.searchMovieByName(req.body.title).then(data => res.send(data));
});

//Search movies by star
app.post('/getMovies_byStar', (req, res) => {
    db.searchMovieByStar(req.body.star).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});