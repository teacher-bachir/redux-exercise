import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppBar, Avatar, Box, IconButton, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import './Navbar.css';
import { logout } from "../users/usersSlice";

const STRINGS = {
    en: {
        welcome: 'Welcome',
        guest: 'Guest',
        logout: 'Logout',
        home: 'Home',
        settings: 'Settings',
        settingsExample: 'Settings Example',
        login: 'Login',
        register: 'Register',
        recipes: 'Recipes'
    },
    he: {
        welcome: 'ברוך הבא',
        guest: 'אורח',
        logout: 'התנתקות',
        home: 'בית',
        settings: 'הגדרות',
        settingsExample: 'דוגמא להגדרות',
        login: 'התחברות',
        register: 'הרשמה',
        recipes: 'מתכונים'
    }
};

export default function Navbar() {
    const { language } = useSelector((state) => state.settings);
    const { currentUser } = useSelector(state => state.users);

    const dispatch = useDispatch();

    const direction = (language === 'he') ? 'rtl' : 'ltr';

    return (
        <Box className="Navbar" sx={{ direction }}>
            <AppBar position="static" component="nav">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="h1">
                        {STRINGS[language].welcome} {currentUser?.name ?? STRINGS[language].guest}
                    </Typography>
                    <MenuItem><Typography><NavLink to="">{STRINGS[language].home}</NavLink></Typography></MenuItem>
                    <MenuItem><Typography><NavLink to="settings">{STRINGS[language].settings}</NavLink></Typography></MenuItem>
                    <MenuItem><Typography><NavLink to="settings/example">{STRINGS[language].settingsExample}</NavLink></Typography></MenuItem>
                    <MenuItem><Typography><NavLink to="login">{STRINGS[language].login}</NavLink></Typography></MenuItem>
                    <MenuItem><Typography><NavLink to="register">{STRINGS[language].register}</NavLink></Typography></MenuItem>
                    <MenuItem><Typography><NavLink to="recipes">{STRINGS[language].recipes}</NavLink></Typography></MenuItem>

                    {
                        currentUser &&
                        <Tooltip title={STRINGS[language].logout}>
                            <IconButton sx={{ p: 0 }} onClick={() => dispatch(logout())}>
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}