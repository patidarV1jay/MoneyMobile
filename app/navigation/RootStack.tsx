import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Signin } from '../modules';
import DrawerNav from './DrawerNav';
import { useAppSelector } from '../redux';

const MainStack = createNativeStackNavigator();

const RootStack = () => {
  const { isSuccess } = useAppSelector(state => state.signin);

  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSuccess ? Routes.DrawerNav : Routes.Signin}>
      <MainStack.Screen name={Routes.Signin} component={Signin} />
      <MainStack.Screen name={Routes.DrawerNav} component={DrawerNav} />
    </MainStack.Navigator>
  );
};

export default RootStack;
