import React from 'react';
import { connect } from 'react-redux';

import api from '../api/api';

class MoviesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.searchByName = this.searchByName.bind(this);
        this.searchByActor = this.searchByActor.bind(this);
        this.changeSearchCategory = this.changeSearchCategory.bind(this);
    }

    // searchMovies(e) {
    //     let value = {title: e.target.value};
    //     console.log(value)
    //     api.searchByName(value).then(({ data }) => this.props.searchMoviesByTitle(data));
    // }
    searchByName(e) {
        // console.log('test', api.searchByName(e.target.value).then(({ data }) => data));
        api.searchByName(e.target.value).then(({ data }) => this.props.getMovie(data));
    }
    searchByActor(e) {
        api.searchByStar(e.target.value).then(({ data }) => this.props.getMovie(data));
    }

    changeSearchCategory(e) {
        this.props.changeSearchBy(e.target.value);
    }
    render() {
        return (
            <div className="movies-editor">
                <div className="search-block">
                    <div className="input-wrapper">
                        <input type="search"
                               placeholder="Search"
                               className="search"
                               onChange={this.props.searchBy === "name" ? this.searchByName : this.searchByActor}
                        />
                    </div>
                    <div className="radio-block">
                        <div className="radio-wrapper">
                            <input type="radio"
                                   id="movieName"
                                   name='search-by'
                                   value='name'
                                   onChange={this.changeSearchCategory}
                                   defaultChecked={this.props.searchBy === "name"}
                            />
                            <label htmlFor="movieName">Search By Movie Name</label>
                        </div>
                        <div className="radio-wrapper">
                            <input type="radio"
                                   id="starName"
                                   name='search-by'
                                   value='star'
                                   onChange={this.changeSearchCategory}
                                   defaultChecked={this.props.searchBy === "star"}
                            />
                            <label htmlFor="starName">Search By Actor Name</label>
                        </div>
                    </div>
                </div>
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
        getMovie: (movies) => {
            dispatch({ type: "SEARCH_MOVIES", movies});
        },
        changeSearchBy: (value) => {
            dispatch({ type: "CHANGE_SEARCH", value});
        }
    })
)(MoviesEditor);