import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;

            const inited = getArticlesInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
