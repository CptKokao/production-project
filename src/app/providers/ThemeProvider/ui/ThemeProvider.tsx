import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings() ;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const [isThemeInit, setThemeInit] = useState(false);
     
    useCallback(() => {
        if (!isThemeInit) {
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
