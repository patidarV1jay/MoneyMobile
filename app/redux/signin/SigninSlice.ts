import { Draft, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
  isSuccess: false,
};

const SigninSlice = createSlice({
  name: 'Signin',
  initialState,
  reducers: {
    login: (state: Draft<InitialStateType>) => {
      state.isSuccess = true;
    },
    logOut: (state: Draft<InitialStateType>) => {
      state.isSuccess = false;
    },
  },
});

export const { login, logOut } = SigninSlice.actions;
export default SigninSlice.reducer;
