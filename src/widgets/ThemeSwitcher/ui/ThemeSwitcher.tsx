import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher) => {
    const {theme, toogleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])} 
            onClick={toogleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}
