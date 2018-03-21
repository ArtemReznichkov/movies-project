import React from 'react'
import { connect } from 'react-redux';
import axios, { post } from 'axios';

import { apiPrefix } from '../../etc/config.json';

class SendFile extends React.Component {
    constructor(props) {
        super(props);
        this.sendFile = this.sendFile.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }
    sendFile(){
        this.fileUpload({ file: this.props.selectedFile }).then((data) => console.log(data)
        ).catch(err =>
            console.error(err)
        );
    }
    onChange(e) {
        this.props.selectFile(e.target.files[0]);
    }
    fileUpload(file){
        const url = `${apiPrefix}/file_import`;
        const formData = new FormData();
        formData.append('file',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return  post(url, formData,config)
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
        selectFile: (selected) => {
            dispatch({ type: "SELECT_FILE", selected})
        }
    })
)(SendFile);