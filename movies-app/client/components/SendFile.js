import React from 'react'
import { connect } from 'react-redux';
import axios, { post } from 'axios';

import { apiPrefix } from '../../etc/config.json';
import api from "../api/api";

class SendFile extends React.Component {
    constructor(props) {
        super(props);
        this.sendFile = this.sendFile.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.fileUpload = this.fileUpload.bind(this);
    }
    sendFile(){
        setTimeout(() => {
            api.listMovies().then(({ data }) => this.props.getMovies(data))
        }, 300);
        api.fileUpload(this.props.selectedFile).then(() => console.log("ok"));
    }
    onChange(e) {
        this.props.selectFile(e.target.files[0]);
    }

    render() {
        return (
            <div className="file-upload">
                <input type="file" onChange={this.onChange} />
                <button className="send-file" onClick={this.sendFile}>send file</button>
            </div>
        )
    }
}


export default connect(
    state => ({
        selectedFile: state.selectedFile
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies});
        },
        selectFile: (selected) => {
            dispatch({ type: "SELECT_FILE", selected})
        }
    })
)(SendFile);