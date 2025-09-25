import { useDispatch, useSelector } from "react-redux";
import './Navbar.css';
import { logout } from "../users/usersSlice";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const { language } = useSelector((state) => state.settings);
    const { currentUser } = useSelector(state => state.users);

    const dispatch = useDispatch();

    const direction = (language === 'he') ? 'rtl' : 'ltr';

    return (
        <div className="Navbar" style={{ direction }}>
            <nav>
                {language === 'en' ?
                    (<h1>Welcome {currentUser?.name ?? 'Guest'}</h1>) :
                    (<h1>שלום {currentUser?.name ?? 'אורח'}</h1>)}
                <ul>
                    <NavLink to="">home</NavLink>
                    <NavLink to="settings">settings</NavLink>
                    <NavLink to="settings/example">settings example</NavLink>
                    <NavLink to="login">login</NavLink>
                    <NavLink to="register">register</NavLink>
                    <NavLink to="recipes">recipes</NavLink>
                </ul>
                {
                    currentUser &&
                    <button onClick={() => dispatch(logout())}>
                        {language === 'en' ? 'Logout' : 'התנתקות'}
                    </button>
                }
            </nav>
        </div>
    )
}