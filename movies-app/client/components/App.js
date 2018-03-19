import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import MoviesGrid from './MoviesGrid';
import AddMovie from './AddMovie';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='App'>
                <h2 className='App_header'>Movies List</h2>
                <AddMovie />
                <Search />
                <MoviesGrid />
            </div>
        );
    }
}

export default App;