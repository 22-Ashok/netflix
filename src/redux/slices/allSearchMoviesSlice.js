import { createSlice } from '@reduxjs/toolkit'

const allMoviesSlice = createSlice({
    name:'Searchmovies',
    initialState:[],

  reducers : {
    addSearchMovies : (state,action) => {
       return action.payload
    } , 

    emptySearch : () => {
        return [];
    }
  }
})

export const{ addSearchMovies, emptySearch } = allMoviesSlice.actions;
export default allMoviesSlice.reducer;