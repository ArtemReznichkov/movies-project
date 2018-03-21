import React from 'react'
import { connect } from 'react-redux';

import { apiPrefix } from '../../etc/config.json';
import api from "../api/api";

class SendFile extends React.Component {
    constructor(props) {
        super(props);
        this.sendFile = this.sendFile.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    sendFile() {
        if (this.props.selectedFile.type !== "text/plain") {
            this.props.fileErrorShow();
        } else {
            this.props.fileErrorHide();
            setTimeout(() => {
                api.listMovies().then(({ data }) => this.props.getMovies(data))
            }, 300);
            api.fileUpload(this.props.selectedFile).then(() => console.log("ok"));
        }
    }

    onChange(e) {
        this.props.selectFile(e.target.files[0]);
    }

    render() {
        return (
            <div className="file-upload">
                <input type="file" id="file-input" onChange={this.onChange} />
                <label htmlFor="file-input"><span className="fas fa-cloud-upload-alt"></span></label>
                <button className="send-file" onClick={this.sendFile}>send file</button>
                <div className="error-block" style={
                    this.props.showFileError ?
                        {"display": "block"}: {"display": "none"}}>
                    Please insert the .txt file in the correct format
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        selectedFile: state.selectedFile,
        showFileError: state.showFileError
    }),
    dispatch => ({
        getMovies: (movies) => {
            dispatch({ type: "GET_LIST", movies});
        },
        selectFile: (selected) => {
            dispatch({ type: "SELECT_FILE", selected})
        },
        fileErrorShow: () => {
            dispatch({ type: "FILE_ERROR_SHOW"})
        },
        fileErrorHide: () => {
            dispatch({ type: "FILE_ERROR_HIDE"})
        }
    })
)(SendFile);