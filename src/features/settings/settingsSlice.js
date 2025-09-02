import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        theme: "light",
        language: "en",
        fontSize: 16,
    },
    reducers: {
    },
});

export default settingsSlice.reducer;
