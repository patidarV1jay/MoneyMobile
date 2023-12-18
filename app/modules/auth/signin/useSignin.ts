import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Routes, SigninSchema } from '../../../constants';
import { useKeyboard } from '../../../hooks';
import { login, useAppDispatch, useAppSelector } from '../../../redux';
import { RootStackParamList } from '../../../types';

const useSignin = () => {
  const { isKeyboardVisible } = useKeyboard();
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(state => state.signin);
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    isSuccess &&
      navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen });
  }, [isSuccess]);

  const formik = useFormik({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login());
    },
  });

  const toggleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return {
    navigation,
    isKeyboardVisible,
    formik,
    toggleSecureEntry,
    isSecureEntry,
  };
};

export default useSignin;
