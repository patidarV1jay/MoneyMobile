import { createSlice } from '@reduxjs/toolkit';
import CallMoneyTransfer1 from './MoneyTransfer1Service';

const initialState = {
  isLoading: false,
  data: {},
};

const MoneyTransfer1Slice = createSlice({
  name: 'Money1',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(CallMoneyTransfer1.pending, state => {
        state.isLoading = true;
      })
      .addCase(CallMoneyTransfer1.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(CallMoneyTransfer1.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default MoneyTransfer1Slice.reducer;
