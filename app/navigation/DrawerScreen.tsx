import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft, Funnel } from 'phosphor-react-native';
import { AepsReportHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  AccountStatement,
  BalanceReturnRequest,
  IncomeReport,
  MoneyTransferReport,
  PaymentRequest,
  PaymentRequestReport,
  RechargeReports,
} from '../modules';
import HomeStack from './HomeStack';
import { OperatorReport } from '../modules';
import PaymentRequestStack from './PaymentRequestStack';
import MyCommissionStack from './MyCommissionStack';

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
          header: () => <AepsReportHeader name={Routes.IncomeReport} />,
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.PaymentRequestReports}
        component={PaymentRequestReport}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.PaymentRequestReports}
              Flag={true}
              IsDate={false}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.PaymentRequestStack}
        component={PaymentRequestStack}
        options={{
          headerShown: false,
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.BalanceReturnRequest}
        component={BalanceReturnRequest}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.BalanceReturnRequest}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <DrawerScreenStack.Screen
        name={Routes.MyCommissionStack}
        component={MyCommissionStack}
        options={{
          headerShown: false,
        }}
      />
    </DrawerScreenStack.Navigator>
  );
};

export default DrawerScreen;
