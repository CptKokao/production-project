import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="NotFoundPage" className={cls.NotFoundPage}>
            {t('Страница не найдена')}
        </Page>
    );
};

export default NotFoundPage;
