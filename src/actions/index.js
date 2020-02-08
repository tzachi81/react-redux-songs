export const selectSong = (songName) => {
    return {
        type: 'SELECTED_SONG',
        payload: songName
    };
};