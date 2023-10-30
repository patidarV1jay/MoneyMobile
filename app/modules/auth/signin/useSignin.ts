import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { Routes, SigninSchema } from '../../../constants';
import { useKeyboard } from '../../../hooks';
import { RootStackParamList } from '../../../types';
import { InitialStateType } from './types';

const useSignin = () => {
  const { isKeyboardVisible } = useKeyboard();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const formik = useFormik<InitialStateType>({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      navigation.replace(Routes.DrawerNav, { screen: Routes.HomeScreen })
      console.log(values)
    },
  });

  return {
    navigation,
    isKeyboardVisible,
    formik,
  };
};

export default useSignin;
