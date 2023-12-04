import { ProviderSchema } from '../../../../constants';
import { useFormik } from 'formik';

const useProviderDetails = () => {
  
  const formik = useFormik({
    validationSchema: ProviderSchema,
    initialValues: {
      phone: '',
      amount: '',
    },
    onSubmit: () => {},
  });
  return {
    formik,
  };
};

export default useProviderDetails;
