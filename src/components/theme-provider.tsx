import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the possible theme types
type Theme = 'light' | 'dark';

// Define the shape of the theme context
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
    setTheme: () => { }
});

// Theme Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // State to manage the current theme
    const [theme, setThemeState] = useState<Theme>('light');

    // Effect to handle initial theme setup
    useEffect(() => {
        // Check if a theme is saved in localStorage
        const savedTheme = localStorage.getItem('theme') as Theme;

        if (savedTheme) {
            // Use saved theme if it exists
            setThemeState(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Check system preference if no saved theme
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDarkMode ? 'dark' : 'light';

            setThemeState(initialTheme);
            document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        }
    }, []);

    // Function to set theme and update localStorage and HTML class
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    // Provide theme context to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};