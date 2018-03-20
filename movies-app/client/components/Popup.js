import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import api from '../api/api';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
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
                    <span className="fas fa-times" onClick={this.closeModal}></span>
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.selectedMovie.title}</h2>
                    <ul className="actors-list">
                        {
                            this.props.selectedMovie.stars ? this.props.selectedMovie.stars.map((actor, index) =>{
                                return <li key ={index}>{actor}</li>;
                                }
                            ) : ''
                        }
                    </ul>
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