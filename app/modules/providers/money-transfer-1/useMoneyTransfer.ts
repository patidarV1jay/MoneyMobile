import { useFormik } from 'formik';
import { NumberSchema } from '../../../constants';

const useMoneyTransfer1 = () => {
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validationSchema: NumberSchema,
    onSubmit: () => {},
  });
  return {
    formik,
  };
};

export default useMoneyTransfer1;
