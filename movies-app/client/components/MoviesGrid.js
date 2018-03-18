import React from 'react';
import { connect } from 'react-redux';

import api from '../api/api';

class MoviesGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        api.listMovies().then(({ data }) => this.props.getMovies(data));
    }

    render() {
        return (
            <ul>
                {this.props.testStore.map((movie, index) =>{
                    console.log(movie);
                    return <li key={index}>{movie.format}</li>
                }
                )}
            </ul>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies: movies});
        }
    })
)(MoviesGrid);