import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../settings/settingsSlice";
import usersReducer from "../users/usersSlice";
import recipesReducer from "../recipes/recipesSlice";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        users: usersReducer,
        recipes: recipesReducer,
    },
});

export default store;