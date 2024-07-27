import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface PayloadType {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const getChangePassword = createAsyncThunk(
  'get/change-password',
  async (
    { email, newPassword, confirmPassword }: PayloadType,
    { rejectWithValue },
  ) => {
    console.log(email, newPassword, confirmPassword, 'hrtr');
    try {
        const response = await axiosInstance.post('reset-default-password', {
          email,
          password: newPassword,
          password_confirmation: confirmPassword,
        });
      //   console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue('Error while updating password.');
    }
  },
);

export default getChangePassword;
