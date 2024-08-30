import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './slices/moviesSlice'

const appstore = configureStore({

    reducer:{
        allMovies:moviesReducer
    }
})

export default appstore;