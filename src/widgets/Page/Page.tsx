import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { getScrollByPath, scrollSaveActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from '../../shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '../../shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '../../shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from '../../shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
