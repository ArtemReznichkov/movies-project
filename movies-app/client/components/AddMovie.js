import React from 'react';
import { connect } from 'react-redux';

import api from '../api/api';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.addMovie = this.addMovie.bind(this);
        this.addActor = this.addActor.bind(this);
        this.deleteActor = this.deleteActor.bind(this);
    }

    addMovie() {
        let movieObj = {
            title: this.title.value,
            releaseYear: this.year.value,
            format: this.format.value,
            stars: this.props.actorsList
        };
        api.createMovie(movieObj).then(() =>
            api.listMovies().then(({ data }) => this.props.getMovies(data))
        ).catch(err =>
            console.error(err)
        );
    }

    addActor() {
        this.props.addActorToState(this.actor.value);
    }

    deleteActor(e) {
        this.props.deleteActorFromState(+e.target.getAttribute("index"));
    }

    render() {
        return (
            <div className='add_movie-block'>
                <div className='inputs-block'>
                    <div className="input-wrapper">
                        <input type="text"
                               placeholder="Title"
                               ref={(input) => { this.title = input; }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                               placeholder="Year"
                               ref={(input) => { this.year = input; }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <select name="format" ref={(select) => { this.format = select; }}>
                            <option value="VHS">VHS</option>
                            <option value="DVD">DVD</option>
                            <option value="Blu-Ray">Blu-Ray</option>
                        </select>
                    </div>
                </div>
                <div className='inputs-block actor-block'>
                    <div className="input-wrapper">
                        <input type="text"
                               placeholder="Name"
                               ref={(value) => { this.actor = value; }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <button className="add-actor-btn" onClick={this.addActor}>Add Actor</button>
                    </div>
                </div>
                <div className='inputs-block added-actors'>
                    {this.props.actorsList.map((actor, index) =>{
                            return (<span key ={index} className='actor-element'>{actor}
                                        <span className="delete-actor fas fa-times"
                                              index={index}
                                              onClick={this.deleteActor}></span>
                                   </span>)
                        }
                    )}
                </div>
                <button className="add-movie-btn" onClick={this.addMovie}>Add movie</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.moviesList,
        searchBy: state.searchBy,
        actorsList: state.actorsList
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies});
        },
        addActorToState: (actor) => {
            dispatch({ type: "ADD_ACTOR", actor});
        },
        deleteActorFromState: (index) => {
            dispatch({ type: "DELETE_ACTOR", index});
        }
    })
)(AddMovie);