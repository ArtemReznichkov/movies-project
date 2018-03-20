import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import api from '../api/api';

const customStyles = {
    content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        padding               : '0'
    }
};

Modal.setAppElement('#mount-point');

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.closePopup();
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="popup-wrapper">
                        <span className="fas fa-times close-popup" onClick={this.closeModal}></span>
                        <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.selectedMovie.title}</h2>
                        <div className="format">
                            <span className="stars-title">Release Year:</span>
                            <span className="star">{this.props.selectedMovie.releaseYear}</span>
                        </div>
                        <div className="format">
                            <span className="stars-title">Format:</span>
                            <span className="star">{this.props.selectedMovie.format}</span>
                        </div>
                        <div className="format">
                            <span className="stars-title">Stars:</span>
                            {
                                this.props.selectedMovie.stars ? this.props.selectedMovie.stars.map((actor, index) =>{
                                    return <span className="star" key ={index}>{actor}</span>;
                                    }
                                ) : ''
                            }
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.moviesList,
        modalIsOpen: state.modalIsOpen,
        selectedMovie: state.selectedMovie
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "DELETE_MOVIE", movies});
        },
        closePopup: () => {
            dispatch({type: "CLOSE_POPUP"})
        }
    })
)(Popup);