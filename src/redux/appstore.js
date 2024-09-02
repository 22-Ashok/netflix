import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './slices/moviesSlice'
import tvReducer from './slices/tvSlice'
import currentMovieReducer from './slices/currentMovei'

const appstore = configureStore({

    reducer:{
        allMovies:moviesReducer,
        tv:tvReducer,
        current:currentMovieReducer
    }
})

export default appstore;