import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Select, { SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/consts';

interface ArticleSortSelectorProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   onChangeOrder: (newOrder: SortOrder) => void
   onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('article-details');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('vozrastaniyu'),
        },
        {
            value: 'desc',
            content: t('ubyvaniyu'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date-sozdaniya'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('nazvaniyu'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('prosmotram'),
        },

    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select label={t('sortirovat-po')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
            <Select label={t('po')} options={orderOptions} value={order} onChange={onChangeOrder} />

        </div>
    );
};
