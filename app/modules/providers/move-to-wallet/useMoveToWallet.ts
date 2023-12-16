import { useFormik } from 'formik';
import { MoveToWalletSchema } from '../../../constants';

const useMoveToWallet = () => {
  const formik = useFormik({
    validationSchema: MoveToWalletSchema,
    initialValues: {
      amount: '',
      remark: '',
      password: '',
    },
    onSubmit: () => {},
  });

  return {
    formik,
  };
};

export default useMoveToWallet;
