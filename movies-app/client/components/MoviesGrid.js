import React from 'react';
import { connect } from 'react-redux';


import Movie from './Movie';
import api from '../api/api';

class MoviesGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        api.listMovies().then(({ data }) => this.props.getMovies(data));
    }

    render() {
        return (
            <div className="grid_container">
                {this.props.testStore.map((movie, index) =>{
                    return <Movie key ={index} index={index} movie ={movie}/>
                }
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.moviesList
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies: movies});
        }
    })
)(MoviesGrid);