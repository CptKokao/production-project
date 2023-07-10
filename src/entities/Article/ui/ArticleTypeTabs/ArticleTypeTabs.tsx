import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article-details');
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('vse-stati'),
        },
        {
            value: ArticleType.IT,
            content: t('aiti'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('ekonomika'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('nauka'),
        },
    ], [t]);

    const onChangeClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs tabs={typeTabs} value={value} onTabClick={onChangeClick} className={classNames('', {}, [className])} />
    );
};
