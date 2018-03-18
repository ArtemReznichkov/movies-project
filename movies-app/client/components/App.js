import React from 'react';
import { connect } from 'react-redux';

import MoviesEditor from './MoviesEditor';
import MoviesGrid from './MoviesGrid';

import api from '../api/api';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    // componentWillMount() {
    //     api.listMovies().then(({ data }) => this.props.getMovies(data));
    // }
    render() {
        let movies = this.props.testStore[0];
        return (
            <div className='App'>
                <h2 className='App_header'>MoviesApp</h2>
                <MoviesEditor onMovieAdd='' />
                <MoviesGrid />
            </div>
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
)(App);