import { useSelector } from "react-redux"

export default function Navbar() {
    const { currentUser } = useSelector(state => state.users);

    return (
        <div>
            <nav>
                <h1>Welcome {currentUser?.name ?? 'Guest'}</h1>
                <ul>
                    {/* TODO: replace <a> tags with <NavLink> components */}
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">recipes</a></li>
                </ul>
            </nav>
        </div>
    )
}