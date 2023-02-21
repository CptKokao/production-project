import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './Profile.module.scss';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

interface CounterProps {
    className?: string
}

export const ProfileCard = ({ className }: CounterProps) => {
    const data = useSelector(getProfileData);
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profil')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('redaktirovat')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('vashe-imya')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('vasha-familiya')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
