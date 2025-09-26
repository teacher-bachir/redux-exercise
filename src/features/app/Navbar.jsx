import { useDispatch, useSelector } from "react-redux";
import './Navbar.css';
import { logout } from "../users/usersSlice";
import { NavLink } from "react-router-dom";

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
        <div className="Navbar" style={{ direction }}>
            <nav>
                <h1>{STRINGS[language].welcome} {currentUser?.name ?? STRINGS[language].guest}</h1>
                <ul>
                    <li> <NavLink to="">{STRINGS[language].home}</NavLink></li>
                    <li> <NavLink to="settings">{STRINGS[language].settings}</NavLink></li>
                    <li> <NavLink to="settings/example">{STRINGS[language].settingsExample}</NavLink></li>
                    <li> <NavLink to="login">{STRINGS[language].login}</NavLink></li>
                    <li> <NavLink to="register">{STRINGS[language].register}</NavLink></li>
                    <li> <NavLink to="recipes">{STRINGS[language].recipes}</NavLink></li>
                </ul>
                {
                    currentUser &&
                    <button onClick={() => dispatch(logout())}>
                        {STRINGS[language].logout}
                    </button>
                }
            </nav>
        </div>
    )
}