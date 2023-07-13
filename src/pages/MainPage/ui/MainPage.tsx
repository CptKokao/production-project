import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Rating } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <Rating hasFeedback />
        </Page>
    );
};

export default MainPage;
