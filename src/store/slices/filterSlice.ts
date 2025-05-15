import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    region: string;
}

const initialState: FilterState = {
    region: 'All',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setRegion(state, action: PayloadAction<string>) {
            state.region = action.payload;
        },
    },
});

export const { setRegion } = filterSlice.actions;
export default filterSlice.reducer;
