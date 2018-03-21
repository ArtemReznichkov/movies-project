import React from 'react';

import Search from './Search';
import MoviesGrid from './MoviesGrid';
import AddMovie from './AddMovie';
import Popup from './Popup';


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
                <Popup />
            </div>
        );
    }
}

export default App;