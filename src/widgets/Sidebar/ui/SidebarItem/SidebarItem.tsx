import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (

        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>

    );
};
