import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const verifyOtp = createAsyncThunk(
  'fetch/otp',
  async ({ email, otp, latitude, longitude, ip, userAgent }: any) => {
    try {
      const response = await axios.post(
        'https://aeps.demoserverhosting.in/api/verify-login-otp',
        {
          email,
          latitude,
          longitude,
          ip,
          userAgent,
          otp,
        },
      );
      console.log(response.data,'data');
    } catch (error: any) {
      console.log(error.response.data);
    }
  },
);

export default verifyOtp;
