import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setCommentText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },

    },
    extraReducers(builder) {
        // builder
        //     .addCase(loginByUsername.pending, (state, action) => {
        //         state.error = '';
        //         state.isLoading = true;
        //     })
        //     .addCase(loginByUsername.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //     })
        //     .addCase(loginByUsername.rejected, (state, action) => {
        //         state.error = action.payload as string;
        //         state.isLoading = false;
        //     });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
