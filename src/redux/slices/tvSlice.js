import { createSlice } from "@reduxjs/toolkit"

const tvSlice = createSlice({

    name:'tv',
    initialState: {
        one:null,
        two:null,
        three:null,
        four:null,
    }, 

    reducers:{

        listOne: (state,action) => {
            state.one = action.payload
        }, 

        listTwo: (state,action) => {
            state.two = action.payload
        }, 

        listThree: (state,action) => {
            state.three = action.payload
        }, 

        listFour: (state,action) => {
            state.four = action.payload
        }, 

    }
})

export const{ listOne, listTwo, listThree, listFour, listFive, listSix } = tvSlice.actions;
export default tvSlice.reducer