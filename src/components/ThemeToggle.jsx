import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Priority: 1) saved preference, 2) system setting
        const saved = localStorage.getItem('theme');
        if (saved) {
            const dark = saved === 'dark';
            setIsDark(dark);
            applyTheme(dark);
        } else {
            // Follow system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
            applyTheme(prefersDark);
        }

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                setIsDark(e.matches);
                applyTheme(e.matches);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const applyTheme = (dark) => {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    };

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        applyTheme(newDark);
        localStorage.setItem('theme', newDark ? 'dark' : 'light');
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
}
