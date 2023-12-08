import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Funnel } from 'phosphor-react-native';
import { SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  AccountStatement,
  IncomeReport,
  MoneyTransferReport,
  RechargeReports,
} from '../modules';
import HomeStack from './HomeStack';
import { OperatorReport } from '../modules';

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
              IsDate={false}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.MoneyTransferReport}
        component={MoneyTransferReport}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name="Money Transfer Report"
              Filter={Funnel}
              Flag={true}
              IsDate={false}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.AccountStatement}
        component={AccountStatement}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name="Account Statement"
              Flag={true}
              IsDate={true}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.OperatorReport}
        component={OperatorReport}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name="Operator Report"
              Flag={true}
              IsDate={false}
            />
          ),
        }}

      />
      <DrawerScreenStack.Screen
        name={Routes.IncomeReport}
        component={IncomeReport}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name="SearchHeader"
              Flag={true}
              IsDate={false}
            />
          ),
        }}
      />
    </DrawerScreenStack.Navigator>
  );
};

export default DrawerScreen;
