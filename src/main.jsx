import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './features/app/App.jsx'
import { Provider } from 'react-redux'
import store from './features/app/store.js'
import { HashRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </StrictMode>,
)
