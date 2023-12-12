import { useFormik } from 'formik';
import { PersonalInfoSchema } from '../../../constants';

const usePersonalInformation = () => {
  const formik = useFormik({
    validationSchema: PersonalInfoSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: () => {},
  });
  return {
    formik,
  };
};

export default usePersonalInformation;
