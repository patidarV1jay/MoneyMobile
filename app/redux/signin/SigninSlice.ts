import { Draft, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from './types';
import { SliceConstants } from '../../constants';
import getSignin from './SigninService';

const initialState: InitialStateType = {
  isSuccess: false,
  data: {},
  isloading: false,
};

const SigninSlice = createSlice({
  name: SliceConstants.signin,
  initialState,
  reducers: {
    login: (state: Draft<InitialStateType>) => {
      state.isSuccess = true;
    },
    logOut: (state: Draft<InitialStateType>) => {
      state.data = {}
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSignin.pending, state => {
        state.isloading = true;
      })
      .addCase(getSignin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isloading = false
        state.isSuccess = true
      })
      .addCase(getSignin.rejected, (state)=>{
        state.isloading = false
        state.isSuccess = false
      })
  },
});

export const { login, logOut } = SigninSlice.actions;
export default SigninSlice.reducer;
