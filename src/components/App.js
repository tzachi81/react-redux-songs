import React from 'react';
import SongList from '../components/SongList';
import SongDetails from '../components/SongDetails';

const App = (() => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div className="ui row">
                        <h1 className="ui header">Song List</h1>
                    </div>
                    <div className="ui divider"></div>
                    <div className="ui row">
                        <SongList />
                    </div>
                </div>
                <div className="column eight wide">
                    <SongDetails />
                </div>
            </div>
        </div>
    )
})

export default App;