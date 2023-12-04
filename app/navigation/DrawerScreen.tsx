import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Funnel } from 'phosphor-react-native';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  AccountStatement,
  IncomeReport,
  MoneyTransferReport,
  RechargeReports
} from '../modules';
import HomeStack from './HomeStack';

const DrawerScreenStack = createNativeStackNavigator();

const DrawerScreen = () => {
  return (
    <DrawerScreenStack.Navigator>
      <DrawerScreenStack.Screen
        name={Routes.HomeStack}
        component={HomeStack}
        options={{ headerShown: false }}
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
              Flag={true}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.IncomeReport}
        component={IncomeReport}
        options={{
          header: () => (
            <SearchHeader Icon={ArrowLeft} name="SearchHeader" Flag={true} />
          ),
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
