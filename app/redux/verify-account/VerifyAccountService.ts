import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../config';

interface PayloadType {
  transaction_id: string;
  ifsc_code: string;
  account_number: string;
}

const callAccountVerify = createAsyncThunk(
  'call-account-verify',
  async ({ transaction_id, ifsc_code, account_number }: PayloadType) => {
    try {
      const response = await axiosInstanceToken.post('mobile/verify/account', {
        service_provider_id: 13,
        transaction_id,
        ifsc_code,
        account_number,
      });
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  },
);

export default callAccountVerify;
