import { CommonActions, ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Share from 'react-native-share';
import { Routes, options } from '../../constants';
import { logOut, useAppDispatch } from '../../redux';
import { RootStackParamList } from '../../types';

const useCustomDrawer = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const signOut = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.Signin }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  const onShare = async () => {
    try {
      await Share.open(options);
    } catch (error) {
      return error
    }
  };

  return {
    signOut,
    navigation,
    onShare,
  };
};

export default useCustomDrawer;
