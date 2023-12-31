import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import { AepsReportHeader, SearchHeader } from '../components';
import { Routes } from '../constants';
import {
  AEPS,
  AadhaarPay,
  AddBenefiacary,
  AepsLedgerReport,
  AepsReport,
  AgentOnBoard,
  BalanceEnquiry,
  CashWithdrawal,
  MiniStatement,
  MoveToBank,
  MoveToWallet,
} from '../modules';

const StackAEPS = createNativeStackNavigator();

const AEPSStack = () => {
  return (
    <StackAEPS.Navigator>
      <StackAEPS.Screen
        name={Routes.Aeps}
        component={AEPS}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.Aeps}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AgentOnBoard}
        component={AgentOnBoard}
        options={{
          header: () => (
            <SearchHeader
              Icon={ArrowLeft}
              name={Routes.AgentOnBoard}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AepsLedgerReport}
        component={AepsLedgerReport}
        options={{
          header: () => <AepsReportHeader name={Routes.AepsLedgerReport} />,
        }}
      />
      <StackAEPS.Screen
        name={Routes.AepsReport}
        component={AepsReport}
        options={{
          header: () => <AepsReportHeader name={Routes.AepsReport} />,
        }}
      />
      <StackAEPS.Screen
        name={Routes.BalanceEnquiry}
        component={BalanceEnquiry}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.BalanceEnquiry}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.CashWithdrawal}
        component={CashWithdrawal}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.CashWithdrawal}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AadhaarPay}
        component={AadhaarPay}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.AadhaarPay}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.MiniStatement}
        component={MiniStatement}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.MiniStatement}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.MoveToWallet}
        component={MoveToWallet}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.MoveToWallet}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.MoveToBank}
        component={MoveToBank}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.MoveToBank}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
      <StackAEPS.Screen
        name={Routes.AddBeneficiary}
        component={AddBenefiacary}
        options={{
          header: () => (
            <SearchHeader
              name={Routes.AddBeneficiary}
              Icon={ArrowLeft}
              Flag={false}
              IsDate={false}
            />
          ),
        }}
      />
    </StackAEPS.Navigator>
  );
};

export default AEPSStack;
