import { useFormik } from 'formik';
import { NumberSchema } from '../../../constants';
import {
  CallMoneyTransfer1,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { store } from '../../../redux';

const useMoneyTransfer1 = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.MoneyTransfer1Reducer);
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
  return {
    formik,
    isLoading,
  };
};

export default useMoneyTransfer1;
