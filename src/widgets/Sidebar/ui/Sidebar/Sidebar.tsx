import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);

    const onToogle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toogle"
                onClick={onToogle}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {itemList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
