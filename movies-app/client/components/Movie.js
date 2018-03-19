import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="movie-element" id={this.props.movie._id}>
                <img src={"https://loremflickr.com/320/240?random=" + this.props.index} alt=""/>
                <span className="movie-title">{this.props.movie.title}</span>
            </div>
        );
    }
}

export default Movie;