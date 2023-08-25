import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import { VStack } from '@/shared/ui/Stack';
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
        <section
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

            <VStack gap="8" role="navigation" className={cls.items}>
                {itemList}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </section>
    );
});
