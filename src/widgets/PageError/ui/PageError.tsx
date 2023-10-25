import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button from '@/shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const PageError = ({ className }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const relaoadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={relaoadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
