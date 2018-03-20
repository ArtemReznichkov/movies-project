import React from 'react';
import { connect } from 'react-redux';

import api from '../api/api';

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.deleteMovie = this.deleteMovie.bind(this);
        this.showMovieInfo = this.showMovieInfo.bind(this);
    }

    deleteMovie() {
        api.deleteMovie(this.props.movie._id).then(() =>
            api.listMovies().then(({ data }) => this.props.getMovies(data))
        ).catch(err =>
            console.error(err)
        );
    }

    showMovieInfo() {
        api.getMovieInformation(this.props.movie._id).then(({ data }) => {
            this.props.mapSelectMovie(data);
            this.props.openPopup();
        });

    }

    render() {
        return (
            <div className="movie-element" id={this.props.movie._id}>
                <img src={"https://loremflickr.com/320/240?random=" + this.props.index} alt=""/>
                <span className="movie-title" onClick={this.showMovieInfo}>{this.props.movie.title}</span>
                <span className="delete-movie fas fa-trash-alt" onClick={this.deleteMovie}></span>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.moviesList,
        searchBy: state.searchBy
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies: movies});
        },
        mapSelectMovie: (selected) => {
            dispatch({ type: "SELECT_MOVIE", selected});
        },
        openPopup: () => {
            dispatch({ type: "OPEN_POPUP" })
        }
    })
)(Movie);