import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"allMovies",
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        upComming:null,
        tv:null,
        combinedMovies:[]
    },
    reducers:{
        listOne:(state,action)=>{
           state.nowPlaying = action.payload;
           state.combinedMovies = [...state.combinedMovies, ...action.payload];
        },
        
        listTwo:(state,action)=>{
            state.popular = action.payload;
            state.combinedMovies = [...state.combinedMovies, ...action.payload];
         },

         listThree:(state,action)=>{
            state.topRated = action.payload;
            state.combinedMovies = [...state.combinedMovies, ...action.payload];
         },

         listFour:(state,action)=>{
            state.upComming = action.payload;
            state.combinedMovies = [...state.combinedMovies, ...action.payload];
         },

         listFive:(state,action) => {
            state.tv = action.payload;
            state.combinedMovies = [...state.combinedMovies, ...action.payload];
         }
    }
})

export const{ listOne, listTwo, listThree, listFour, listFive, combinedMovies } = moviesSlice.actions
export default moviesSlice.reducer 