import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface useThemeProps {
    theme?: Theme;
    toogleTheme?: () => void;
}

export const useTheme = (): useThemeProps => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toogleTheme,
    };
};
