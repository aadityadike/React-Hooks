import React, { useContext, useState } from "react"
// contexts.
const ThemeContext = React.createContext()
const ThemeUpdate = React.createContext()

// Custom Hooks...
export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdate);
}


export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)

    function toggleTheme() {
        setDarkTheme(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}


