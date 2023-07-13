import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesOrder, getArticlesPageLimit, getArticlesPageNum,
    getArticlesSearch, getArticlesSort, getArticlesType,
} from '../../selectors/articlesPageSelectors';

interface fetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (_, thunkApi) => {
            const { extra, getState, rejectWithValue } = thunkApi;
            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesSort(getState());
            const order = getArticlesOrder(getState());
            const search = getArticlesSearch(getState());
            const page = getArticlesPageNum(getState());
            const type = getArticlesType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });

                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        type: type === ArticleType.ALL ? undefined : type,
                        q: search,
                    },
                });
                if (!response.data) {
                    throw new Error();
                }
                console.log(response.data);

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
