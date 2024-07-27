import { useFormik } from 'formik';
import { UpdatePasswordSchema } from '../../../constants';
import {
  getChangePassword,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { useEffect } from 'react';

const useChangePassword = () => {
  const { data } = useAppSelector(state => state.signin);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    validationSchema: UpdatePasswordSchema,
    initialValues: {
      email: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      const { email, newPassword, confirmPassword } = values;
      dispatch(getChangePassword({ email, newPassword, confirmPassword }));
    },
  });

  console.log(formik.values);

  useEffect(() => {
    formik.setFieldValue('email', data?.user?.email);
  }, []);

  return {
    formik,
  };
};

export default useChangePassword;
