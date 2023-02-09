import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                {t('Страница профиля')}
            </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage;
