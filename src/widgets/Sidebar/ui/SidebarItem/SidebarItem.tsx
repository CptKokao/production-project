import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarProps) => {
    const { t } = useTranslation();

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
