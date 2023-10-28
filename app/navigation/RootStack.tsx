import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Signin } from '../modules';
import DrawerNav from './DrawerNav';

const MainStack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={Routes.Signin} component={Signin} />
      <MainStack.Screen name={Routes.DrawerNav} component={DrawerNav} />
    </MainStack.Navigator>
  );
};

export default RootStack;
