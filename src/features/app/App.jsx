import Settings from '../settings/Settings'
import SettingsExamplePage from '../settings/SettingsExamplePage'
import Login from '../users/Login'
import Register from '../users/Register'
import './App.css'
import Navbar from './Navbar'

function App() {
    return (
        <>
            <Navbar />
            <div className="flex-row">
                <Login />
                <Register />
            </div>
            <Settings />
            <SettingsExamplePage />
        </>
    )
}

export default App
