import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    className?: string;
    size?: number;
    alt?: string
}

const Avatar = ({
    src, className, size, alt,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
        />

    );
};

export default Avatar;
