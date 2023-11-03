

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<
	User,
	void,
    ThunkConfig<string>
>('user/initAuthData', async (_, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
	const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
	
	if (!userId) {
		return rejectWithValue('');
	}

    try {
        const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

		if (!response) {
			return rejectWithValue('');
		}

		return response;

    } catch (e) {
        console.log(e);
		return rejectWithValue('');
    }
});
