import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Settings from "../settings/Settings";
import SettingsExamplePage from "../settings/SettingsExamplePage";
import Login from "../users/Login";
import Register from "../users/Register";
import RecipesList from "../recipes/RecipesList";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/example" element={<SettingsExamplePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes" element={<RecipesList />} />
        </Routes>
    )
}