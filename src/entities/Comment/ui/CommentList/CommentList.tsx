import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>

        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? (comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                    />
                )))
                : (<Text title={t('kommentarii-otsutstvuyut')} />)}
        </div>
    );
};
