import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { getArticleDetailslData, getArticleDetailslError, getArticleDetailslLoading } from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
   className?: string;
   id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailslData);
    const isLoading = useSelector(getArticleDetailslLoading);
    const error = useSelector(getArticleDetailslError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('proizoshla-oshibka-pri-zagruzke-stati')}
            />
        );
    } else {
        content = <>ArticleDetails</>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>

        </DynamicModuleLoader>
    );
});
