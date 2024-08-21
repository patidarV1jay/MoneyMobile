import { createSlice } from '@reduxjs/toolkit';
import callAccountVerify from './VerifyAccountService';

const initialState = {
  isAccountVerified: false,
  data: {},
};

const VerifyAccountSlice = createSlice({
  name: 'VerifyAccount',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(callAccountVerify.pending, state => {
        state.isAccountVerified = true;
      })
      .addCase(callAccountVerify.fulfilled, (state, action) => {
        state.isAccountVerified = false;
      })
      .addCase(callAccountVerify.rejected, (state, action) => {
        state.isAccountVerified = false;
      });
  },
});

export default VerifyAccountSlice.reducer;
