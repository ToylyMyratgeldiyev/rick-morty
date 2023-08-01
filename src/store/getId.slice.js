import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrDATA : []
}

export const getIdSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        addDataArr: (state,action) => {
            state.arrDATA.pop()
            state.arrDATA.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {  addDataArr } = getIdSlice.actions

export default getIdSlice.reducer