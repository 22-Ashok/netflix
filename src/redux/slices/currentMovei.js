import { createSlice } from "@reduxjs/toolkit";

const currentMovie = createSlice({
    name: 'current',
    initialState: {
        movieDetail:null,
        ytDetail:null
    },

    reducers : {

        addMovie: (state,action) => {
             state.movieDetail = action.payload;
        } , 

        removeMovie: (state,action) => {
           state.movieDetail = null;
        } ,

        addYtTrailer: (state,action) => {
            state.ytDetail = action.payload;
        },
        
        removeYtDetail: (state,action) => {
            state.ytDetail = null;
        } 
    }
})

export const{addMovie, removeMovie, addYtTrailer, removeYtDetail } = currentMovie.actions
export default currentMovie.reducer;