import { useFormik } from 'formik';
import { NumberSchema } from '../../../constants';
import {
  CallMoneyTransfer1,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { axiosInstanceToken } from '../../../config';
import { useState } from 'react';

const useMoneyTransfer1 = () => {
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.MoneyTransfer1Reducer);
  const { isAccountVerified } = useAppSelector(
    state => state.VerifyAccountReducer,
  );
  const getUniqueString = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 1000000).toString();
    const uniqueString = timestamp.slice(-7) + randomNum.padStart(6, '0');
    return uniqueString;
  };

  const formik = useFormik({
    initialValues: {
      account: '109799104489',
      ifsc: 'ESFB0017002',
      recipient_name: 'VIJAY',
      amount: '1',
      sender_name: 'VIJAY',
      remarks: 'JHEY',
    },
    validationSchema: NumberSchema,
    onSubmit: values => {
      const transaction_id = getUniqueString();
      dispatch(CallMoneyTransfer1({ ...values, transaction_id }));
    },
  });

  const verifyIfsc = async () => {
    try {
      setIsVerified(true);
      const response = await axiosInstanceToken.post('mobile/verify/ifsc', {
        service_provider_id: 13,
        ifsc_code: formik.values.ifsc,
      });
      setIsVerified(false);
      console.log(response.data);
    } catch (error) {
      setIsVerified(false);
      console.log(error);
    }
  };

  return {
    formik,
    isLoading,
    verifyIfsc,
    isVerified,
    getUniqueString,
    dispatch,
    isAccountVerified
  };
};

export default useMoneyTransfer1;
