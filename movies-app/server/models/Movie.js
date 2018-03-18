import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title      : { type: String },
    releaseYear: { type: String },
    format     : { type: String },
    stars      : { type: Array }
});

const Movie = mongoose.model('Movie', MovieSchema);