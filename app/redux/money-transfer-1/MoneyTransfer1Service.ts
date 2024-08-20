import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstanceToken } from '../../config';

interface PayloadType {
  account: string;
  ifsc: string;
  recipient_name: string;
  amount: string;
  sender_name: string;
  remarks: string;
  transaction_id: string;
}

const CallMoneyTransfer1 = createAsyncThunk(
  'call/transfer-1',
  async ({
    account,
    ifsc,
    recipient_name,
    amount,
    sender_name,
    remarks,
    transaction_id,
  }: PayloadType) => {
    try {
      const response = await axiosInstanceToken.post(
        'mobile/payout/transaction',
        {
          service_provider_id: '1',
          payment_mode: '1',
          account_type: '1',
          account,
          ifsc,
          recipient_name,
          amount,
          sender_name,
          remarks,
          transaction_id,
          beneficiary_id: '1',
        },
      );
      console.log(response.data, 'payout');
    } catch (error: any) {
      console.log(error.response.data, 'payout here');
    }
  },
);

export default CallMoneyTransfer1;
