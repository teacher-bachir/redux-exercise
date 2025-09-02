import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        theme: "light",
        language: "en",
        fontSize: 16,
    },
    reducers: {
        toggleTheme(state, action) {
            state.theme = (state.theme === "light") ? "dark" : "light";
        },
        toggleLanguage(state, action) {
            state.language = (state.language === "en") ? "he" : "en";
        },
        incFontSize(state, action) {
            if (state.fontSize < 30) {
                state.fontSize++;
            }
        },
        decFontSize(state, action) {
            if (state.fontSize > 10) {
                state.fontSize--;
            }
        },
        resetFontSize(state, action) {
            state.fontSize = 16;
        },
    },
});

export const { toggleTheme, toggleLanguage, incFontSize, decFontSize, resetFontSize } = settingsSlice.actions;
export default settingsSlice.reducer;
