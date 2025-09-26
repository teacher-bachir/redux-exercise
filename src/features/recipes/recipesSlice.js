import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRecipes } from "./recipesService";

const initialState = {
    recipes: [],
    error: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchRecipes.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const fetchRecipes = createAsyncThunk("recipes/fetchAllRecipes", async () => {
    const response = await getAllRecipes();
    return response;
});

export default recipesSlice.reducer;
