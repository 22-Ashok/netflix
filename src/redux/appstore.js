import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './slices/moviesSlice'
import tvReducer from './slices/tvSlice'
import currentMovieReducer from './slices/currentMovei'
import userReducer from './slices/userSlice'

const appstore = configureStore({

    reducer:{
        allMovies:moviesReducer,
        tv:tvReducer,
        current:currentMovieReducer,
        user:userReducer
    }
})

export default appstore;