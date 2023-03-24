import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailslData = (state: StateSchema) => state?.articleDetails?.data;
export const getArticleDetailslLoading = (state: StateSchema) => state?.articleDetails?.isLoading;
export const getArticleDetailslError = (state: StateSchema) => state?.articleDetails?.error;
