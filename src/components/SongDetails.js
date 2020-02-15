import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if (!song){
        return (       
        <div className="ui header">
            <h3 className="ui header">Select a song</h3>
        </div>
        )                    
    }
    return <div>
        <div className="ui header">
            <h3 className="ui header">Song Details:</h3>
        </div>
        <div className="ui card">
            <div className="content">
                <div className="header">
                    <p>Title: {song.title}</p>
                </div>
                <div className="description">
                    <p>Artist: {song.artist}</p>
                    <p>Duration: {song.duration}</p>
                </div>
            </div>            
        </div>
    </div>;
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetails);