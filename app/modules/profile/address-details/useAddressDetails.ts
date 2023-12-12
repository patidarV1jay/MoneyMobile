import { AgentOnBoardSchema } from '../../../constants';
import { useFormik } from 'formik';

const useAddressDetails = () => {
  const formik = useFormik({
    validationSchema: AgentOnBoardSchema,
    initialValues: {
      address: '',
      cityName: '',
      districtName: '',
      shopName: '',
      pinCode: '',
    },
    onSubmit: () => {},
  });
  return {
    formik,
  };
};

export default useAddressDetails;
