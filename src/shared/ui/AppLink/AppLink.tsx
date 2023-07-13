import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinksProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo(({
    className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
}: AppLinksProps) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));
