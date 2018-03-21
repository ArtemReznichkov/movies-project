import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { serverPort } from '../etc/config.json';
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');


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

//import .txt file
app.post('/file_import', upload.single('file'), (req, res) => {
    fs.readFile(req.file.path, "utf8", function (err, data) {
        if (err) throw console.log(err);

        var array = data.split("\n\n");
        var jsonArray = [];

        for(var i = 0; i < array.length; i++) {
            var objToPush = {};
            var arrEl = array[i].split("\n");

            if(!array[i][0]) break;
            objToPush.title = arrEl[0].split(': ')[1];
            objToPush.releaseYear = arrEl[1].split(': ')[1];
            objToPush.format = arrEl[2].split(': ')[1];
            objToPush.stars = arrEl[3].split(': ')[1].split(', ');
            jsonArray.push(objToPush);
        }
        db.importFile(jsonArray);
    });
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});