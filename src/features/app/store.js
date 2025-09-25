import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../settings/settingsSlice";
import usersReducer from "../users/usersSlice";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        users: usersReducer,
    },
});

export default store;