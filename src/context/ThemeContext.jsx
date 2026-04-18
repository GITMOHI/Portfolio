import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext(null);

export const THEME_STORAGE_KEY = 'portfolio-theme';

function readStoredTheme() {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
    } catch {
        /* ignore */
    }
    return null;
}

export function ThemeProvider({ children }) {
    const userChosen = useRef(!!readStoredTheme());

    const [theme, setThemeState] = useState(() => {
        const stored = readStoredTheme();
        if (stored) return stored;
        if (typeof window === 'undefined') return 'light';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');
        if (userChosen.current) {
            try {
                localStorage.setItem(THEME_STORAGE_KEY, theme);
            } catch {
                /* ignore */
            }
        }
    }, [theme]);

    useEffect(() => {
        if (readStoredTheme()) return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            if (userChosen.current) return;
            setThemeState(mq.matches ? 'dark' : 'light');
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    const toggleTheme = () => {
        userChosen.current = true;
        setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
    };

    const setTheme = (t) => {
        if (t !== 'dark' && t !== 'light') return;
        userChosen.current = true;
        setThemeState(t);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
}
