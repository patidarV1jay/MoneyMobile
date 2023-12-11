import { UpdatePasswordSchema } from '../../../constants';
import { useFormik } from 'formik';

const useChangePassword = () => {
  const formik = useFormik({
    validationSchema: UpdatePasswordSchema,
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confimrPassword: '',
    },
    onSubmit: () => {},
  });

  return {
    formik,
  };
};

export default useChangePassword;
