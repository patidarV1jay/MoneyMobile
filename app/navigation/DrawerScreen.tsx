import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeHeader } from '../components';
import { Routes } from '../constants';
import { HomeScreen, IncomeReport, MoneyTransferReport } from '../modules';

const DrawerScreenStack = createNativeStackNavigator();

const DrawerScreen = () => {
  
  return (
    <DrawerScreenStack.Navigator>
      <DrawerScreenStack.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{ header : () => <HomeHeader /> }}
      />
      <DrawerScreenStack.Screen
        name={Routes.IncomeReport}
        component={IncomeReport}
      />
      <DrawerScreenStack.Screen
        name={Routes.MoneyTransferReport}
        component={MoneyTransferReport}
      />
    </DrawerScreenStack.Navigator>
  );
};

export default DrawerScreen;
