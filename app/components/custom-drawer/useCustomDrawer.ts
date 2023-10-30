import { CommonActions } from '@react-navigation/native';
import { Routes } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../redux';
import { logOut } from '../../redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const useCustomDrawer = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signOut = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.Signin }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  return {
    signOut,
    navigation,
  };
};

export default useCustomDrawer;
