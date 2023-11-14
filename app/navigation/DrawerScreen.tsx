import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Funnel } from 'phosphor-react-native';
import { HomeHeader, SearchHeader, DrawerHeader } from '../components';
import { Routes } from '../constants';
import {
  AccountStatement,
  HomeScreen,
  IncomeReport,
  MoneyTransferReport,
  RechargeReports,
} from '../modules';

const DrawerScreenStack = createNativeStackNavigator();

const DrawerScreen = () => {
  return (
    <DrawerScreenStack.Navigator>
      <DrawerScreenStack.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{ header: () => <HomeHeader /> }}
      />
      <DrawerScreenStack.Screen
        name={Routes.RechargeReports}
        component={RechargeReports}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name="Recharge Report"
              Filter={Funnel}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.IncomeReport}
        component={IncomeReport}
        options={{
          header: () => <SearchHeader Icon={ArrowLeft} name="SearchHeader" />,
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.MoneyTransferReport}
        component={MoneyTransferReport}
      />
      <DrawerScreenStack.Screen
        name={Routes.AccountStatement}
        component={AccountStatement}
      />
    </DrawerScreenStack.Navigator>
  );
};

export default DrawerScreen;
