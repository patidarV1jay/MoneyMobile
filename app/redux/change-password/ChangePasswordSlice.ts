import { createSlice } from '@reduxjs/toolkit';
import getChangePassword from './ChangePasswordService';

interface InitialStateType {
  isLoading: boolean;
  data: {
    [key: string]: string;
  };
}

const initialState: InitialStateType = {
  isLoading: false,
  data: {},
};

const ChangePasswordSlice = createSlice({
  name: 'ChangePassword',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getChangePassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(getChangePassword.fulfilled, (state, action) => {
        (state.isLoading = false), (state.data = action.payload);
      });
  },
});
