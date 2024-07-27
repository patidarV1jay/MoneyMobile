import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';
import { PayloadTypeKyc } from './types';

const getKyc = createAsyncThunk(
  'update/kyc',
  async ({
    dateOfBirth,
    name,
    email,
    mobile,
    personal_pan,
    aadhar,
    company_name,
    pan,
    gst,
    website,
    cin,
    business_profile,
    master_state_id,
    address,
    account_number,
    ifsc,
    bank_name,
    acc_holder_name,
    personalPanCard,
    aadharCard,
    profilePhoto,
    companyPhoto,
  }: PayloadTypeKyc) => {
    try {
      const response = await axiosInstance.post('update-kyc-document', {
        dob: dateOfBirth,
        name,
        email,
        mobile,
        personal_pan,
        aadhar,
        company_name,
        pan,
        gst,
        website,
        cin,
        business_profile,
        master_state_id,
        address,
        account_number,
        ifsc,
        bank_name,
        acc_holder_name,
        personal_pan_photo: personalPanCard,
        aadhar_photo: aadharCard,
        profile_photo: profilePhoto,
        company_photo: companyPhoto,
      });
    } catch (error) {}
  },
);

export default getKyc;
