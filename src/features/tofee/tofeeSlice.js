import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfTofees:50,
}

const tofeeSlice=createSlice({
    name:'tofee',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfTofees--;
        },
        reStocked:(state,action)=>{
            state.numOfTofees=state.numOfTofees+action.payload
        }
    }
})

export default tofeeSlice.reducer;
export const {ordered,reStocked}=tofeeSlice.actions ;