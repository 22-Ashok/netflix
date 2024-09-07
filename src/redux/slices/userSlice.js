import { createSlice } from "@reduxjs/toolkit";

const userDetail = createSlice({
    name:'user',
    initialState:null, 

    reducers: {

        addUser : (state,action) => {
           return  action.payload;
        }, 

        removeUser : (state) => {
            return null;
        }
    }
})

export const{addUser , removeUser } = userDetail.actions;
export default userDetail.reducer 