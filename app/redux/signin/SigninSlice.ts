import { Draft, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from './types';
import { SliceConstants } from '../../constants';

const initialState: InitialStateType = {
  isSuccess: false,
};

const SigninSlice = createSlice({
  name: SliceConstants.signin,
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
