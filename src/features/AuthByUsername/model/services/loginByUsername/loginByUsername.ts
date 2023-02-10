import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, {rejectValue: string, extra: ThunkExtraArg}>(
    'logn/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
