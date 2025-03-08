import React from 'react'
import './theme.css'
import useLocalStorage from './useLocalStorage'

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light')

    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className="light-dark-mode-container">
                <p className='content'>Hello World!</p>
                <button className='btn-change-theme' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode
