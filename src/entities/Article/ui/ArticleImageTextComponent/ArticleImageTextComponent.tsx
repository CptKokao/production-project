import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageTextComponent.module.scss';

interface ArticleImageTextComponentProps {
   className?: string;
}

export const ArticleImageTextComponent: FC<ArticleImageTextComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageTextComponent, {}, [className])}>
            articleImageTextComponent
        </div>
    );
};
