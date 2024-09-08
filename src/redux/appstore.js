import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './slices/moviesSlice'
import tvReducer from './slices/tvSlice'
import currentMovieReducer from './slices/currentMovei'
import userReducer from './slices/userSlice'
import searchReducer from './slices/allSearchMoviesSlice'
const appstore = configureStore({

    reducer:{
        allMovies:moviesReducer,
        tv:tvReducer,
        current:currentMovieReducer,
        user:userReducer,
        Searchmovies:searchReducer
    }
})

export default appstore;