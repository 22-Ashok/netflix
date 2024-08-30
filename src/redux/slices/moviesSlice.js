import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"allMovies",
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        upComming:null,
        tv:null
    },
    reducers:{
        listOne:(state,action)=>{
           state.nowPlaying = action.payload
        },
        
        listTwo:(state,action)=>{
            state.popular = action.payload
         },

         listThree:(state,action)=>{
            state.topRated = action.payload
         },

         listFour:(state,action)=>{
            state.upComming = action.payload
         },

         listFive:(state,action) => {
            state.tv = action.payload
         }
    }
})

export const{ listOne, listTwo, listThree, listFour, listFive } = moviesSlice.actions
export default moviesSlice.reducer 