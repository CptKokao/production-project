import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme } = useJsonSettings() ;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);
    const [isThemeInit, setThemeInit] = useState(false);
    console.log(defaultTheme)
    
    useEffect(() => {
        if (!isThemeInit && defaultTheme) {
            setTheme(defaultTheme)
            setThemeInit(true)
        }
    }, [defaultTheme, isThemeInit]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
