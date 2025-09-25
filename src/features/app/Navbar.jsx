import { useDispatch, useSelector } from "react-redux";
import './Navbar.css';
import { logout } from "../users/usersSlice";

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
                    {/* TODO: replace <a> tags with <NavLink> components */}
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">recipes</a></li>
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