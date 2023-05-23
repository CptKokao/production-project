import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<articleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
