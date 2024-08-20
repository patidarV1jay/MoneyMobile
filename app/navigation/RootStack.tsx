import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Signin } from '../modules';
import DrawerNav from './DrawerNav';
import { useAppSelector } from '../redux';
import AuthStack from './AuthStack';

const MainStack = createNativeStackNavigator();

const RootStack = () => {
  const { isSuccess, data } = useAppSelector(state => state.signin);
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={data.token ? Routes.DrawerNav : Routes.Signin}>
      <MainStack.Screen name={Routes.AuthStack} component={AuthStack} />
      <MainStack.Screen name={Routes.DrawerNav} component={DrawerNav} />
    </MainStack.Navigator>
  );
};

export default RootStack;
