import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
    error: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
    },
});

export default recipesSlice.reducer;
