import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './ArticleDetailsHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/shared/const/router';

interface ArticleDetailsHeaderProps {
    className?: string;
}

export const ArticleDetailsHeader: FC<ArticleDetailsHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleDetails(`${article?.id}/edit}`));
    }, [navigate, article]);

    return (
        <div className={classNames(cls.articleDetailsHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>

            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('redaktirovat')}
                </Button>
            )}
        </div>
    );
};
