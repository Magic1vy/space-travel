import { createSlice } from '@reduxjs/toolkit'

export const destinationSlice = createSlice ({
    name: 'destination',
    initialState: {
        selectedCategory: "MOON"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})
export const getSelectedCategory = state => state.destination.selectedCategory;
export const { filterCategory } = destinationSlice.actions;
export default destinationSlice.reducer;