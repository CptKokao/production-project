import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
