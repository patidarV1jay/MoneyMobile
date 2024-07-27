import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { encode } from 'base-64';
import { axiosInstance } from '../../config';

if (!global.btoa) {
  global.btoa = encode;
}

const getSignin = createAsyncThunk(
  'fetch/signin',
  async ({ email, password, latitude, longitude, userAgent, ip }: any) => {
    console.log(email, password, latitude, longitude, userAgent, ip, 'herer');
    console.log(typeof latitude, typeof userAgent);
    try {
      const response = await axiosInstance.post('login', {
        email,
        password,
        latitude,
        longitude,
        userAgent,
        ip,
      });
      console.log(response.data, 'as');
      return response.data;
    } catch (error: any) {
      console.log(error.response.data, 'hh');
    }
  },
);

export default getSignin;
