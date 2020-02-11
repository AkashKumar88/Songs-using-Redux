//------------------------------src/actions/index.js(Action Creator)-------------------------------
export const selectSong = song => {
        return {
            //Return an action
            type: 'SONG_SELECTED',
            payload: song
        };
};

