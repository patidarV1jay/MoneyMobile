import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { Routes, SigninSchema } from '../../../constants';
import { useKeyboard } from '../../../hooks';
import { RootStackParamList } from '../../../types';
import { InitialStateType } from './types';
import { login } from '../../../redux';
import { useAppSelector, useAppDispatch } from '../../../redux';
import { useEffect } from 'react';

const useSignin = () => {
  const { isKeyboardVisible } = useKeyboard();
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(state => state.signin);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    isSuccess &&
      navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen });
  }, [isSuccess]);

  const formik = useFormik<InitialStateType>({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login());
    },
  });

  return {
    navigation,
    isKeyboardVisible,
    formik,
  };
};

export default useSignin;
