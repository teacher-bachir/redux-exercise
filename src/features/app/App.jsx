import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from '@mui/stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import './App.css'
import AppRoutes from './AppRoutes'
import Navbar from './Navbar'

function App() {
    const { language } = useSelector(state => state.settings);

    // make rtl when language is hebrew
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const content = (
        <>
            <Navbar />
            <AppRoutes />
        </>
    );

    if (language === 'he'){
        return (
            <CacheProvider value={language === 'he' ? cacheRtl : null}>
                {content}
            </CacheProvider>
        );
    } else {
        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App
