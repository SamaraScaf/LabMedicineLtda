import { createContext, useState } from "react"

// Criação do contexto
export const ThemeContext = createContext()

// Componente que recebe filho
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        console.log('Altera Tema')
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}