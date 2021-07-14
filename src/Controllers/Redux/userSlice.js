import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Abhirami"})
            state.push({name:"Abhi"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;