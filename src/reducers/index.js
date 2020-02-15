import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            id: 1,
            title: 'Curl of the Burl',
            artist: 'Mastodon',
            duration: '04:05'
          },
          {
            id: 2,
            title: 'Oblivion',
            artist: 'Mastodon',
            duration: '06:15'
          },
          {
            id: 3,
            title: 'Flying Whales',
            artist: 'Gojira',
            duration: '03:25'
          }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})