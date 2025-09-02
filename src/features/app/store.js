import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../settings/settingsSlice";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
});

export default store;