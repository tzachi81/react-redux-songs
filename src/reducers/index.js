import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'song1', duration: '04:05'},
        {title: 'song2', duration: '04:32'},
        {title: 'song3', duration: '03:05'},
    ];
};

const selectedSongReducre = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.type.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducre
})